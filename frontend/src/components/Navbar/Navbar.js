import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import './Navbar.css';

const styles = theme => ({
    root: {
        width: '300px',
        backgroundColor: '#607D8B',
        height: '100vh',
        position: 'fixed',
    },
    test: {
        color: 'white'
    },
    t: {
        height: '100px;'
    }
});

function createListItem(key, text, style) {
    return (
       <ListItem key={key} button>
           <ListItemText
               disableTypography
               primary={<Typography className={ style }>{text}</Typography>}
           />
       </ListItem>
    )
}

function Navbar(props) {
    const { classes } = props;

    const divider = <Divider style={{backgroundColor: '#BDBDBD'}}/>;
    const headers = ['Home', 'About', 'Resources'];

    const content = [];
    for (let i = 0; i < headers.length; i++) {
        content.push(createListItem(i, headers[i], classes.test));
        content.push(divider)
    }

    return (
        <div className="Navbar-layout">
            <List component="nav">
                {divider}
                {content}
            </List>
        </div>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
