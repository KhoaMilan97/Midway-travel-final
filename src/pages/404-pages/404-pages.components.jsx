import React from "react";

import { Link } from "react-router-dom";

class NotFound extends React.Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <section id="hero">
        <div className="intro_title error">
          <h1 className="animated fadeInDown">404</h1>
          <p className="animated fadeInDown">Oops!! Không tìm thấy trang</p>
          <Link to="/" className="animated fadeInUp button_intro">
            Trở về trang chủ
          </Link>{" "}
          <Link to="/tours" className="animated fadeInUp button_intro outline">
            Xem tất cả tour
          </Link>
        </div>
      </section>
    );
  }
}

export default NotFound;
