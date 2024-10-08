/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react"
import { FiPlay } from "react-icons/fi"
import data from "../data/about.json"
import { socialLink } from "../global"
import LinkButton from "./LinkButton"
import ImageComp from "./ImageComp"

const Authorv4 = ({ isBg }) => {
  const { aboutv4 } = data

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("glightbox").then((module) => {
        const GLightbox = module.default
        GLightbox({
          selector: ".glightbox3",
        })
      })
    }
  }, [])

  return (
    // <!-- ========== Author section start ========== -->
    <section
      id="author"
      className={`section-padding authorv2 ${isBg === "yes" ? "bg-one" : ""}`}
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
              <span>{aboutv4.subtitle}</span>
              <h2
                style={{
                  fontWeight: "700",
                  color: "#2f4858",
                }}
                className="display-6"
              >
                {aboutv4.title}
              </h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          {/* <!-- author image area start --> */}
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="authorv2__image">
              <ImageComp
                className="img-fluid"
                src={aboutv4.image}
                alt="Author Image"
                width={700}
                height={652}
              />
              {aboutv4.videoURL === "" ? (
                ""
              ) : (
                <>
                  <LinkButton
                    href={aboutv4.videoURL}
                    className="glightbox3 video-btn"
                  >
                    <FiPlay />
                  </LinkButton>
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* <!-- author image area end --> */}
          {/* <!-- author content area start --> */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <p>{aboutv4.description}</p>
            <div className="authorv2__content">
              <div className="authorv2__list">
                <div className="row">
                  {aboutv4.userinfo?.map((data, i) => (
                    <div key={i} className="col-6 mb-3">
                      <h4
                        style={{
                          fontWeight: "700",
                          color: "#2f4858",
                        }}
                      >
                        {data.title}
                      </h4>
                      <p className="mb-0">{data.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ul className="social-icon mt-3">
                {socialLink.facebook === "" ? (
                  ""
                ) : (
                  <li>
                    <LinkButton url={socialLink.facebook}>
                      <ImageComp
                        className="img-fluid"
                        src="assets/icons/facebook.svg"
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </LinkButton>
                  </li>
                )}
                {socialLink.twitter === "" ? (
                  ""
                ) : (
                  <li>
                    <LinkButton url={socialLink.twitter}>
                      <ImageComp
                        className="img-fluid"
                        src="assets/icons/twitter.svg"
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </LinkButton>
                  </li>
                )}
                {socialLink.linkedin === "" ? (
                  ""
                ) : (
                  <li>
                    <LinkButton url={socialLink.linkedin}>
                      <ImageComp
                        className="img-fluid"
                        src="assets/icons/linkedin.svg"
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </LinkButton>
                  </li>
                )}
                {socialLink.youtube === "" ? (
                  ""
                ) : (
                  <li>
                    <LinkButton url={socialLink.youtube}>
                      <ImageComp
                        className="img-fluid"
                        src="assets/icons/youtube-play.svg"
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </LinkButton>
                  </li>
                )}
                {socialLink.whatsapp === "" ? (
                  ""
                ) : (
                  <li>
                    <LinkButton url={socialLink.whatsapp}>
                      <ImageComp
                        className="img-fluid"
                        src="assets/icons/whatsapp.svg"
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </LinkButton>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {/* <!-- author content area end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Author section end ========== -->
  )
}

export default Authorv4
