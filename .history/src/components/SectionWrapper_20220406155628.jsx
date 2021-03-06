import React from 'react';

import styles from '../styles/Global';
import assets from '../styles/assets';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner }) => {
  return (
    <div className={'min-h-screen ${styles.section} ${styles.bgWhite} ${banner}'}>
      <h1>{title}</h1>
      <h1>{description}</h1>
      <img src={mockupImg} alt="mockup"/>
    </div>
  )
}

export default SectionWrapper