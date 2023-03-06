import React from 'react'
import styles from './menuItem.module.css'

export const MenuItem = ({item}) => {
  return (
    <a className={styles.menu} key={item.id} href={item.link}>{item.name}</a>
  )
}
