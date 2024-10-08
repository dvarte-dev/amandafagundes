/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import CtaV3 from "../ctav3"
import data from "../../data/footer.json"
import { Link } from "react-scroll"
import { siteLogo, socialLink } from "../../global"
import ImageComp from "../ImageComp"
import LinkButton from "../LinkButton"

const Footer = ({ menu, isBg }) => {
  const { footer } = data

  return (
    <>
      <CtaV3 />
      <footer
        className={`footer overflow-hidden ${isBg === "yes" ? "bg-one" : ""}`}
      >
        <div className="container">
          <div className="footer__top m-50px-t m-50px-b">
            <div className="row">
              <div className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-start">
                <LinkButton url="/">
                  {/* <!-- <h1 className="m-0">WONTED</h1> --> */}
                  <ImageComp
                    src={siteLogo.logo}
                    alt={siteLogo.alt}
                    width={211}
                    height={48}
                  />
                </LinkButton>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-lg-0">
                <ul className="footer__menu">
                  {menu?.map((data, i) => (
                    <li key={i}>
                      <Link
                        activeClass="active"
                        className="benefits"
                        to={`${data.link}`}
                        spy={true}
                        smooth={true}
                        duration={500}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        offset={-60}
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          textDecoration: "none",
                        }}
                      >
                        {data.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-end">
                <ul className="social-icon">
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
          </div>
          <hr />
          <div className="footer__copyright m-20px-t m-20px-b">
            <div className="row">
              <div className="col-12">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    color: "#676768",
                  }}
                >
                  &copy; {footer.copyright}
                  <ImageComp
                    className="img-fluid mx-2"
                    src={footer.icon}
                    alt="footer icon"
                    width={20}
                    height={20}
                  />
                  by&nbsp;
                  <LinkButton
                    url="#"
                    classes={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "400",
                      textDecoration: "none",
                    }}
                    style={{ marginLeft: "5px" }} // Pequeno espaço antes do nome
                  >
                    {footer.name}
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
    // <!-- ========== Footer section End ========== -->
  )
}

export default Footer
