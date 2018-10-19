import * as React from 'react';

// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from '@material-ui/core';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

import GoogleLogin from 'react-google-login';

const styles = () => createStyles({
    margin: {
        margin: '0 25px'
    },
    googleButton: {
        display: 'inline-block',
        background: 'white',
        color: '#444',
        height: 60,
        borderRadius: 5,
        border: 'thin solid #888',
        boxShadow: '1px 1px 1px grey',
        whiteSpace: 'nowrap'
    },
    googleIcon: {
        background: 'url(\'/images/google_signin_buttons/web/vector/google_logo.svg\') transparent 5px 50% no-repeat',
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 42,
        height: 42
    },
    googlebuttonText: {
        display: 'inline-block',
        verticalAlign: 'middle',
        paddingLeft: 42,
        paddingRight: 42,
        fontSize: 14,
        fontWeight: 'bold',
        /* Use the Roboto font that is loaded in the <head> */
        fontFamily: '\'Roboto\', sans-serif'
    }
});

interface SignUpProps extends WithStyles<typeof styles> {
    setModalContent: (state: ModalEnum) => any;
}

class SignUp extends React.Component<SignUpProps> {
    constructor(props: SignUpProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <DialogTitle id="scroll-dialog-title">Create your own personalized Intern-Zone profile</DialogTitle>
                <div className={classes.margin}>
                    <DialogContent>
                        <GoogleLogin
                            clientId="" // TODO
                            className={classes.googleButton}
                            style={{width: '100%', cursor: 'pointer'}}
                            onSuccess={() => console.log('success')}
                            onFailure={() => console.log('failure')}
                        >
                            <span className={classes.googleIcon}/>
                            <span className={classes.googlebuttonText}>Sign Up with Google</span>
                        </GoogleLogin>
                    </DialogContent>
                    <DialogContent>
                        <Button style={{width: '100%', backgroundColor: 'blue', height: 60}} onClick={this.handleClose} color="primary">
                            Sign Up with Facebook
                        </Button>
                    </DialogContent>
                    <DialogContent>
                        <Button style={{width: '100%', backgroundColor: 'blue', height: 60}} onClick={this.handleClose} color="primary">
                            Sign Up with Linkedln
                        </Button>
                    </DialogContent>
                    <DialogContent>
                        <Button style={{width: '100%', backgroundColor: 'black', height: 60}} onClick={this.handleClose} color="primary">
                            Sign Up with Github
                        </Button>
                    </DialogContent>
                    <DialogContent>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            Or
                        </div> 
                    </DialogContent>
                    <DialogContent>
                        <Button style={{width: '100%', backgroundColor: 'red', height: 60}} onClick={this.handleClose} color="primary">
                            Sign Up with email
                        </Button>
                    </DialogContent>
                    <DialogContent>
                        <Button onClick={() => this.props.setModalContent(ModalEnum.LOGIN)} color="primary">
                            Login
                        </Button>
                    </DialogContent>
                </div>
            </React.Fragment>
        ); 
    }
    
    private handleClose = (): void => {
        console.log('closed clicked');
    }
}

export default withStyles(styles)(SignUp);
