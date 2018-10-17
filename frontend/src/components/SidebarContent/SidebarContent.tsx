import * as React from 'react';

import { Link } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import SignUp from '../SignUp/Signup';
import Login from '../Login/Login';

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
                                <Typography className={classes.textColor} style={{display: 'inline-block', cursor: 'pointer'}} onClick={this.openSignUp}>
                                    Sign up
                                </Typography>
                                {' '}
                                <Typography className={classes.textColor} style={{display: 'inline-block'}}>
                                    or
                                </Typography>
                                {' '}
                                <Typography className={classes.textColor} style={{display: 'inline-block', cursor: 'pointer'}}  onClick={this.loginOpen}>
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
                <SignUp open={this.state.signUpOpen} signUpClosedCallback={this.closeSignUp} />
                <Login open={this.state.loginOpen} LoginClosedCallback={this.closeLogin} />
            </React.Fragment>
        );
    }

    private openSignUp = (): void => {
        this.setState({signUpOpen: true});
    }

    private closeSignUp = (): void => {
        this.setState({signUpOpen: false});
    }

    private loginOpen = (): void => {
        this.setState({loginOpen: true});
    }

    private closeLogin = (): void => {
        this.setState({loginOpen: false});
    }
}

export default withStyles(styles)(SidebarContent);
