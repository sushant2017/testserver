import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export class Navigation_Header extends React.Component {
    constructor(props){
        super(props);
    }

    handleClose = () =>{

    }
    anchorEl = () =>{
        
    }
    handleClick = () =>{
        
    }
    render() {
        return (
            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                Open Menu
                </Button>
                <Menu
                id="simple-menu"
                anchorEl={this.anchorEl}
                keepMounted
                open={Boolean(this.anchorEl)}
                onClose={this.handleClose}
                >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default Navigation_Header;
