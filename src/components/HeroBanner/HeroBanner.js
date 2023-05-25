import React from 'react';
import Styles from './herobanner.module.css'

const HeroBanner = () => {
  return (
    <div className={Styles.hero_banner_container}>
      <div>
        <p className={Styles.Beats}>Beats Solo</p>
        <h3>Wireless</h3>
        <h1>HEADPHONES</h1>
        <img src="Images/hero.png" alt="Headphones" className={Styles.hero_banner_image} />
      </div>
      <div>
        <button>Shop Wireless Headphone</button>
      </div>
      <div className={Styles.desc}>
        <h5>Description</h5>
        <p>
          The game begins here. With Immortal 1000D gaming headphones, don’t just play the game - feel it, live it, and own it. Level up your audio game with 7.1 Channel</p>
      </div>
    </div>
  )
}

export default HeroBanner;