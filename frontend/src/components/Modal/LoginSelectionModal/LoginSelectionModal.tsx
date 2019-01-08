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

import { Formik, Form, Field, FormikActions } from 'formik';

import '../Form.css';

const styles = () => createStyles({
    margin: {
        margin: '0 25px'
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

    login = (): void => {
        UserAPI.loginUser(this.state).then((value: any) => {
            console.log(value);
        });
    }

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
                            onSubmit={(values: UserLogin, { setSubmitting }: FormikActions<UserLogin>) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 500);
                            }}
                            render={() => (
                                <Form>
                                    <label htmlFor="email">Email</label>
                                    <Field id="email" name="email" placeholder="Email" type="email" />

                                    <label htmlFor="password">Password</label>
                                    <Field id="password" name="password" placeholder="Password" type="password" />

                                    <div style={{ marginBottom: 24 }}>
                                        <ModalButton text={"Login"} onClick={this.login} />
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
