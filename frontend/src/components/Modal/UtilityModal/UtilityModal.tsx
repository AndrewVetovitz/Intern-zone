import React from 'react';

// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from '@material-ui/core';

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

                    <DialogTitle style={{ textAlign: 'center' }} id="scroll-dialog-title">{content.text}</DialogTitle>

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
                return { title: 'a', text: 'aa', func: this.resetPassword };
            }
            case ModalEnum.UTILITY_CONFIRM_EMAIL: {
                return { title: 'b', text: 'bb', func: this.confirmEmail };
            }
            case ModalEnum.UTILITY_LOCKED_OUT: {
                return { title: 'c', text: 'cc', func: this.unlockAccount };
            }
            default: {
                return { title: 'a', text: 'aa', func: this.resetPassword };
            }
        }
    }
}

export default withStyles(styles)(UtilityModal);
