import React, { Component } from "react";
import { Menu, Input , Icon } from "antd";

const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <Menu mode="horizontal">
        <Menu.Item key="filter">
            <Search
              placeholder="Filter notes"
              onSearch={value => this.props.onSearch(value)}
              style={{ width: 450, marginRight: '30px' }}
            />
        </Menu.Item>
        <Menu.Item>
          <div>
            <Icon type="plus" onClick={this.props.onAdd}/>
          </div>
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
