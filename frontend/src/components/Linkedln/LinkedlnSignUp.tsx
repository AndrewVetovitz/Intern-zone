import * as React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import GoogleLogin from 'react-google-login';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    },
    linkedlnButton: {
        display: 'inline-block',
        background: '#3582b7',
        color: 'white',
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

interface LinkedlnSignUpProps extends WithStyles<typeof styles> {}

class LinkedlnSignUp extends React.Component<LinkedlnSignUpProps> {
    constructor(props: LinkedlnSignUpProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <GoogleLogin
                clientId="" // TODO
                className={classes.linkedlnButton}
                style={{width: '100%', cursor: 'pointer'}}
                onSuccess={() => console.log('success')}
                onFailure={() => console.log('failure')}
            >
                <img src="/images/google_signin_buttons/google-button-24x24.png" className={classes.icon}/>
                <span className={classes.buttonText}>Sign Up with Linkedln</span>
            </GoogleLogin>
        ); 
    }
}

export default withStyles(styles)(LinkedlnSignUp);
