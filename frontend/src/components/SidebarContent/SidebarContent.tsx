import * as React from 'react';

import { Link } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.textColor}>Home</Typography>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toAbout} />}> 
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.textColor}>About</Typography>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toResources} />}>
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
