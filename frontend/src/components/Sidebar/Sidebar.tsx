import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import  Paper  from 'material-ui/Paper';

import './Sidebar.css';
import { Link } from 'react-router-dom';

interface Props {
    classes?: {
        root: string;
        space: string;
        titleContainer: string;
        titleContent: string;
    };
}

const styles: object = () => ({
    root: {
        width: '300px',
        height: '100%',
        position: 'fixed'
    },
    space: {
        height: '50px'
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
    },
    titleContent: {
        alignSelf: 'center',
    }

});

function createListItem(key: number, header: object) {
    const link = 'link';
    const icon = 'icon';
    const text = 'text';

    return (
        <ListItem button={true} component={props => <Link to={header[link]} {...props} />} key={key}>
            <ListItemIcon>
                <i className="material-icons">{header[icon]}</i>
            </ListItemIcon>
            <ListItemText primary={header[text]} />
        </ListItem>
    );
}

function Sidebar(props: Props) {
    const { classes } = props;

    const headers = [{text: 'Home', link: '/', icon: 'home'},
        {text: 'About', link: '/about', icon: 'description'},
        {text: 'Resources', link: '/resources', icon: 'import_contacts'}];

    const content = [];
    for (let i = 0; i < headers.length; i++) {
        content.push(createListItem(i, headers[i]));
    }

    if (classes === undefined) {
        return (<div/>);
    }

    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <div className={classes.space}/>
                <div className={classes.titleContainer}>
                    <div className={classes.titleContent}>
                        Intern Zone
                    </div>
                </div>
                <List component="nav">
                    {content}
                </List>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(Sidebar);
