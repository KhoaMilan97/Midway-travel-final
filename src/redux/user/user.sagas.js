import { takeLatest, put, all, call } from "redux-saga/effects";

import API from "../../api/baseURL";

import { auth, googleProvider } from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  registerFailure,
  registerSuccess,
  recoverPasswordSuccess,
  recoverPasswordFailure,
} from "./user.action";

import userTypes from "./user.types";

// GOOGLE LOGIN
export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const { displayName, email } = user;
    //let token = yield auth.currentUser.getIdToken(/* forceRefresh */ true);

    // yield API.post("insert", {
    //   uid: uid,
    //   email: email,
    //   password: null,
    //   fullname: displayName,
    //   address: null,
    //   phone: user.phoneNumber
    // });

    yield put(signInSuccess({ displayName, email }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

// Facebook login
// export function* facebookSignin() {
//   try {
//     const { user } = yield auth.signInWithPopup(facebookProvider);
//     const { displayName, email, uid } = user;

//     yield put(signInSuccess({ displayName, email, uid }));
//   } catch (err) {
//     yield put(signInFailure(err.message));
//   }
// }

// export function* onFacebookLoginStart() {
//   yield takeLatest(userTypes.FACEBOOK_SIGN_IN_START, facebookSignin);
// }

// SIGN OUT
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err.message));
  }
}

export function* onSignOutStart() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOut);
}

/* SIGN UP */
export function* register({
  payload: { email, password, displayName, phone },
}) {
  try {
    yield auth.createUserWithEmailAndPassword(email, password);
    yield API.post("insert", {
      fullname: displayName,
      pass: password,
      email: email,
      address: null,
      phone: phone,
      role: 0,
    });
    yield auth.onAuthStateChanged(function (user) {
      if (user) {
        user.updateProfile({
          displayName: displayName,
        });
      }
    });
    yield put(registerSuccess({ email, displayName, phone, password }));
  } catch (err) {
    yield put(registerFailure(err.message));
  }
}

export function* onRegister() {
  yield takeLatest(userTypes.REGISTER_EMAIL_START, register);
}

/* SIGN IN */
export function* signIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const displayName = user.displayName;
    // let token = yield auth.currentUser.getIdToken(/* forceRefresh */ true);

    yield put(signInSuccess({ displayName, email }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* onSignInWithEmail() {
  yield takeLatest(userTypes.SIGN_IN_WITH_EMAIL, signIn);
}

/* SIGN IN AFTER SIGN UP */
export function* signInAfterSignUp({ payload: { email, password } }) {
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  const displayName = user.displayName;
  yield put(signInSuccess({ displayName, email }));
}

export function* onSignInaAfterSignUp() {
  yield takeLatest(userTypes.REGISTER_EMAIL_SUCCESS, signInAfterSignUp);
}

/* RESET PASSWORD  */
// http://midway-travel.com/server/public/api/userUpdate/23
export function* recoverPassword({ payload }) {
  try {
    yield auth.sendPasswordResetEmail(payload);
    yield put(recoverPasswordSuccess());
  } catch (err) {
    yield put(recoverPasswordFailure(err));
  }
}

export function* onRecoverPassword() {
  yield takeLatest(userTypes.RECOVER_PASSOWRD_START, recoverPassword);
}

// CALL ALL SAGAS
export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignOutStart),
    call(onSignInaAfterSignUp),
    call(onRegister),
    call(onSignInWithEmail),
    call(onRecoverPassword),
  ]);
}
