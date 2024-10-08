import React from "react"
import data from "../data/cta.json"
import LinkButton from "./LinkButton"

const CtaV3 = () => {
  const { ctav3 } = data
  return (
    // <!-- ========== CTA v3 section start ========== -->
    <section id="ctav3" className="ctav3 bg-one p-80px-t">
      <div className="container bg-one">
        <div className="row">
          <div className="ctav3__content">
            <h2
              style={{
                fontWeight: "700",
                color: "#2f4858",
              }}
              className="m-25px-b"
            >
              {ctav3.title1} <br />
              {ctav3.title2}
            </h2>
            <h2 className="display-4 m-25px-b">
              <LinkButton
                classes={{
                  fontWeight: "700",
                  textDecoration: "none",
                }}
                url="tel:610383766284"
              >
                {ctav3.number}
              </LinkButton>
            </h2>
            <LinkButton
              href="#contact"
              className="smooth button button__primary"
              classes={{
                fontFamily: "Poppins, sans-serif",
                textDecoration: "none",
              }}
            >
              <span>{ctav3.btnText}</span>
            </LinkButton>
            <div className="ctav3__content__icon">
              <i className="icofont-read-book"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== CTA v3 section end ========== -->
  )
}

export default CtaV3
