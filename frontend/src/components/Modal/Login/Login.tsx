import * as React from 'react';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from '@material-ui/core';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: any) => createStyles({
    margin: {
        margin: '0 25px'
    }
});

interface LoginInputProps {}

interface LoginProps extends LoginInputProps, WithStyles<typeof styles> {}

class Login extends React.Component<LoginProps> {
    constructor(props: LoginProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <DialogTitle id="scroll-dialog-title">Sign In to your personalized profile</DialogTitle>
                <div className={classes.margin}>
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
                </div>
                <DialogActions>
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

export default withStyles(styles)(Login);
