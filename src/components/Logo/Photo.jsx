import React from 'react'
import styles from './photo.module.css'
import Navbars from '../Navbar/Navbars'
import Header from '../Header/Header'

const Photo = () => {

  return (
    
      <div className={styles.image}>
        <Navbars/>
        <Header />
      </div>

  )
}
export default Photo;