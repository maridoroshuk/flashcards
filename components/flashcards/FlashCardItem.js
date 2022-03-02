import React from 'react'
import Card from '../ui/Card'
import styles from './FlashCardItem.module.css'

function FlashCardItem({id, title, details}) {
  return (
    <li className={styles.item}>
        <Card>
            <div className={styles.content}>
                <h3>{title}</h3>
            </div>
            <div className={styles.content}>
                <p>{details}</p>
            </div>
        </Card>
    </li>
  )
}

export default FlashCardItem