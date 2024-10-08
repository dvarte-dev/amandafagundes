// pages/_app.js
import React from "react"
import "../styles/css/margins-paddings.css"
import "../styles/fonts.css"
import "../styles/css/main.css"
import "aos/dist/aos.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "glightbox/dist/css/glightbox.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
