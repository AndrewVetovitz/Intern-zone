import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

import UserSignUpAPI, { UserSignUp } from '../../../api/userAPI';
import SignUpButton from '../../SignUpButton/SignUpButton';

const styles = (theme: any) => createStyles({
    margin: {
        margin: '0 25px',
    },

    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 24
    },
    textField: {
        width: '100%',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    }
});

interface SignUpProps extends WithStyles<typeof styles> {
    setModalContent: (content: ModalEnum) => any;
}

interface SignUpState extends UserSignUp {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type StateKeys = keyof SignUpState;

class SignUpModal extends React.Component<SignUpProps, SignUpState> {
    constructor(props: SignUpProps) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleChange = (name: StateKeys) => (event: any): void => {
        this.setState({
            [name]: event.target.value,
        } as Pick<SignUpState, keyof SignUpState>);
    };

    signUp = (): void => {
        UserSignUpAPI.signUpUser(this.state).then((value: any) => {
            console.log(value);
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <div className={classes.margin}>
                    <DialogTitle style={{ textAlign: 'center' }} id="scroll-dialog-title">Sign Up for your Intern-Zone Account</DialogTitle>

                    <DialogContent style={{ textAlign: 'center' }}>
                        Sign up with Email
                    </DialogContent>

                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-name"
                            label="Name"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-email"
                            label="Email"
                            className={classes.textField}
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-password"
                            label="Password"
                            className={classes.textField}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-confirmPassword"
                            label="Confirm Password"
                            className={classes.textField}
                            value={this.state.confirmPassword}
                            onChange={this.handleChange('confirmPassword')}
                            margin="normal"
                        />
                    </form>
                </div>

                <DialogContent>
                    <SignUpButton onClick={this.signUp} />
                </DialogContent>

                <DialogContent>
                    Already have an account? 
                    <Button onClick={() => this.props.setModalContent(ModalEnum.LOGIN_SELECTION)} color="primary">
                        Login
                    </Button>

                    <Button style={{float: 'right'}} onClick={() => this.props.setModalContent(ModalEnum.HELP)} color="primary">
                        Need Help?
                    </Button>
                </DialogContent>
            </>
        );
    }
}

export default withStyles(styles)(SignUpModal);
