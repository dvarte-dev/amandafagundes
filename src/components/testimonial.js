/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import testimonialData from "../data/testimonial.json"
import ImageComp from "./ImageComp"
import { Autoplay, Pagination } from "swiper/modules"

const Testimonial = ({ isBg }) => {
  const { testimonial } = testimonialData
  return (
    <section
      id="reviews"
      className={`section-padding testimonial ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div
              className="section-title-center text-center"
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <span>{testimonial.subtitle}</span>
              <h2
                style={{
                  fontWeight: "700",
                  color: "#2f4858",
                }}
                className="display-6"
              >
                {testimonial.title}
              </h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row testi-row">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {testimonial.testimonialItem?.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="swiper-slide p-5px-lr">
                    <div className="testi-card card h-100 translateEffect1">
                      <div className="card-body p-4">
                        <div className="testi-card__quotation">
                          <i className="icofont-quote-right"></i>
                        </div>
                        <p
                          style={{
                            fontFamily: "Poppins, sans-serif",
                          }}
                          className="my-4"
                        >
                          {data.description}
                        </p>
                        <div className="testi-card__user-info pt-4">
                          <div className="testimonial__user-info__image">
                            <ImageComp
                              src={data.image}
                              alt={data.title}
                              width={80}
                              height={60}
                            />
                          </div>
                          <div className="testimonial__user-info__content">
                            <h4
                              style={{
                                fontWeight: "700",
                                color: "#2f4858",
                              }}
                              className="mb-0"
                            >
                              {data.name}
                            </h4>
                            <p
                              style={{
                                fontFamily: "Poppins, sans-serif",
                              }}
                              className="mb-0"
                            >
                              {data.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
