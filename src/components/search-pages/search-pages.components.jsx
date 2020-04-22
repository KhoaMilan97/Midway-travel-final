import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";

import { dataDestination } from "./data-search";

import "react-datepicker/dist/react-datepicker.css";
import "./search-pages.styles.scss";

const SearchPages = () => {
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
    { value: "hanoi", label: "Hà Nội" },
    { value: "hochiminh", label: "Hồ Chí Minh" },
  ];

  const optionsDestination = dataDestination.map((item) => {
    return { value: item.value, label: item.display };
  });

  const optionsPrice = [
    { value: "2", label: "Dưới 2tr" },
    { value: "3", label: "Từ 2tr - 3tr" },
    { value: "5", label: "Từ 3tr - 5tr" },
    { value: "10", label: "Từ 5tr - 10tr" },
    { value: "20", label: "Từ 10tr - 20tr" },
    { value: "50", label: "Từ 20tr - 50tr" },
    { value: "51", label: "Trên 50tr" },
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
      alert("Search Now");
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

export default SearchPages;
