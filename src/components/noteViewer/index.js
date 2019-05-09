import React, { Component } from 'react'
import styles from './style.module.css'
import { Card } from 'antd';

export default class noteViewer extends Component {
  render() {
    return (
      <div className={styles.container}>
         <Card
          title="Default size card"          
          style={{ width: '100%', height: '100%' }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

      </div>
    )
  }
}
