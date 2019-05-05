import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import { Router, Route, Switch } from "react-router";

import About from "../About/About";
import Home from "../Home/Home";
import Chat from "../Chat/Chat";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Link from "@material-ui/core/Link";

const styles = {
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: 'auto'
    }
};

const state = {
    anchorEl: null,
};

function Menubar(props) {
    const { classes } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                        <Menu id="simple-menu"
                              anchorEl={anchorEl}
                              open={Boolean(anchorEl)}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuItem onClick={handleClose} >Home</MenuItem>
                                <MenuItem onClick={handleClose} >Chat</MenuItem>
                                <MenuItem onClick={handleClose}>About</MenuItem>
                            </ClickAwayListener>
                        </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Menubar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menubar);
