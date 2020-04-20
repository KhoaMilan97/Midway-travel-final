import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selector";

import Header from "./components/header/header.components";
import Footer from "./components/footer/footer.components";
import Spinner from "./components/spinner/spinner.components";
import ScrollToTop from "./util/scrollToTop";
import Scroll from "./components/scrol/scroll.components";

const HomePages = lazy(() => import("./pages/homepages/homepages.components"));
const About = lazy(() => import("./pages/about/about.component"));
const SignIn = lazy(() => import("./pages/sign-in/sign-in.components"));
const SignUp = lazy(() => import("./pages/sign-up/sign-up.components"));
const NotFound = lazy(() => import("./pages/404-pages/404-pages.components"));
const TourPages = lazy(() => import("./pages/tours/tours.components"));
const Confirmation = lazy(() =>
  import("./pages/confirmation/confirmation.components")
);
const CheckOutPages = lazy(() =>
  import("./pages/check-out/check-out.components")
);
const ContactPages = lazy(() =>
  import("./pages/contact-us/contact-pages.components")
);
const ForgotPassword = lazy(() =>
  import("./pages/forgot-password/forget-password.components")
);

const App = ({ currentUser }) => (
  <div className="App">
    <Header currentUser={currentUser} />
    <Suspense fallback={<Spinner />}>
      <ScrollToTop />
      <Switch>
        <Route
          exact
          path="/about"
          render={() => <About title="Midway - Giới thiệu" />}
        />
        <Route
          exact
          path="/sign-in"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignIn title="Midway - Đăng nhập" />
            )
          }
        />
        <Route
          exact
          path="/sign-up"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignUp title="Midway - Đăng kí" />
            )
          }
        />

        <Route
          exact
          path="/checkout"
          render={() =>
            !currentUser ? (
              <Redirect to="/sign-in" />
            ) : (
              <CheckOutPages title="Midway - Thanh toán" />
            )
          }
        />
        <Route path="/tours" render={(props) => <TourPages {...props} />} />
        <Route
          exact
          path="/confirm"
          render={() => <Confirmation title="Midway - xác nhận thanh toán" />}
        />
        <Route
          exact
          path="/forgot-password"
          render={() => <ForgotPassword title="Midway - Quên mật khẩu" />}
        />
        <Route
          exact
          path="/contact"
          render={() => <ContactPages title="Midway - Liên hệ" />}
        />

        <Route
          exact
          path="/"
          render={() => <HomePages title="Midway - Travel" />}
        />
        <Route
          path="*"
          render={() => <NotFound title="Midway - không tìm thấy trang" />}
        />
      </Switch>
    </Suspense>
    <Scroll />
    <Footer />
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
