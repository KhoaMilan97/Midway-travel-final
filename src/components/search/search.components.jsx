import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";

import { searchTourStart } from "../../redux/search/search.action";

import { dataDestination } from "./data-search";

import "react-datepicker/dist/react-datepicker.css";
import "./search.styles.scss";

const SearchPages = ({ searchTourStart, history }) => {
  const [searchState, setSearchState] = useState({
    departure: null,
    destination: null,
    date: new Date(),
    price: null,
  });

  const [selectState] = useState({
    isClearable: true,
  });

  const { departure, destination, date, price } = searchState;
  const { isClearable } = selectState;

  const optionsDeparture = [
    { value: "Hà Nội", label: "Hà Nội" },
    { value: "Hồ Chí Minh", label: "Hồ Chí Minh" },
  ];

  const optionsDestination = dataDestination.map((item) => {
    return { value: item.value, label: item.display };
  });

  const optionsPrice = [
    { value: "1", label: "Dưới 2tr" },
    { value: "2", label: "Từ 2tr - 3tr" },
    { value: "3", label: "Từ 3tr - 5tr" },
    { value: "4", label: "Từ 5tr - 10tr" },
    { value: "5", label: "Từ 10tr - 20tr" },
    { value: "6", label: "Từ 20tr - 50tr" },
    { value: "7", label: "Trên 50tr" },
  ];

  const handleSelectChange = (name) => (value) => {
    setSearchState({ ...searchState, [name]: value });
  };

  const onDateChange = (date) => setSearchState({ ...searchState, date });

  const handleSearch = () => {
    if (
      (departure != null) &
      (destination != null) &
      (date != null) &
      (price != null)
    ) {
      /* Convert date to mysql date can accpet */
      function formatDate(date1) {
        return (
          date1.getFullYear() +
          "-" +
          (date1.getMonth() < 9 ? "0" : "") +
          (date1.getMonth() + 1) +
          "-" +
          (date1.getDate() < 10 ? "0" : "") +
          date1.getDate()
        );
      }
      searchTourStart({
        departure: departure.value,
        destination: destination.value,
        date: formatDate(date),
        price: price.value,
      });
      history.push("/search-result");
    }
  };

  return (
    <>
      <section id="search_container">
        <div id="search">
          <div className="tab-content">
            <div className="tab-pane active show" id="tours">
              <h3>Tìm kiếm Tours Việt Nam</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Nơi khởi hành</label>
                    <div className="box">
                      <Select
                        name="departure"
                        value={departure}
                        onChange={handleSelectChange("departure")}
                        options={optionsDeparture}
                        isClearable={isClearable}
                        placeholder="Chọn nơi khởi hành..."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Điểm đến</label>
                    <div className="box">
                      <Select
                        name="destination"
                        value={destination}
                        onChange={handleSelectChange("destination")}
                        options={optionsDestination}
                        isClearable={isClearable}
                        placeholder="Chọn điểm đến..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      <i className="icon-calendar-7" /> Chọn ngày đi
                    </label>
                    <DatePicker
                      selected={date}
                      minDate={new Date()}
                      onChange={onDateChange}
                      className="date-pick form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Chọn giá tour</label>
                    <div className="box">
                      <Select
                        name="price"
                        options={optionsPrice}
                        onChange={handleSelectChange("price")}
                        value={price}
                        isClearable={isClearable}
                        placeholder="Chọn giá..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
              <hr />
              <button className="btn_1 green" onClick={handleSearch}>
                <i className="icon-search" />
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchTourStart: (value) => dispatch(searchTourStart(value)),
});

export default withRouter(connect(null, mapDispatchToProps)(SearchPages));
