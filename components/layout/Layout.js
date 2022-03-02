import React from 'react'
import styles from './Layout.module.css'
import NavigationBar from './NavigationBar'

function Layout({children}) {
  return (
    <div>
        <NavigationBar/>
        <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout