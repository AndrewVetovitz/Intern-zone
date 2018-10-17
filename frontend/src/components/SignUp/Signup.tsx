import * as React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from '@material-ui/core';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: any) => createStyles({});

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
        // const { classes } = this.props;

        return (
            <React.Fragment>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={'body'}
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
                            nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras
                            mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                            sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                            Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleClose} color="primary">
                                Subscribe
                            </Button>
                        </DialogActions>
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
