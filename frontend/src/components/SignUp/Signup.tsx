import * as React from 'react';

import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from '@material-ui/core';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import GoogleLogin from 'react-google-login';

const styles = (theme: any) => createStyles({
    margin: {
        margin: '0 25px'
    }
});

interface SignUpInputProps {
    open: boolean;
    signUpClosedCallback: () => void;
}

interface SignUpProps extends SignUpInputProps, WithStyles<typeof styles> {}

interface State {
    open: boolean;
}

class SignUp extends React.Component<SignUpProps, State> {
    constructor(props: SignUpProps) {
        super(props);

        this.state = {
            open: this.props.open
        };
    }

    componentDidUpdate(prevProps: SignUpProps): void {
        if (this.props.open !== prevProps.open) {
            this.setState({open: this.props.open});
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={'body'}
                    aria-labelledby="scroll-dialog-title"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 0}}
                >
                    <DialogTitle id="scroll-dialog-title">Create your own personalized Intern-Zone profile</DialogTitle>
                    <div className={classes.margin}>
                        <DialogContent>
                        <GoogleLogin
                            clientId="" // TODO
                            buttonText="Login"
                            onSuccess={() => console.log('success')}
                            onFailure={() => console.log('failure')}
                        />
                            <Button style={{width: '100%', backgroundColor: 'red'}} onClick={this.handleClose} color="primary">
                                Sign Up with Google
                            </Button>
                        </DialogContent>
                        <DialogContent>
                            <Button style={{width: '100%', backgroundColor: 'red'}} onClick={this.handleClose} color="primary">
                                Sign Up with Facebook
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
                    </div>
                </Dialog>
            </React.Fragment>
        );
    }

    private handleClose = (): void => {
        this.props.signUpClosedCallback();
        this.setState({ open: false });
    }
}

export default withStyles(styles)(SignUp);
