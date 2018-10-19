import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

const styles = () => createStyles({});

export interface ModalInputProps {}

interface ModalProps extends RouteComponentProps<void>, ModalInputProps, WithStyles<typeof styles> {
    modalState: boolean;
    modalContent: string;
    setModalState: (state: boolean) => any;
    setModalContent: (state: string) => any;
}

class Modal extends React.Component<ModalProps, {}> {
    constructor(props: ModalProps) {
        super(props);
    }

    render() {  
        return (
            <React.Fragment>
                <Dialog
                    open={this.props.modalState}
                    onClose={this.handleClose}
                    scroll={'body'}
                    aria-labelledby="scroll-dialog-title"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 0}}
                >
                    {this.getContent(this.props.modalContent)}
                </Dialog>
            </React.Fragment>
        );
    }

    private handleClose = (): void => {
        this.props.setModalState(false);
    }

    private getContent = (content: string): JSX.Element => {
        switch (content) {
            case 'login': {
                return <Login/>;
            }
            case 'singup': {
                return <SignUp/>;
            }
            default: {
                return <React.Fragment/>;
            }
        }
    }
}

export default withStyles(styles)(Modal);
