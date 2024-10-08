import React from "react"
import data from "../data/cta.json"
import ImageComp from "./ImageComp"

const Ctav5 = ({ isBg }) => {
  const { ctav5 } = data

  return (
    // <!-- ========== CTA v5 section start ========== -->
    <section
      className={`section-padding ctav5  ${isBg === "yes" ? "bg-one" : ""}`}
      style={{ backgroundImage: `url(${ctav5.backgroundImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="ctav5__content">
            <h2
              className="display-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              style={{
                fontWeight: "700",
              }}
            >
              {ctav5.title}
            </h2>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <ImageComp
                  className="img-fluid"
                  src={ctav5.icon}
                  alt="Star Icon"
                  width={25}
                  height={25}
                />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <ImageComp
                  className="img-fluid"
                  src={ctav5.icon}
                  alt="Star Icon"
                  width={25}
                  height={25}
                />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <ImageComp
                  className="img-fluid"
                  src={ctav5.icon}
                  alt="Star Icon"
                  width={25}
                  height={25}
                />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="350"
              >
                <ImageComp
                  className="img-fluid"
                  src={ctav5.icon}
                  alt="Star Icon"
                  width={25}
                  height={25}
                />
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <ImageComp
                  className="img-fluid"
                  src={ctav5.icon}
                  alt="Star Icon"
                  width={25}
                  height={25}
                />
              </li>
            </ul>
            <p
              className="fs-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
              }}
            >
              {ctav5.text1} <br />
              {ctav5.text2}
            </p>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== CTA v5 section end ========== -->
  )
}

export default Ctav5
