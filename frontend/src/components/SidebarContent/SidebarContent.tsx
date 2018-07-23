import * as React from 'react';

import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import HomeIcon from '@material-ui/icons/Home';
// import InfoIcon from '@material-ui/icons/Info';
// import SendIcon from '@material-ui/icons/Send';

const toHome = '/';
const toAbout = '/about';
const toResources = '/resources';

const sidebarContent: JSX.Element = (
    <React.Fragment>
        <ListItem button={true} component={({innerRef, ...props}) => <Link {...props} to={toHome} />}> 
            {/* <ListItemIcon>
                <HomeIcon />
            </ListItemIcon> */}
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button={true} component={({innerRef, ...props}) => <Link {...props} to={toAbout} />}> 
            {/* <ListItemIcon>
                <InfoIcon />
            </ListItemIcon> */}
            <ListItemText primary="About" />
        </ListItem>
        <ListItem button={true} component={({innerRef, ...props}) => <Link {...props} to={toResources} />}>
            {/* <ListItemIcon>
                <SendIcon />
            </ListItemIcon> */}
            <ListItemText primary="Resources" />
        </ListItem>
    </React.Fragment>
);

export default sidebarContent;
