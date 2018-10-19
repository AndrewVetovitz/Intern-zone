import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from './Modal.enum';

import Login from '../../containers/LoginContainer';
import SignUp from '../../containers/SignUpContainer';

const styles = () => createStyles({});

interface ModalProps extends RouteComponentProps<void>, WithStyles<typeof styles> {
    modalState: boolean;
    modalContent: ModalEnum;
    setModalState: (state: boolean) => any;
    setModalContent: (content: ModalEnum) => any;
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
        this.props.setModalContent(ModalEnum.NONE);
        this.props.setModalState(false);
    }

    private getContent = (content: ModalEnum): JSX.Element => {
        switch (content) {
            case ModalEnum.LOGIN: {
                return <Login/>;
            }
            case ModalEnum.SIGN_UP: {
                return <SignUp/>;
            }
            default: {
                return <React.Fragment/>;
            }
        }
    }
}

export default withStyles(styles)(Modal);
