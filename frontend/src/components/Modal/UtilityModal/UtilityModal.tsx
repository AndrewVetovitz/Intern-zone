import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

import UserAPI, { UserUtility } from '../../../api/userAPI';

import { Formik, Form, Field, FormikActions } from 'formik';

import SignUpButton from '../../SignUpButton/SignUpButton';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    }
});

interface UtilityModalProps extends WithStyles<typeof styles> {
    contentType: ModalEnum;
    setModalContent: (content: ModalEnum) => any;
}

interface UtilityState extends UserUtility { }

interface UtilityType {
    title: string;
    text: string;
    func: () => any;
}

class UtilityModal extends React.Component<UtilityModalProps, UtilityState> {
    constructor(props: UtilityModalProps) {
        super(props);

        this.state = {
            email: '',
        }
    }

    resetPassword = (): void => {
        UserAPI.resetUserPassword(this.state).then((value: any) => {
            console.log(value);
        });
    }

    confirmEmail = (): void => {
        UserAPI.confirmUserEmail(this.state).then((value: any) => {
            console.log(value);
        });
    }

    unlockAccount = (): void => {
        UserAPI.unlockUserAccount(this.state).then((value: any) => {
            console.log(value);
        });
    }

    render() {
        const { classes } = this.props;

        const content: UtilityType = this.selectContent(this.props.contentType);

        return (
            <>
                <div className={classes.margin}>
                    <DialogTitle style={{ textAlign: 'center' }} id="scroll-dialog-title">{content.title}</DialogTitle>

                    <DialogContent style={{ textAlign: 'center' }} id="scroll-dialog-text">{content.text}</DialogContent>

                    <div className={classes.margin}>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            onSubmit={(values: UtilityState, { setSubmitting }: FormikActions<UtilityState>) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 500);
                            }}
                            render={() => (
                                <Form>
                                    <label htmlFor="email">Email</label>
                                    <Field id="email" name="email" placeholder="Email" type="email" />

                                    <div style={{ marginBottom: 24 }}>
                                        <SignUpButton onClick={content.func} />
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
                    func: this.resetPassword 
                };
            }
            case ModalEnum.UTILITY_CONFIRM_EMAIL: {
                return { 
                    title: 'Need to confirm your email?', 
                    text: 'We will send you another confirmation email.', 
                    func: this.confirmEmail 
                };
            }
            case ModalEnum.UTILITY_LOCKED_OUT: {
                return { 
                    title: 'Locked out of your account?', 
                    text: 'We will send an email to unlock your account.', 
                    func: this.unlockAccount 
                };
            }
            default: {
                return { 
                    title: 'Forgot your password?', 
                    text: 'Enter your email and we will send you a link to reset your password.', 
                    func: this.resetPassword 
                };
            }
        }
    }
}

export default withStyles(styles)(UtilityModal);
