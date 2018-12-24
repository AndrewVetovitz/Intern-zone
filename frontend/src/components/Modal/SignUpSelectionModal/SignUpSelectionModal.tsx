import React from 'react';

// import DialogActions from '@material-ui/core/DialogActions';
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
import SignUpButton from '../../SignUpButton/SignUpButton';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    }
});

interface SignUpSelectionProps extends WithStyles<typeof styles> {
    setModalContent: (state: ModalEnum) => any;
}

class SignUpSelectionModal extends React.Component<SignUpSelectionProps> {
    constructor(props: SignUpSelectionProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <div className={classes.margin}>
                    <DialogTitle style={{textAlign: 'center'}} id="scroll-dialog-title">Create your own personalized Intern-Zone profile</DialogTitle>

                    <DialogContent>
                        <GoogleSignUp/>
                    </DialogContent>
                    <DialogContent>
                        <FacebookSignUp/>
                    </DialogContent>
                    <DialogContent>
                        <LinkedinSignUp/>
                    </DialogContent>
                    <DialogContent>
                        <GithubSignUp/>
                    </DialogContent>
                    <DialogContent>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            Or
                        </div> 
                    </DialogContent>
                    <DialogContent>
                        <SignUpButton onClick={() => this.props.setModalContent(ModalEnum.SIGN_UP)} />
                    </DialogContent>
                </div>
                <DialogContent>
                    <Button onClick={() => this.props.setModalContent(ModalEnum.LOGIN_SELECTION)} color="primary">
                        Login
                    </Button>
                    <Button onClick={() => this.props.setModalContent(ModalEnum.HELP)} color="primary">
                        Need Help?
                    </Button>
                </DialogContent>
            </>
        ); 
    }
}

export default withStyles(styles)(SignUpSelectionModal);
