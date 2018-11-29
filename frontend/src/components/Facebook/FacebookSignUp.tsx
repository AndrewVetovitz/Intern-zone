import * as React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

// import GoogleLogin from 'react-google-login';

const facebookImageUrl: string = '/images/facebook/facebook-button-24x24.png';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    },
    facebookButton: {
        display: 'inline-block',
        background: '#3e5b94',
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

interface FacebookSignUpProps extends WithStyles<typeof styles> {}

class FacebookSignUp extends React.Component<FacebookSignUpProps> {
    constructor(props: FacebookSignUpProps) {
        super(props);
    }

    componentDidMount() {
        (new Image()).src = facebookImageUrl;
    }

    render() {
        // const { classes } = this.props;

        return (
            // <GoogleLogin
            //     clientId="" // TODO
            //     className={classes.facebookButton}
            //     style={{width: '100%', cursor: 'pointer'}}
            //     onSuccess={() => console.log('success')}
            //     onFailure={() => console.log('failure')}
            // >
            //     <img src={facebookImageUrl} className={classes.icon}/>
            //     <span className={classes.buttonText}>Sign Up with Facebook</span>
            // </GoogleLogin>
            <></>
        ); 
    }
}

export default withStyles(styles)(FacebookSignUp);
