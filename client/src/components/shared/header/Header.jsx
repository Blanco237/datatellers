import { LogoutOutlined } from '@ant-design/icons'
import React from 'react'

import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.body}>
        <section className={styles.headline}>
            DrNG | PATIENTS
        </section>
        <button>
          <span>Logout</span> 
          <span><LogoutOutlined /></span>
        </button>
    </header>
  )
}

export default Header