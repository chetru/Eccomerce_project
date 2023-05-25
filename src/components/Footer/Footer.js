import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={Styles.footer_container}>
      <p>2022 KKP Store All rights reserverd</p>
      <p className={Styles.footer_icons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer;