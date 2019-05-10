import React, { Component } from "react";
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import styles from './style.css'

export default class Header extends Component {
  state = {
    current: 'filter',
    visible: false
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };

render() {
		console.log("header",this.props)
    return (
         <nav className="menuBar">
        	<div className="menuCon">
        		<div className="leftMenu">
	        		<LeftMenu onSearch={this.props.onFilterSearch}
												onAdd={this.props.onClickAddNote} />
				</div>
				<div className="rightMenu">
	        		<RightMenu />
				 </div>
				    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
		        <span className="barsBtn"></span>
		        </Button>
				    <Drawer
		          title="Basic Drawer"
		          placement="right"
		          closable={false}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >
		          <LeftMenu />
		          <RightMenu />
		        </Drawer>

        	</div>
        </nav>
    )
    }
}
