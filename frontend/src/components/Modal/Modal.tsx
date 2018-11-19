import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from './Modal.enum';

import LoginModal from '../../containers/LoginContainer';
import SignUpModal from '../../containers/SignUpContainer';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    },
    width: {
        width: 600
    }
});

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
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Dialog
                    open={this.props.modalState}
                    onClose={this.handleClose}
                    scroll={'body'}
                    aria-labelledby="scroll-dialog-title"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 0}}
                >
                    <div className={classes.width}>
                        <div className={classes.margin}>
                            {this.getContent(this.props.modalContent)}
                        </div>
                    </div>

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

export default withStyles(styles)(Modal);
