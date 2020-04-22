import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import TopTours from "../../components/top-tour/top-tour.components";
import PopularTours from "../../components/popular-tour/popular-tours.components";
import WithSpinner from "../../components/with-spinner/with-spinner.components";
import SearchPages from "../../components/search-pages/search-pages.components";

import { getTourStart } from "../../redux/tour/tour.action";
import { selectTourLoading } from "../../redux/tour/tour.selector";

const TopToursContainer = WithSpinner(TopTours);
const PopularToursContainer = WithSpinner(PopularTours);

class HomePages extends React.Component {
  componentDidMount() {
    const { getTourStart } = this.props;
    getTourStart();
    document.title = this.props.title;
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        <main>
          <SearchPages />
          <div className="white_bg">
            <div className="container margin_60">
              <div className="row small-gutters categories_grid">
                <div className="col-sm-12 col-md-6">
                  <Link to="/tours">
                    <img
                      src="img/img_cat_home_1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="wrapper">
                      <h2>All tours</h2>
                      <p>1150 Locations</p>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="row small-gutters mt-md-0 mt-sm-2">
                    <div className="col-sm-6">
                      <Link to="/tours/tour-mien-bac/1">
                        <img
                          src="img/img_cat_home_2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="wrapper">
                          <h2>Tour miền bắc</h2>
                          <p>800 Locations</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link to="/tours/tour-mien-trung/2">
                        <img
                          src="img/img_cat_home_3.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="wrapper">
                          <h2>Tour miền trung</h2>
                          <p>650 Locations</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-12 mt-sm-2">
                      <Link to="/tours/tour-mien-nam/3">
                        <img
                          src="img/img_cat_home_4.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="wrapper">
                          <h2>Tour miền nam</h2>
                          <p>1132 Locations</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*/categories_grid*/}
            </div>
            {/* /container */}
          </div>
          {/* /white_bg */}
          <div className="container margin_60">
            <div className="main_title">
              <h2>
                <span>Tour</span> hot
              </h2>
            </div>
            <TopToursContainer isLoading={loading} />

            <p className="text-center add_bottom_30">
              <Link to="/tours" className="btn_1">
                Xem tất cả tour
              </Link>
            </p>
            <hr className="mt-5 mb-5" />
            <div className="main_title">
              <h2>
                <span>Tour</span> phổ biến
              </h2>
            </div>
            <PopularToursContainer isLoading={loading} />
            <p className="text-center nopadding">
              <Link to="/tours" className="btn_1">
                Xem tất cả tour
              </Link>
            </p>
          </div>
          {/* End container */}
          <div className="white_bg">
            <div className="container margin_60">
              <div className="main_title">
                <h2>
                  Plan <span>Your Tour</span> Easly
                </h2>
                <p>
                  Quisque at tortor a libero posuere laoreet vitae sed arcu.
                  Curabitur consequat.
                </p>
              </div>
              <div className="row feature_home_2">
                <div className="col-md-4 text-center">
                  <img
                    src="img/adventure_icon_1.svg"
                    alt=""
                    width={75}
                    height={75}
                  />
                  <h3>Tour free &#38; Easy</h3>
                  <p>
                    Chuyên tour free &#38; easy với lịch trình đa dạng, dịch vụ
                    chất lượng, giá ưu đãi
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <img
                    src="img/adventure_icon_2.svg"
                    alt=""
                    width={75}
                    height={75}
                  />
                  <h3>Land tour &#38; dịch vụ</h3>
                  <p>
                    Chuyên tour trọn gói tại điểm đến - Vé tham quan &#38; show.
                    Tour ngắn ngày - Hoạt động trải nghiệm...
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <img
                    src="img/adventure_icon_3.svg"
                    alt=""
                    width={75}
                    height={75}
                  />
                  <h3>Chất lượng - giá cạnh tranh</h3>
                  <p>
                    Chúng tôi luôn nỗ lực tối ưu nhất các sản phẩm của mình,
                    chính sách hoàn tiền néu giá chưa phải tốt nhất
                  </p>
                </div>
              </div>
            </div>
            {/* End container */}
          </div>
          {/* End white_bg */}

          {/* End container */}
        </main>
        {/* End main */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectTourLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getTourStart: () => dispatch(getTourStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePages);
