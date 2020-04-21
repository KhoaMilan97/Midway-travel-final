import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../../api/baseURL";

import { linkImage } from "../../util/linkImage";

const TourSliderItems = ({ status, id_tour, image, tour_price, tour_name }) => {
  const [reviewState, setReviewState] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await API.get(`review/${id_tour}`);
      const data = response.data;
      setReviewState(data);
    }
    fetchData();
  }, []);

  const renderRating = () => {
    if (reviewState) {
      const average = reviewState.reduce((accumulator, item) => {
        return accumulator + item.point;
      }, 0);

      if (average > 0) {
        const point = average / reviewState.length;
        let className = [
          { class: "icon-smile" },
          { class: "icon-smile" },
          { class: "icon-smile" },
          { class: "icon-smile" },
          { class: "icon-smile" },
        ];
        for (let x = 0; x < point; x++) {
          className[x].class = "icon-smile voted";
        }

        return className.map((item, index) => (
          <i className={item.class} key={index} />
        ));
      } else {
        return null;
      }
    }
  };

  return (
    <div className="item">
      <div className="tour_container">
        <div className="ribbon_3 popular">
          <span>{status}</span>
        </div>
        <div className="img_container">
          <Link to={`/tours/${id_tour}`}>
            <img
              src={`${linkImage}/${image}`}
              width={800}
              height={533}
              className="img-fluid"
              alt="tour"
            />
            {/* <div className="score">
              <span></span>
            </div> */}
            <div className="short_info">
              <span className="price" style={{ fontSize: "18px" }}>
                {tour_price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>
          </Link>
        </div>
        <div className="tour_title">
          <h3>
            <strong>{tour_name}</strong>
          </h3>
          <div className="rating">{renderRating()}</div>
        </div>
      </div>
      {/* End box */}
    </div>
  );
};

export default TourSliderItems;
