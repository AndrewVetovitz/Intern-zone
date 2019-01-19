import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

import GoogleSignUp from '../../Google/GoogleSignUp';
import FacebookSignUp from '../../Facebook/FacebookSignUp';
import GithubSignUp from '../../Github/GithubSignUp';
import LinkedinSignUp from '../../Linkedin/LinkedinSignUp';

import ModalButton from '../../ModalButton/ModalButton';

import UserAPI, { UserLogin } from '../../../api/userAPI';

import { Formik, Form, Field, FormikActions, FormikErrors, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../Form.css';

const styles = () => createStyles({
    margin: {
        margin: '0 19px',
    },
    inputField: {
        marginBottom: 19
    },
    error: {
        color: 'red',
        fontSize: 12
    }
});

interface LoginProps extends WithStyles<typeof styles> {
    setModalContent: (state: ModalEnum) => any;
}

interface LoginState extends UserLogin { }

class LoginModal extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    login = (setErrors: (errors: FormikErrors<LoginState>) => void): void => {
        UserAPI.loginUser(this.state).then((value: any) => {
            if(value.status === 422){
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

    LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Emailed Required'),
        password: Yup.string()
            .min(6, 'Minimum length of 6')
            .required('Password Required')
    });

    render() {
        const { classes } = this.props;

        return (
            <>
                <div className={classes.margin}>
                    <DialogTitle style={{ textAlign: 'center' }} id="scroll-dialog-title">Login In to your personalized profile</DialogTitle>

                    <DialogContent>
                        <GoogleSignUp />
                    </DialogContent>
                    <DialogContent>
                        <FacebookSignUp />
                    </DialogContent>
                    <DialogContent>
                        <LinkedinSignUp />
                    </DialogContent>
                    <DialogContent>
                        <GithubSignUp />
                    </DialogContent>

                    <div className={classes.margin}>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            onSubmit={(values: LoginState, { setSubmitting, setErrors }: FormikActions<LoginState>) => {
                                this.setState({ ...values }, () => this.login(setErrors));
                            }}
                            validationSchema={this.LoginSchema}
                            render={() => (
                                <Form>
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

                                    <div style={{ marginBottom: 24 }}>
                                        <ModalButton text={'Login'} />
                                    </div>
                                </Form>
                            )}
                        />
                    </div>

                    <DialogContent>
                        <Button onClick={() => this.props.setModalContent(ModalEnum.SIGN_UP_SELECTION)} color="primary">
                            SignUp
                        </Button>
                        <Button style={{ float: 'right' }} onClick={() => this.props.setModalContent(ModalEnum.HELP)} color="primary">
                            Need Help?
                        </Button>
                    </DialogContent>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(LoginModal);
