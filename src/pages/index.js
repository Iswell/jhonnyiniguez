import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"
import SoundCloud from "../components/SoundCloud"
import Testimonials from "../components/Testimonials"

import Contact from "../components/Contact"
import ResponsiveVideo from "../components/ResponsiveVideo"

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <Hero />
    <Testimonials id="testimonials" />
    <ResponsiveVideo url="https://www.youtube.com/embed/dQi08lS6YUM?&autohide=2&border=0&wmode=opaque&enablejsapi=1&modestbranding=1&controls=2&showinfo=1"/>
   
    <SoundCloud />
    <Trips heading="Photos" />
    
    <Contact />
    
  </Layout>

)

export default IndexPage
