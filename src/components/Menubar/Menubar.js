import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link } from 'react-router-dom'

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
                        <MenuIcon/>

                    </IconButton>
                        <Menu id="simple-menu"
                              anchorEl={anchorEl}
                              open={Boolean(anchorEl)}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <Link to="/">
                                <MenuItem onClick={handleClose}>Home</MenuItem>
                                </Link>
                                <Link to="/Chat">
                                <MenuItem onClick={handleClose}>Chat</MenuItem>
                                </Link>
                                <Link to="About">
                                <MenuItem onClick={handleClose}>About</MenuItem>
                                </Link>
                            </ClickAwayListener>
                        </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Menubar);
