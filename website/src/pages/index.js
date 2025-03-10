import * as React from "react"
import AppHeader from "../components/AppHeader"
import AppBanner from "../components/AppBannner"
import AppFooter from "../components/AppFooter"
import AppCards from "../components/AppCards"
import AppMedium from "../components/AppMedium"
// import AppShowcase from "../components/AppShowcase"
import Seo from "../components/seo"
import "aos/dist/aos.css"
const IndexPage = () => (
  <>
    <Seo title="纯钧" />
    <AppHeader />
    <AppBanner />
    <AppCards />
    <AppMedium />
    <AppFooter />
  </>
)

export default IndexPage
