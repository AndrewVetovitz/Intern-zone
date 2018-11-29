import * as React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import GoogleLogin from 'react-google-login';

const googleImageUrl: string = '/images/google/google-button-24x24.png';

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

    componentDidMount() {
        (new Image()).src = googleImageUrl;
    }

    googleResponse = (response: object) => {
        console.log(response);
    }

    render() {
        const { classes } = this.props;

        return (
            <GoogleLogin
                clientId="484016341665-rrclrgt80qbaelleo98i5h1j4n9f2st6.apps.googleusercontent.com"
                className={classes.googleButton}
                style={{width: '100%', cursor: 'pointer'}}
                onSuccess={this.googleResponse}
                onFailure={this.googleResponse}
            >
                <img src={googleImageUrl} className={classes.icon}/>
                <span className={classes.buttonText}>Sign Up with Google</span>
            </GoogleLogin>
        ); 
    }
}

export default withStyles(styles)(GoogleSignUp);
