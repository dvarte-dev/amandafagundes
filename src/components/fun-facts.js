import React from "react"
import CountUp from "react-countup"
import data from "../data/fun-fact.json"
import ImageComp from "./ImageComp"

const FunFacts = ({ isBg }) => {
  const { funFacts } = data
  return (
    // <!-- ========== Fun facts section start ========== -->
    <section
      className={`section-padding counters ${isBg === "yes" ? "bg-one" : ""}`}
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
              <span>{funFacts.subtitle}</span>
              <h2
                style={{
                  fontWeight: "700",
                  color: "#2f4858",
                }}
                className="display-6"
              >
                {funFacts.title}
              </h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="counters__stats m-0 p-0 d-flex flex-wrap align-items-center justify-content-center">
              {funFacts.funFactsItem.map((data, i) => (
                <li
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={(i + 2) * 50}
                  style={{
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <div className="counters__stats-box h-100 translateEffect1">
                    <div className="counters__stats-icon">
                      <ImageComp
                        className="img-fluid"
                        src={data.icon}
                        alt="icon"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="counters__stats-box__number">
                      <CountUp end={data.countNumber} enableScrollSpy="true" />
                    </div>
                    <h5
                      style={{
                        fontWeight: "700",
                        color: "#2f4858",
                      }}
                    >
                      {data.title}
                    </h5>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Fun facts section end ========== -->
  )
}

export default FunFacts
