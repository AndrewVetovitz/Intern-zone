import React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from './Modal.enum';

import { LoginSelectionModal, LoginModal, SignUpSelectionModal, SignUpModal } from '../../containers/ModalContainer';;

const styles = () => createStyles({
    contentStyles: {
        backgroundColor: 'white',
        width: 600,
        outline: 'none',
        padding: 15
    },
    modalStyles: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        color: '#6d6d6d',
        float: 'right',
        padding: 0,
        minWidth: 12.866,
        minHeight: 24,
        fontSize: 21,
        '&:hover': {
            color: 'black',
            backgroundColor: 'white',
        }
    }
});

interface ModalProps extends RouteComponentProps<void>, WithStyles<typeof styles> {
    modalOpen: boolean;
    modalContent: ModalEnum;
    setModalOpen: (state: boolean) => any;
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
                open={this.props.modalOpen}
                onClose={this.handleClose}
                aria-labelledby="scroll-dialog-title"
                className={classes.modalStyles}
            >
                <div className={classes.contentStyles}>
                    <Button className={classes.buttonStyle} onClick={this.handleClose}>X</Button>
                    {this.getContent(this.props.modalContent)}
                </div>
            </Modal>
        );
    }

    private handleClose = (): void => {
        this.props.setModalContent(ModalEnum.NONE);
        this.props.setModalOpen(false);
    }

    private getContent = (content: ModalEnum): JSX.Element => {
        switch (content) {
            case ModalEnum.LOGIN_SELECTION: {
                return <LoginSelectionModal />;
            }
            case ModalEnum.LOGIN: {
                return <LoginModal />;
            }
            case ModalEnum.SIGN_UP_SELECTION: {
                return <SignUpSelectionModal />;
            }
            case ModalEnum.SIGN_UP: {
                return <SignUpModal />;
            }
            default: {
                return <></>;
            }
        }
    }
}

export default withStyles(styles)(CustomModal);
