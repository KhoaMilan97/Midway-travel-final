import React, { useState } from "react";

import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CarouselHome = () => {
  const [slider] = useState([
    {
      image: "slide_home_6.jpg",
      title: "Going Inside",
      titlebreak: "The Louvre Museum",
      description:
        "Discover hidden wonders on trips curated by Citytours Tours Experts",
      button: "Read more",
      position: "text-center"
    },
    {
      image: "slide_home_5.jpg",
      title: "Discover",
      titlebreak: "Vatican Museum",
      description:
        "Discover hidden wonders on trips curated by Citytours Tours Experts",
      button: "Read more",
      position: "text-right"
    },
    {
      image: "slide_image_7.jpg",
      title: "Love Paris",
      titlebreak: "Arch de Triomphe",
      description:
        "Discover hidden wonders on trips curated by Citytours Tours Experts",
      button: "Read more",
      position: "text-left"
    }
  ]);
  const options = {
    items: 1,
    loop: true,
    dots: true,
    autoPlay: true,
    responsive: {
      0: {
        dots: false
      },
      767: {
        dots: false
      },
      768: {
        dots: true
      }
    }
  };

  return (
    <div id="carousel-home">
      <OwlCarousel {...options} className="owl-carousel owl-theme">
        {slider.map((item, index) => (
          <div
            className="owl-slide cover"
            style={{ backgroundImage: `url(img/slides/${item.image})` }}
            key={index}
          >
            <div
              className="opacity-mask d-flex align-items-center"
              data-opacity-mask="rgba(0, 0, 0, 0.6)"
              style={{ backgroundColor: "#00000099" }}
            >
              <div className="container">
                <div className="row justify-content-center justify-content-md-start">
                  <div className="col-lg-12 static">
                    <div className={`slide-text ${item.position} white`}>
                      <h2 className="owl-slide-animated owl-slide-title is-transitioned">
                        {item.title}
                        <br />
                        {item.titlebreak}
                      </h2>
                      <p className="owl-slide-animated owl-slide-subtitle is-transitioned">
                        {item.description}
                      </p>
                      <div className="owl-slide-animated owl-slide-cta is-transitioned">
                        <a
                          className="btn_1"
                          href="all_tours_list.html"
                          role="button"
                        >
                          {item.button}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
      <div id="icon_drag_mobile" />
    </div>
  );
};

export default CarouselHome;
