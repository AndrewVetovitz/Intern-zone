import * as React from 'react';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from '@material-ui/core';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

import GoogleSignUp from '../../Google/GoogleSignUp';
import FacebookSignUp from '../../Facebook/FacebookSignUp';
import GithubSignUp from '../../Github/GithubSignUp';
import LinkedinSignUp from '../../Linkedin/LinkedinSignUp';
import LoginButton from '../../LoginButton/LoginButton';

const styles = () => createStyles({
    margin: {
        margin: '0 25px'
    }
});

interface LoginProps extends WithStyles<typeof styles> {
    setModalContent: (state: ModalEnum) => any;
}

class LoginModal extends React.Component<LoginProps> {
    constructor(props: LoginProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.margin}>
                    <DialogTitle style={{ textAlign: 'center' }} id="scroll-dialog-title">Sign In to your personalized profile</DialogTitle>

                    <DialogContent>
                        <GoogleSignUp />
                    </DialogContent>
                    <DialogContent>
                        <FacebookSignUp />
                    </DialogContent>
                    <DialogContent>
                        <LinkedinSignUp />
                    </DialogContent>
                    <DialogContent>
                        <GithubSignUp />
                    </DialogContent>
                    <DialogContent>
                        <LoginButton onClick={() => this.props.setModalContent(ModalEnum.LOGIN)} />
                    </DialogContent>
                </div>
                <DialogActions>
                    <DialogContent>
                        <Button onClick={() => this.props.setModalContent(ModalEnum.SIGN_UP_SELECTION)} color="primary">
                            SignUp
                        </Button>
                    </DialogContent>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </React.Fragment>
        );
    }

    private handleClose = (): void => {
        console.log('closed clicked');
    }
}

export default withStyles(styles)(LoginModal);
