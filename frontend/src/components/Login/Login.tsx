import * as React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from '@material-ui/core';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: any) => createStyles({});

interface LoginInputProps {
    open: boolean;
    LoginClosedCallback: () => void;
}

interface LoginProps extends LoginInputProps, WithStyles<typeof styles> {}

interface State {
    open: boolean;
}

class Login extends React.Component<LoginProps, State> {
    constructor(props: LoginProps) {
        super(props);

        this.state = {
            open: this.props.open
        };
    }

    componentDidUpdate(prevProps: LoginProps): void {
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
                            Login test
                            Login test
                            Login test
                            Login test
                            Login test
                            Login test
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
        this.props.LoginClosedCallback();
        this.setState({ open: false });
    }
}

export default withStyles(styles)(Login);
