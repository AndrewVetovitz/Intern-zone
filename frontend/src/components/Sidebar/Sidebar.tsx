import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import  Paper  from 'material-ui/Paper';

import './Sidebar.css';
import { Link } from 'react-router-dom';

interface Props {
    classes?: {
        root: string;
        titleContainer: string;
        titleContent: string;
        test: string;
    };
}

const styles: React.CSSProperties = () => ({
    root: {
        width: '300px',
        height: '100%',
        position: 'fixed',
        // backgroundColor: '#2bcbba'
        // backgroundColor: '#33d9b2'
        backgroundColor: '#0fb9b1'
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px',
    },
    titleContent: {
        alignSelf: 'center',
        fontSize: '20px'
    },
    test: {
        fontSize: '20px'
    }
});

// const style = {fontSize: '60px'};

function createListItem(key: number, header: object, classes: any) {
    const link: string = 'link';
    const icon: string = 'icon';
    const text: string = 'text';

    return (
        <ListItem button={true} component={props => <Link to={header[link]} {...props} />} key={key}>
            <ListItemIcon>
                <i className="material-icons">{header[icon]}</i>
            </ListItemIcon>
            <ListItemText primary={<div className={classes.test}>{header[text]}</div>} />
        </ListItem>
    );
}

function Sidebar(props: Props): JSX.Element {
    const { classes } = props;

    const headers = [{text: 'Home', link: '/', icon: 'home'},
        {text: 'About', link: '/about', icon: 'description'},
        {text: 'Resources', link: '/resources', icon: 'import_contacts'}];

    const content = [];
    for (let i = 0; i < headers.length; i++) {
        content.push(createListItem(i, headers[i], classes));
    }

    if (classes === undefined) {
        return (<div/>);
    }

    return (
        <div>
            <Paper className={classes.root} elevation={4}>
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
