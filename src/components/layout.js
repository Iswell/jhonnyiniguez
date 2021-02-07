import React from "react"
//import Header from "./Header"
import Footer from "./Footer"
import { GlobalStyle } from "./styles/GlobalStyles"
import Navbar from "./Navbar"




const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout
//<Header />