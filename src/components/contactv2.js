/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdCall, MdEmail } from "react-icons/md"
import data from "../data/contact.json"
import { contactFormAction, contactMap } from "../global"
import LinkButton from "./LinkButton"
import ImageComp from "./ImageComp"

const Contactv2 = ({ isBg }) => {
  const { contact } = data
  return (
    // <!-- ========== Contact section start ========== -->
    <section
      id="contact"
      className={`p-80px-tb ${isBg === "yes" ? "bg-one" : ""}`}
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
              <span>{contact.subtitle}</span>
              <h2
                style={{
                  fontWeight: "700",
                  color: "#2f4858",
                }}
                className="display-6"
              >
                {contact.title}
              </h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!--  contact form area start --> */}
          <div
            className="col-lg-8 col-md-6 col-sm-12 m-25px-b"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <div className="contact-form-box">
              <form
                id="contact-form"
                method="post"
                action={contactFormAction.link}
              >
                <div className="message col">
                  <div className="email-loading alert alert-warning">
                    <ImageComp
                      src="assets/images/loading.gif"
                      alt=""
                      width={530}
                      height={400}
                    />
                    &nbsp;&nbsp;&nbsp;Sending...
                  </div>
                  <p className="email-success alert alert-success">
                    <i className="icofont-check-circled"></i> Your quote has
                    successfully been sent.
                  </p>
                  <p className="email-failed alert alert-danger">
                    <i className="icofont-close-circled"></i> Something went
                    wrong!
                  </p>
                </div>
                <div className="mb13">
                  <input
                    name="name"
                    className="contact-name"
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb13">
                  <input
                    name="email"
                    className="contact-email"
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb13">
                  <input
                    name="subject"
                    className="contact-subject"
                    id="contact-subject"
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb30">
                  <textarea
                    name="message"
                    className="contact-message"
                    id="contact-message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="button button__primary align-items-center"
                >
                  <span>{contact.btnText}</span>
                </button>
              </form>
            </div>
          </div>
          {/* <!--  contact form area end --> */}
          {/* <!-- contact information start --> */}
          <div
            className="col-lg-4 col-md-6 col-sm-12 m-25px-b"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              color: "#676768",
            }}
          >
            <div className="contact__address contactv4">
              <div id="map">
                <iframe src={contactMap.link}></iframe>
              </div>
              <ul className="contactv4__content">
                <li>
                  <FaMapMarkerAlt /> {contact.addressText2}
                </li>
                <li>
                  <MdEmail />
                  <LinkButton
                    classes={{
                      textDecoration: "none",
                    }}
                    url="/#"
                  >
                    {contact.emailText}
                  </LinkButton>
                </li>
                <li>
                  <MdCall />
                  <LinkButton
                    classes={{
                      textDecoration: "none",
                    }}
                    url="tel:1124447900"
                  >
                    {contact.number}
                  </LinkButton>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- contact information end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Contact section end ========== -->
  )
}

export default Contactv2
