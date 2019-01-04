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

interface HelpProps extends WithStyles<typeof styles> {
    setModalContent: (content: ModalEnum) => any;
}

class HelpModal extends React.Component<HelpProps> {
    constructor(props: HelpProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <div className={classes.margin} style={{ textAlign: 'center' }}>
                    <DialogTitle id="scroll-dialog-title">Having issues?</DialogTitle>

                    <DialogContent>
                        I want to Sign Up
                    </DialogContent>
                    <DialogContent>
                        <Button onClick={() => this.props.setModalContent(ModalEnum.SIGN_UP_SELECTION)} color="primary">
                            SignUp
                        </Button>
                    </DialogContent>

                    <DialogContent>
                        Forgot my password
                    </DialogContent>
                    <DialogContent>
                        <Button onClick={() => this.props.setModalContent(ModalEnum.SIGN_UP_SELECTION)} color="primary">
                            Forgot password
                        </Button>
                    </DialogContent>

                    <DialogContent>
                        Need to re-confirm my email
                    </DialogContent>
                    <DialogContent>
                        <Button onClick={() => this.props.setModalContent(ModalEnum.SIGN_UP_SELECTION)} color="primary">
                            Confirm Email
                        </Button>
                    </DialogContent>

                    <DialogContent>
                        Locked myself out of my account
                    </DialogContent>
                    <DialogContent>
                        <Button onClick={() => this.props.setModalContent(ModalEnum.SIGN_UP_SELECTION)} color="primary">
                            Account is locked
                        </Button>
                    </DialogContent>
                </div>


            </>
        );
    }
}

export default withStyles(styles)(HelpModal);
