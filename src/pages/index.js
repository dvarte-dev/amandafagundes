import Version04 from "../components/version-04"

import AOS from "aos"
import { useEffect } from "react"
import footerData from "../data/footer.json"
import headerData from "../data/header.json"

function App() {
  const { header, headerv2, headerv3 } = headerData
  const { footer } = footerData
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="section-wrapper">
      <div id="preLoader"></div>
      <Version04 headerv2={headerv2} footer={footer} />
    </div>
  )
}

export default App
