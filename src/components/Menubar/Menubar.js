import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

import About from "../About/About";
import Home from "../Home/Home";
import Chat from "../Chat/Chat";

const styles = {
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: 'auto'
    }
};

function Menubar(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Menubar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menubar);
