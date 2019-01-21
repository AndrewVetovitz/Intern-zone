import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

import userAPI, { UserSignUp } from '../../../api/userAPI';

import ModalButton from '../../ModalButton/ModalButton';

import { Formik, Form, Field, FormikActions, FormikErrors, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../Form.css';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    },
    inputField: {
        marginBottom: 19
    },
    error: {
        color: 'red',
        fontSize: 12
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

    signUp = (setErrors: (errors: FormikErrors<SignUpState>) => void): void => {
        userAPI.signUpUser(this.state).then((value: any) => {
            if (value.status === 422) {
                value.data.errors.map((error: any) => {
                    setErrors({
                        [error.param]: error.msg
                    })
                });
            } else {
                console.log(value);
            }
        });
    }

    SignUpSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(1, 'Minimum length of 1')
            .required('First Name Required'),
        lastName: Yup.string()
            .min(1, 'Minimum length of 1')
            .required('Last Name Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email Required'),
        password: Yup.string()
            .min(6, 'Minimum length of 6')
            .required('Password Required'),
        passwordAgain: Yup.string()
            .min(6, 'Minimum length of 6')
            .oneOf([Yup.ref('password'), 'Passwords must be equal'])
            .required('Password Required')
    });

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
                        onSubmit={(values: UserSignUp, { setSubmitting, setErrors }: FormikActions<UserSignUp>) => {
                            this.setState({ ...values }, () => this.signUp(setErrors));
                        }}
                        validationSchema={this.SignUpSchema}
                        render={() => (
                            <Form>
                                <div className={classes.inputField}>
                                    <label htmlFor="firstName">First Name</label>
                                    <Field id="firstName" name="firstName" placeholder="First name" type="name" />
                                    <ErrorMessage name="firstName">{msg => <div className={classes.error}>{msg}</div>}</ErrorMessage>
                                </div>

                                <div className={classes.inputField}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <Field id="lastName" name="lastName" placeholder="Last name" type="name" />
                                    <ErrorMessage name="lastName">{msg => <div className={classes.error}>{msg}</div>}</ErrorMessage>
                                </div>

                                <div className={classes.inputField}>
                                    <label htmlFor="email">Email</label>
                                    <Field id="email" name="email" placeholder="Email" type="email" />
                                    <ErrorMessage name="email">{msg => <div className={classes.error}>{msg}</div>}</ErrorMessage>
                                </div>

                                <div className={classes.inputField}>
                                    <label htmlFor="password">Password</label>
                                    <Field id="password" name="password" placeholder="Password" type="password" />
                                    <ErrorMessage name="password">{msg => <div className={classes.error}>{msg}</div>}</ErrorMessage>
                                </div>

                                <div className={classes.inputField}>
                                    <label htmlFor="confirmPassword">Password Again</label>
                                    <Field id="confirmPassword" name="confirmPassword" placeholder="Confirm Again" type="confirmPassword" />
                                    <ErrorMessage name="confirmPassword">{msg => <div className={classes.error}>{msg}</div>}</ErrorMessage>
                                </div>

                                <div style={{ marginBottom: 24 }}>
                                    <ModalButton text={'Sign-up with Email'} img={'email'} />
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
