import * as React from 'react';

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

interface SignUpProps extends WithStyles<typeof styles> {
    setModalContent: (state: ModalEnum) => any;
}

class SignUpModal extends React.Component<SignUpProps> {
    constructor(props: SignUpProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.margin}>
                    <DialogTitle style={{textAlign: 'center'}} id="scroll-dialog-title">Sign Up for your Intern-Zone Account</DialogTitle>
                </div>
                <DialogContent>
                    <Button onClick={() => this.props.setModalContent(ModalEnum.LOGIN)} color="primary">
                        Login
                    </Button>

                    <Button onClick={() => this.props.setModalContent(ModalEnum.SIGN_UP_SELECTION)} color="primary">
                        SignUp
                    </Button>
                </DialogContent>
            </React.Fragment>
        ); 
    }
}

export default withStyles(styles)(SignUpModal);
