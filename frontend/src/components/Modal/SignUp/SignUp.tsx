import * as React from 'react';

// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from '@material-ui/core';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

import GoogleLogin from 'react-google-login';

const styles = (theme: any) => createStyles({
    margin: {
        margin: '0 25px'
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
                            onSuccess={() => console.log('success')}
                            onFailure={() => console.log('failure')}
                        >
                            <Button style={{width: '100%', backgroundColor: 'white'}} onClick={this.handleClose} color="primary">
                                Sign Up with Google
                            </Button>
                        </GoogleLogin>
                    </DialogContent>
                    <DialogContent>
                        <Button style={{width: '100%', backgroundColor: 'blue'}} onClick={this.handleClose} color="primary">
                            Sign Up with Facebook
                        </Button>
                    </DialogContent>
                    <DialogContent>
                        <Button style={{width: '100%', backgroundColor: 'blue'}} onClick={this.handleClose} color="primary">
                            Sign Up with Linkedln
                        </Button>
                    </DialogContent>
                    <DialogContent>
                        <Button style={{width: '100%', backgroundColor: 'black'}} onClick={this.handleClose} color="primary">
                            Sign Up with Github
                        </Button>
                    </DialogContent>
                    <DialogContent>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            Or
                        </div> 
                    </DialogContent>
                    <DialogContent>
                        <Button style={{width: '100%', backgroundColor: 'red'}} onClick={this.handleClose} color="primary">
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