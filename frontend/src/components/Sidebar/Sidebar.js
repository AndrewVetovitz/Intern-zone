import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import  Paper  from 'material-ui/Paper';

import './Sidebar.css';
import { Link } from 'react-router-dom';

const styles = () => ({
    root: {
        width: '300px',
        height: '100vh',
        position: 'fixed'
    }
});

function createListItem(key, header) {
    return (
        <ListItem button component={ Link } to={ header['link'] } key={ key }>
            <ListItemIcon>
                <i className="material-icons">{header['icon']}</i>
            </ListItemIcon>
            <ListItemText primary={header['text']} />
        </ListItem>
    );
}

function Sidebar(props) {
    const { classes } = props;

    const headers = [{text: 'Home', link: '/', icon: 'home'},
        {text: 'About', link: '/about', icon: 'description'},
        {text: 'Resources', link: '/resources', icon: 'import_contacts'}];

    const content = [];
    for (let i = 0; i < headers.length; i++) {
        content.push(createListItem(i, headers[i]));
    }

    return (
        <div>
            <Paper className={ classes.root } elevation={4}>
                <List component="nav">
                    { content }
                </List>
            </Paper>
        </div>
    );
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
