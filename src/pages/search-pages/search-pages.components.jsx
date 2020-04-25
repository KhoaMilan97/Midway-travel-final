import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Pagination from "react-js-pagination";

import BannerHeader from "../../shared/banner-header.components";
import TourItems from "../../components/tour-items/tour-items.components";

import { selectAllType } from "../../redux/type-tour/type-tour.selector";
import { selectSearchResult } from "../../redux/search/search.selector";

class SearchPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      toursPerPages: 5,
    };
  }

  componentDidMount() {
    const { title } = this.props;
    document.title = `${title}`;
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPage: pageNumber });
    window.scrollTo(0, 0);
  }

  render() {
    const { typeTours, match, searchTours } = this.props;
    const { currentPage, toursPerPages } = this.state;
    // Get Current Tours
    const indexOfLastTours = currentPage * toursPerPages; // 1 * 5 = 5 //
    const indexOfFirstTours = indexOfLastTours - toursPerPages; // 5 - 5 = 0 //
    const currentTours = searchTours.slice(indexOfFirstTours, indexOfLastTours); // (0,5)

    return (
      <React.Fragment>
        <BannerHeader title="Tìm kiếm" content="" />
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/tours">Tour</Link>
                </li>
                <li>{match.params.type}</li>
              </ul>
            </div>
          </div>

          <div className="container margin_60">
            <div className="row">
              <aside className="col-lg-3">
                <div className="box_style_cat">
                  <ul id="cat_nav">
                    <li>
                      <Link to="/tours">
                        <i className="icon_set_1_icon-51" />
                        All tours
                      </Link>
                    </li>
                    {typeTours.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={`/tours/${item.type_link}/${item.id}`}
                          onClick={() => this.setState({ currentPage: 1 })}
                        >
                          <i className="icon_set_1_icon-51" />
                          {item.name_type}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="box_style_2">
                  <i className="icon_set_1_icon-57" />
                  <h4>
                    Cần <span>giúp đỡ?</span>
                  </h4>
                  <a href="tel://004542344599" className="phone">
                    +84 985 007449
                  </a>
                  <small>Monday to Friday 9.00am - 7.30pm</small>
                </div>
              </aside>
              {/*End aside */}
              <div className="col-lg-9">
                {currentTours.length > 0 ? (
                  currentTours.map((tour) => (
                    <TourItems key={tour.id_tour} {...tour} />
                  ))
                ) : (
                  <div className="alert alert-danger text-center">
                    Không có tour nào thỏa yêu cầu
                  </div>
                )}

                <hr />
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={toursPerPages}
                  totalItemsCount={searchTours.length}
                  pageRangeDisplayed={toursPerPages}
                  itemClass="page-item"
                  linkClass="page-link"
                  onChange={this.handlePageChange.bind(this)}
                  innerClass="pagination justify-content-center"
                />
                {/* end pagination*/}
              </div>
              {/* End col lg-9 */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  typeTours: selectAllType(state),
  searchTours: selectSearchResult(state),
});

export default connect(mapStateToProps)(withRouter(SearchPages));
