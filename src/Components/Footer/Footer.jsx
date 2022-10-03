import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
        Made By Scotty &reg; {new Date().getFullYear()}
    </div>
  )
}

export default Footer;