import React, { Component } from 'react'
import styles from './style.module.css'
import Note from '../note'
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
   {
    title: 'Ant Design Title 4',
  },
  
];

class notesScroller extends Component {
  render() {
    console.log(styles)
    return (
      <div className={styles.container}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta 
                className={styles.listItem}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
      </List.Item>
    )}
  />
      </div>
    )
  }
}

export default notesScroller
