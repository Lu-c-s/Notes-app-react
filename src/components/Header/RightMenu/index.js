import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import styles from './style.css'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    return (
			<Menu mode="horizontal">
            <Menu.Item key="email">
              Lucas3645@gmail.com
          </Menu.Item> 
      </Menu>
    );
  }
}

export default RightMenu;