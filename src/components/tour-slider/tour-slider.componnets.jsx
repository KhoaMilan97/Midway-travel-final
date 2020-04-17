import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

import { linkImage } from "../../util/linkImage";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const setting = {
  center: false,
  items: 2,
  loop: false,

  margin: 0,
  dots: false,
  nav: true,
  navText: [
    "<i class='arrow_carrot-left'></i>",
    "<i class='arrow_carrot-right'></i>",
  ],
  responsive: {
    0: {
      nav: false,
      dots: true,
      items: 1,
    },
    768: {
      nav: false,
      dots: true,
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
};

const TourSlider = ({ tours, status }) => (
  <OwlCarousel
    {...setting}
    className="owl-carousel owl-theme list_carousel add_bottom_30"
  >
    {tours
      .map((tour, index) => (
        <div className="item" key={tour.id_tour}>
          <div className="hotel_container">
            <div className="ribbon_3 popular">
              <span>{status}</span>
            </div>
            <div className="img_container">
              <Link to={`/tours/${tour.id_tour}`}>
                <img
                  src={`${linkImage}/${tour.image}`}
                  width={800}
                  height={533}
                  className="img-fluid"
                  alt="tour"
                />
                <div className="score">
                  <span>7.5</span>Good
                </div>
                <div className="short_info hotel">
                  From/Per night
                  <span className="price" style={{ fontSize: "18px" }}>
                    {tour.tour_price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </div>
              </Link>
            </div>
            <div className="hotel_title">
              <h3>
                <strong>{tour.tour_name}</strong>
              </h3>
            </div>
          </div>
          {/* End box */}
        </div>
      ))
      .slice(0, 5)}
    {/* /carousel */}
  </OwlCarousel>
);

export default TourSlider;
