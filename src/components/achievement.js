import React from "react"
import achievementData from "../data/achievements.json"
import ImageComp from "./ImageComp"

const Achievement = ({ isBg }) => {
  const { achievements } = achievementData

  return (
    <section
      id="achievements"
      className={`section-padding achievement ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div
              className="section-title-center text-center fw-bold"
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <span>{achievements.title}</span>
              <h2
                className="display-6"
                style={{
                  fontWeight: "700",
                  color: "#2f4858",
                }}
              >
                {achievements.subtitle}
              </h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          {achievements?.awards?.map((data, i) => (
            <div
              key={data.id}
              className="m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <div className="achievement__item h-100 translateEffect1">
                <div className="row row-cols-2">
                  <div className="col mt-0">
                    <ImageComp
                      className="img-fluid"
                      src={data.image}
                      alt={data.title}
                      width={612}
                      height={408}
                    />
                  </div>
                  <div className="col mt-0">
                    <div className="achievement__content">
                      <div className="achievement__content__icon">
                        <ImageComp
                          className="img-fluid"
                          src={achievements.icon}
                          alt="icon"
                          width={80}
                          height={80}
                        />
                      </div>
                      <h3
                        style={{
                          fontWeight: "700",
                          color: "#2f4858",
                        }}
                      >
                        {data.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "1rem",
                          fontWeight: "400",
                          color: "#676768",
                        }}
                      >
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Achievement section end ========== -->
  )
}

export default Achievement
