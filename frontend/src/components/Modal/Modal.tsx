import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';

// import Dialog from '@material-ui/core/Dialog';
import Modal from '@material-ui/core/Modal';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from './Modal.enum';

import LoginModal from '../../containers/LoginContainer';
import SignUpModal from '../../containers/SignUpContainer';

const styles = () => createStyles({
    contentStyles: {
        backgroundColor: 'white',
        width: 600,
        outline: 'none'
    },
    modalStyles: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
});

interface ModalProps extends RouteComponentProps<void>, WithStyles<typeof styles> {
    modalState: boolean;
    modalContent: ModalEnum;
    setModalState: (state: boolean) => any;
    setModalContent: (content: ModalEnum) => any;
}

class CustomModal extends React.Component<ModalProps, {}> {
    constructor(props: ModalProps) {
        super(props);
    }

    render() {  
        const { classes } = this.props;

        return (
            <Modal
                open={this.props.modalState}
                onClose={this.handleClose}
                aria-labelledby="scroll-dialog-title"
                className={classes.modalStyles}
            >
                <div className={classes.contentStyles}>
                    {this.getContent(this.props.modalContent)}
                </div>
            </Modal>
        );
    }

    private handleClose = (): void => {
        this.props.setModalContent(ModalEnum.NONE);
        this.props.setModalState(false);
    }

    private getContent = (content: ModalEnum): JSX.Element => {
        switch (content) {
            case ModalEnum.LOGIN: {
                return <LoginModal/>;
            }
            case ModalEnum.SIGN_UP: {
                return <SignUpModal/>;
            }
            default: {
                return <React.Fragment/>;
            }
        }
    }
}

export default withStyles(styles)(CustomModal);
