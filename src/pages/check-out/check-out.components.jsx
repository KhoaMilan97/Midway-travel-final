import React from "react";
import { createStructuredSelector } from "reselect";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { bookToursStart } from "../../redux/cart/cart.action";

import Summary from "../../components/summary/summary.components";
import StripeButton from "../../components/stripe-button/stripe-button.components";

class CheckOutPages extends React.Component {
  constructor(props) {
    super(props);
    const { currentUser } = this.props;

    this.state = {
      displayName: currentUser.displayName || "",
      email: currentUser.email || "",
      phoneNumber: currentUser.phoneNumber || "",
    };
  }

  componentDidMount() {
    document.title = this.props.title;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    const { bookToursStart } = this.props;
    const { displayName, email, phoneNumber } = this.state;
    const { cartItems } = this.props;

    bookToursStart({
      displayName,
      email,
      phoneNumber,
      id: cartItems.id,
      date: cartItems.date,
      time: cartItems.time,
      adult: cartItems.adult,
      children: cartItems.children,
      totalPrice: cartItems.totalCost,
    });

    const { history } = this.props;
    history.push({ pathname: "/confirm" });
  };

  render() {
    const { displayName, email, phoneNumber } = this.state;
    const { cartItems } = this.props;

    return (
      <React.Fragment>
        <section id="hero_2">
          <div className="intro_title">
            <h1>Place your order</h1>
            <div className="bs-wizard row">
              <div className="col-4 bs-wizard-step complete">
                <div className="text-center bs-wizard-stepnum">Your cart</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link to="/cart" className="bs-wizard-dot" />
              </div>
              <div className="col-4 bs-wizard-step active">
                <div className="text-center bs-wizard-stepnum">
                  Your details
                </div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link to="/checkout" className="bs-wizard-dot" />
              </div>
              <div className="col-4 bs-wizard-step disabled">
                <div className="text-center bs-wizard-stepnum">Finish!</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link to="/confirm" className="bs-wizard-dot" />
              </div>
            </div>
            {/* End bs-wizard */}
          </div>
          {/* End intro-title */}
        </section>
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Check out</li>
              </ul>
            </div>
          </div>
          {/* End position */}
          <div className="container margin_60">
            <div className="row">
              <div className="col-lg-8 add_bottom_15">
                <div className="form_title">
                  <h3>
                    <strong>1</strong>Thông tin của bạn
                  </h3>
                  <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                </div>
                <div className="step">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Display Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname_booking"
                          name="displayName"
                          value={displayName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          id="email_booking"
                          name="email"
                          className="form-control"
                          value={email}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Telephone</label>
                        <input
                          type="text"
                          id="telephone_booking"
                          name="phoneNumber"
                          className="form-control"
                          value={phoneNumber}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*End step */}
                <div className="form_title">
                  <h3>
                    <strong>2</strong>Thanh toán
                  </h3>
                </div>

                <div className="step">
                  <div className="form-group">
                    <label>
                      <input
                        type="checkbox"
                        name="policy_terms"
                        id="policy_terms"
                      />
                      Thanh toán bằng tiền mặt
                    </label>
                  </div>

                  <h4>Hoặc thanh toán bằng Payment</h4>
                  <StripeButton price={cartItems.totalCost} />
                </div>

                {/*End step */}
                <div id="policy">
                  <button
                    className="btn_1 green medium"
                    onClick={this.handleSubmit}
                  >
                    Book now
                  </button>
                </div>
              </div>
              <aside className="col-lg-4">
                <Summary />
              </aside>
            </div>
            {/*End row */}
          </div>
          {/*End container */}
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  bookToursStart: (tours) => dispatch(bookToursStart(tours)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CheckOutPages)
);
