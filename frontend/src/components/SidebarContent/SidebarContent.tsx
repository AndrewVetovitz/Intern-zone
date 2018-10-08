import * as React from 'react';

import { Link } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SendIcon from '@material-ui/icons/Send';

const toHome = '/';
const toAbout = '/about';
const toResources = '/resources';

const styles = (theme: any) => createStyles({
    iconColor: {
        color: 'white',
    },
    textColor: {
        color: 'white'
    }
});

interface SidebarContentProps extends WithStyles<typeof styles> {
    onClick?: () => any;
}

class SidebarContent extends React.Component<SidebarContentProps, {}> {
    constructor(props: SidebarContentProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toHome} />}> 
                    <ListItemIcon>
                        <HomeIcon className={classes.iconColor} />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.textColor}>Home</Typography>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toAbout} />}> 
                    <ListItemIcon>
                        <InfoIcon className={classes.iconColor} />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.textColor}>About</Typography>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toResources} />}>
                    <ListItemIcon>
                        <SendIcon className={classes.iconColor} />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.textColor}>Resources</Typography>}
                    />
                </ListItem>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SidebarContent);
