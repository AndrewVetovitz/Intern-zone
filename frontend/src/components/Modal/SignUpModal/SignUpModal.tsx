import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

import userAPI, { UserSignUp } from '../../../api/userAPI';

import ModalButton from '../../ModalButton/ModalButton';

import { Formik, Form, Field, FormikActions } from 'formik';

import '../Form.css';

const styles = () => createStyles({
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
    }
});

interface SignUpProps extends WithStyles<typeof styles> {
    setModalContent: (content: ModalEnum) => any;
}

interface SignUpState extends UserSignUp { }

class SignUpModal extends React.Component<SignUpProps, SignUpState> {
    constructor(props: SignUpProps) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    signUp = (): void => {
        userAPI.signUpUser(this.state).then((value: any) => {
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

                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        onSubmit={(values: UserSignUp, { setSubmitting }: FormikActions<UserSignUp>) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 500);
                        }}
                        render={() => (
                            <Form>
                                <label htmlFor="firstName">First Name</label>
                                <Field id="firstName" name="firstName" placeholder="First name" type="name" />

                                <label htmlFor="lastName">Last Name</label>
                                <Field id="lastName" name="lastName" placeholder="Last name" type="name" />

                                <label htmlFor="email">Email</label>
                                <Field id="email" name="email" placeholder="reallycoolemail@gmail.com" type="email" />

                                <label htmlFor="password">Password</label>
                                <Field id="password" name="password" placeholder="Password" type="password" />

                                <label htmlFor="confirmPassword">Password Again</label>
                                <Field id="confirmPassword" name="confirmPassword" placeholder="Confirm Again" type="confirmPassword" />

                                <div style={{ marginBottom: 24 }}>
                                    <ModalButton text={"Sign-up with Email"} onClick={this.signUp} />
                                </div>
                            </Form>
                        )}
                    />
                </div>

                <DialogContent>
                    Already have an account?

                    <Button onClick={() => this.props.setModalContent(ModalEnum.LOGIN_SELECTION)} color="primary">
                        Login
                    </Button>

                    <Button style={{ float: 'right' }} onClick={() => this.props.setModalContent(ModalEnum.HELP)} color="primary">
                        Need Help?
                    </Button>
                </DialogContent>
            </>
        );
    }
}

export default withStyles(styles)(SignUpModal);
