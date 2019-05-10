import React, { Component } from 'react'
import styles from './style.module.css'
import Note from '../note'
import { List, Avatar } from 'antd';



class notesScroller extends Component {
  render() {
    return (
      <div className={styles.container}>
        <List
          itemLayout="horizontal"
          dataSource={this.props.notes || []}
          renderItem={item => (
             <div className={styles.listItemContainer} onClick={() => this.props.onClickNote(item)}>
              <List.Item>
                <List.Item.Meta 
                  className={styles.listItem}
                  title={<p>{item.title}</p>}
                  description={item.subtitle}               
                />              
              </List.Item>
             </div> 
    )}
  />
      </div>
    )
  }
}

export default notesScroller
