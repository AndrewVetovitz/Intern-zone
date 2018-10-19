import * as React from 'react';

import { Link } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Modal from '../../containers/ModalContainer';

const toHome = '/';
const toAbout = '/about';
const toResources = '/resources';

const styles = (theme: any) => createStyles({
    iconColor: {
        color: 'white',
    },
    textColor: {
        color: 'white'
    },
    textMargin: {
        marginLeft: 45
    },
    text: {
        color: 'white',
        marginLeft: 45
    }
});

interface SidebarInputProps {
    onClick?: () => any;
}

interface SidebarContentProps extends SidebarInputProps, WithStyles<typeof styles> {}

interface State {
    signUpOpen: boolean;
    loginOpen: boolean;
}

class SidebarContent extends React.Component<SidebarContentProps, State> {
    constructor(props: SidebarContentProps) {
        super(props);

        this.state = {
            signUpOpen: false,
            loginOpen: false
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <ListItem> 
                    <ListItemText
                        disableTypography={true}
                        primary={
                            <div className={classes.textMargin}>
                                <Typography 
                                    className={classes.textColor} 
                                    style={{display: 'inline-block', cursor: 'pointer'}} 
                                    onClick={() => console.log('singup clicked')}
                                >
                                    Sign up
                                </Typography>
                                {' '}
                                <Typography className={classes.textColor} style={{display: 'inline-block'}}>
                                    or
                                </Typography>
                                {' '}
                                <Typography 
                                    className={classes.textColor} 
                                    style={{display: 'inline-block', cursor: 'pointer'}} 
                                    onClick={() => console.log('login clicked')}
                                >
                                    Login
                                </Typography>    
                            </div>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toHome} />}> 
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>Home</Typography>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toAbout} />}> 
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>About</Typography>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toResources} />}>
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>Resources</Typography>}
                    />
                </ListItem>
                <Modal/>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SidebarContent);
