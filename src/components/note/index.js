import React from 'react'
import styles from './style.css'
import { Card } from 'antd';

const note = (props) => (
    <div className={styles.container}>
        <Card style={{ width: '100%' }}>
            <p>Card content</p>
            <p>Card content</p>            
        </Card>
    </div>
)

export default note;