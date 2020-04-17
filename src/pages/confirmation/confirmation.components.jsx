import React from "react";
import { Link } from "react-router-dom";

class Confirmation extends React.Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
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
              <div className="col-4 bs-wizard-step complete">
                <div className="text-center bs-wizard-stepnum">
                  Your details
                </div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link to="/" className="bs-wizard-dot" />
              </div>
              <div className="col-4 bs-wizard-step complete">
                <div className="text-center bs-wizard-stepnum">Finish!</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link to="/confirm" className="bs-wizard-dot" />
              </div>
            </div>
            {/* End bs-wizard */}
          </div>
        </section>
        {/* End intro-title */}
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>Thông tin chi tiết</li>
              </ul>
            </div>
          </div>
          {/* End position */}
          <div className="container margin_60">
            <div className="row">
              <div className="col-lg-8 add_bottom_15">
                <div className="form_title">
                  <h3>
                    <strong>
                      <i className="icon-ok" />
                    </strong>
                    Thank you!
                  </h3>
                  <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                </div>
                <div className="step">
                  <p>
                    Lorem ipsum dolor sit amet, nostrud nominati vis ex, essent
                    conceptam eam ad. Cu etiam comprehensam nec. Cibo delicata
                    mei an, eum porro legere no. Te usu decore omnium, quem
                    brute vis at, ius esse officiis legendos cu. Dicunt
                    voluptatum at cum. Vel et facete equidem deterruisset, mei
                    graeco cetero labores et. Accusamus inciderint eu mea.
                  </p>
                </div>
                {/*End step */}
                <div className="form_title">
                  <h3>
                    <strong>
                      <i className="icon-tag-1" />
                    </strong>
                    Booking summary
                  </h3>
                  <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                </div>
                <div className="step">
                  <table className="table table-striped confirm">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Louvre musuem tickets</strong>
                        </td>
                        <td>2x</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Date</strong>
                        </td>
                        <td>25 Febraury 2015</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>To</strong>
                        </td>
                        <td>Jhon Doe</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Payment type</strong>
                        </td>
                        <td>Credit card</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*End step */}
              </div>
              {/*End col */}
              <aside className="col-lg-4">
                <div className="box_style_1">
                  <h3 className="inner">Thank you!</h3>
                  <p>
                    Nihil inimicus ex nam, in ipsum dignissim duo. Tale
                    principes interpretaris vim ei, has posidonium definitiones
                    ut. Duis harum fuisset ut his, duo an dolor epicuri
                    appareat.
                  </p>
                </div>
                <div className="box_style_4">
                  <i className="icon_set_1_icon-89" />
                  <h4>
                    Have <span>questions?</span>
                  </h4>
                  <a href="tel://004542344599" className="phone">
                    +45 423 445 99
                  </a>
                  <small>Monday to Friday 9.00am - 7.30pm</small>
                </div>
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

export default Confirmation;
