import React from 'react';

// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from '@material-ui/core';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    }
});

interface LoginProps extends WithStyles<typeof styles> {
    setModalContent: (content: ModalEnum) => any;
}

class LoginModal extends React.Component<LoginProps> {
    constructor(props: LoginProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <div className={classes.margin}>
                    <DialogTitle style={{ textAlign: 'center' }} id="scroll-dialog-title">Login to your Intern-Zone Account</DialogTitle>
                </div>

                <DialogContent>
                    <Button onClick={() => this.props.setModalContent(ModalEnum.LOGIN_SELECTION)} color="primary">
                        Login
                    </Button>

                    <Button onClick={() => this.props.setModalContent(ModalEnum.SIGN_UP_SELECTION)} color="primary">
                        SignUp
                    </Button>
                </DialogContent>
            </>
        );
    }
}

export default withStyles(styles)(LoginModal);
