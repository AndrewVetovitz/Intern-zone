import * as React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

const sidebarContent: JSX.Element = (
    <React.Fragment>
        <ListItem button={true} onClick={() => console.log('Home clicked')}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button={true} onClick={() => console.log('About clicked')}>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
        </ListItem>
        <ListItem button={true} onClick={() => console.log('Mail clicked')}>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send mail" />
        </ListItem>
        <ListItem button={true} onClick={() => console.log('Drafts clicked')}>
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
        </ListItem>
    </React.Fragment>
);

export default sidebarContent;
