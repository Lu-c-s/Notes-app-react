import React, { Component } from "react";
import { Menu, Input , Icon } from "antd";

const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 400, marginRight: '30px' }}
            />
        </Menu.Item>
        <Menu.Item>
          <Icon type="plus" />
        </Menu.Item>
         <Menu.Item key="info">
            <Icon type="info-circle" />
          </Menu.Item>
          <Menu.Item key="clock">
            <Icon type="clock-circle" />
          </Menu.Item>
          <Menu.Item key="more">
            <Icon type="more" />
          </Menu.Item>
      </Menu>
    );
  }
}
