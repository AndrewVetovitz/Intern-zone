import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

import UserAPI, { UserUtility } from '../../../api/userAPI';

import { Formik, Form, Field, FormikActions, FormikErrors, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import ModalButton from '../../ModalButton/ModalButton';

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

interface UtilityModalProps extends WithStyles<typeof styles> {
    contentType: ModalEnum;
    setModalContent: (content: ModalEnum) => any;
}

interface UtilityState extends UserUtility { 
    content: UtilityType
}

interface UtilityType {
    title: string;
    text: string;
    buttonText: string;
    func: (setErrors: (errors: FormikErrors<UtilityState>) => void) => any;
}

class UtilityModal extends React.Component<UtilityModalProps, UtilityState> {
    constructor(props: UtilityModalProps) {
        super(props);

        this.state = {
            email: '',
            content: this.selectContent(this.props.contentType)
        }
    }

    processResponse = (value: any, setErrors: (errors: FormikErrors<UtilityState>) => void): void => {
        if(value.status === 422){
            value.data.errors.map((error: any) => {
                setErrors({
                    [error.param]: error.msg
                })
            });
        } else {
            console.log(value);
        }
    }

    resetPassword = (setErrors: (errors: FormikErrors<UserUtility>) => void): void => {
        UserAPI.resetUserPassword(this.state).then((value: any) => {
            this.processResponse(value, setErrors);
        });
    }

    confirmEmail = (setErrors: (errors: FormikErrors<UserUtility>) => void): void => {
        UserAPI.confirmUserEmail(this.state).then((value: any) => {
            this.processResponse(value, setErrors);
        });
    }

    unlockAccount = (setErrors: (errors: FormikErrors<UserUtility>) => void): void => {
        UserAPI.unlockUserAccount(this.state).then((value: any) => {
            this.processResponse(value, setErrors);
        });
    }

    UtilitySchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email Required')
    });

    render() {
        const { classes } = this.props;
        const { content } = this.state;

        return (
            <>
                <div className={classes.margin}>
                    <DialogTitle style={{ textAlign: 'center' }} id="scroll-dialog-title">{content.title}</DialogTitle>

                    <DialogContent style={{ textAlign: 'center' }} id="scroll-dialog-text">{content.text}</DialogContent>

                    <div className={classes.margin}>
                        <Formik
                            initialValues={{
                                email: ''
                            }}
                            onSubmit={(values: UserUtility, { setSubmitting, setErrors }: FormikActions<UserUtility>) => {
                                this.setState({ ...values }, content.func(setErrors));
                            }}

                            validationSchema={this.UtilitySchema}
                            render={() => (
                                <Form>
                                    <div className={classes.inputField}>
                                        <label htmlFor="email">Email</label>
                                        <Field id="email" name="email" placeholder="Email" type="email" />
                                        <ErrorMessage name="email">{msg => <div className={classes.error}>{msg}</div>}</ErrorMessage>
                                    </div>

                                    <div style={{ marginBottom: 24 }}>
                                        <ModalButton text={content.buttonText} />
                                    </div>
                                </Form>
                            )}
                        />
                    </div>

                    <DialogContent>
                        <Button onClick={() => this.props.setModalContent(ModalEnum.LOGIN_SELECTION)} color="primary">
                            Login
                        </Button>
                        <Button style={{ float: 'right' }} onClick={() => this.props.setModalContent(ModalEnum.HELP)} color="primary">
                            Need Help?
                        </Button>
                    </DialogContent>
                </div>
            </>
        );
    }

    private selectContent = (content: ModalEnum): UtilityType => {
        switch (content) {
            case ModalEnum.UTILITY_FORGOT_PASSWORD: {
                return {
                    title: 'Forgot your password?',
                    text: 'Enter your email and we will send you a link to reset your password.',
                    buttonText: 'Send password reset Link',
                    func: this.resetPassword
                };
            }
            case ModalEnum.UTILITY_CONFIRM_EMAIL: {
                return {
                    title: 'Need to confirm your email?',
                    text: 'We will send you another confirmation email.',
                    buttonText: 'Resend account conformation',
                    func: this.confirmEmail
                };
            }
            case ModalEnum.UTILITY_LOCKED_OUT: {
                return {
                    title: 'Locked out of your account?',
                    text: 'We will send an email to unlock your account.',
                    buttonText: 'Send account unlock email',
                    func: this.unlockAccount
                };
            }
            default: {
                return {
                    title: 'Forgot your password?',
                    text: 'Enter your email and we will send you a link to reset your password.',
                    buttonText: 'Send password reset Link',
                    func: this.resetPassword
                };
            }
        }
    }
}

export default withStyles(styles)(UtilityModal);
