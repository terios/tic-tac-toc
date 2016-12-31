import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Main = React.createClass({

    render() {
        return (
            <div>
                <AppBar title="My AppBar"
                        onLeftIconButtonTouchTap={this.props.toggleDrawer.bind(null, this.props.drawer)}/>
                {React.cloneElement(this.props.children, this.props)}
                <Drawer docked={false}
                        open={this.props.drawer}
                        width={300}
                        onRequestChange={this.props.toggleDrawer.bind(null, this.props.drawer)}>
                    <MenuItem onTouchTap={this.props.closeDrawer.bind(null, this.props.drawer)}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.props.closeDrawer.bind(null, this.props.drawer)}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
});

export default Main;
