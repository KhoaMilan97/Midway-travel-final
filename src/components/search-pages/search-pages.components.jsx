import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./search-pages.styles.scss";

const SearchPages = () => {
  const [searchState, setSearchState] = useState({
    departure: "Ha Noi",
    destination: "Da Lat",
    date: new Date(),
    price: "",
  });

  const { departure, destination, date, price } = searchState;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchState({ ...searchState, [name]: value });
  };

  const onDateChange = (date) => setSearchState({ ...searchState, date });

  const handleSubmit = () => {
    alert("Tìm kiếm");
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
                      <select
                        name="departure"
                        value={departure}
                        onChange={handleChange}
                      >
                        <option value="Ha Noi">Hà Nội</option>
                        <option value="Ho Chi Minh">Hồ Chí Minh</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Điểm đến</label>
                    <div className="box">
                      <select
                        name="destination"
                        value={destination}
                        onChange={handleChange}
                      >
                        <option value="Da lat">Đà Lạt</option>
                        <option value="Can tho">Cần Thơ</option>
                        <option value="Da nang">Đà Nẵng</option>
                      </select>
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
                      <select name="price">
                        <option defaultValue={0}>Hà Nội</option>
                        <option defaultValue={1}>Hồ Chí Minh</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
              <hr />
              <button className="btn_1 green" onClick={handleSubmit}>
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
