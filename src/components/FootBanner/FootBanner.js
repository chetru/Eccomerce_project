import React from 'react';
import Styles from './footbanner.module.css'

const FootBanner = () => {

  return (
    <div className={Styles.footer_banner_container}>
      <div className= {Styles.banner_desc}>
        <div className={Styles.left}>
          <p>29% OFF</p>
          <h3>Fine</h3>
          <h3>Smile</h3>
          <p>29 Apr to 29 may</p>
        </div>
        <div className={Styles.right}>
          <p>Beats Solo Air</p>
          <h3>Summer Sale</h3>
          <p>company's thats grown from 270 to 480 employees in the last 12 months.</p>
          <button >Shop Now</button>
        </div>
        <img src="/Images/footerbanner.png" className={Styles.footer_banner_image} alt="footer_banner" />
      </div>
    </div>
  )
}

export default FootBanner;