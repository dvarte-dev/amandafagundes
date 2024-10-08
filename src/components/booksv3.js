import React from "react"
import data from "../data/books.json"
import { AiFillStar } from "react-icons/ai"
import ImageComp from "./ImageComp"

const Booksv3 = ({ isBg }) => {
  const { booksv3 } = data
  return (
    <section
      className={`books section-padding ${isBg === "yes" ? "bg-one" : ""}`}
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
              <span>{booksv3.title}</span>
              <h2
                style={{
                  fontFamily: "Philosopher, sans-serif",
                  fontWeight: "700",
                  color: "#2f4858",
                }}
                className="display-6"
              >
                {booksv3.subtitle}
              </h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {booksv3.booksItem.map((data, i) => (
            <div
              key={data.id}
              className="col-md-6 col-lg-3 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <div className="books__book h-100 translateEffect1">
                <ImageComp
                  className="img-fluid"
                  src={data.image}
                  alt="Book 3"
                  width={490}
                  height={390}
                />
                <p
                  className="books__book__subtitle"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#676768",
                  }}
                >
                  {data.subtitle}
                </p>
                <h3
                  className="books__book__title"
                  style={{
                    fontFamily: "Philosopher, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  {data.title}
                </h3>
                <div className="d-flex justify-content-between">
                  <span
                    style={{
                      fontFamily: "Philosopher, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    {data.price}
                  </span>
                  <ul>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Booksv3
