import * as React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import GoogleLogin from 'react-google-login';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    },
    googleButton: {
        display: 'inline-block',
        background: 'white',
        color: '#444',
        height: 60,
        borderRadius: 5,
        border: 'thin solid #888',
        boxShadow: '1px 1px 1px grey',
        whiteSpace: 'nowrap',
        '&:focus': {
            outline: 'none'
        }
    },
    icon: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 24,
        height: 24,
        marginRight: 20
    },
    buttonText: {
        display: 'inline-block',
        verticalAlign: 'middle',
        fontSize: 14,
        fontWeight: 'bold',
        /* Use the Roboto font that is loaded in the <head> */
        fontFamily: '\'Roboto\', sans-serif'
    }
});

interface GoogleSignUpProps extends WithStyles<typeof styles> {}

class GoogleSignUp extends React.Component<GoogleSignUpProps> {
    constructor(props: GoogleSignUpProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <GoogleLogin
                clientId="" // TODO
                className={classes.googleButton}
                style={{width: '100%', cursor: 'pointer'}}
                onSuccess={() => console.log('success')}
                onFailure={() => console.log('failure')}
            >
                <img src="/images/google_signin_buttons/google-button-24x24.png" className={classes.icon}/>
                <span className={classes.buttonText}>Sign Up with Google</span>
            </GoogleLogin>
        ); 
    }
}

export default withStyles(styles)(GoogleSignUp);
