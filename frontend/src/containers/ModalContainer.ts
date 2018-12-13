import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ModalEnum } from '../components/Modal';
import SignUpSelectionModalComponent from '../components/Modal/SignUpSelectionModal/SignUpSelectionModal';
import SignUpModalComponent from '../components/Modal/SignUpModal/SignUpModal';
import LoginModalComponent from '../components/Modal/LoginModal/LoginModal';
import LoginSelectionModalComponent from '../components/Modal/LoginSelectionModal/LoginSelectionModal';

import { modalActions } from '../store/modal';
import { ModalState, ModalDispatchProps } from '../store/modal/types';

import { RootState } from '../store/root-reducer';

function mapStateToProps(state: RootState): ModalState {
    return {
        modalOpen: state.modal.modalOpen,
        modalContent: state.modal.modalContent
    };
}

function mapDispatchToProps(dispatch: Dispatch): ModalDispatchProps {
    return {
        setModalOpen: (state: boolean) => {
            dispatch(modalActions.setModalOpen(state));
        },
        setModalContent: (content: ModalEnum) => {
            dispatch(modalActions.setModalContent(content));
        }
    };
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

const SignUpSelectionModal = connector(SignUpSelectionModalComponent);
const SignUpModal = connector(SignUpModalComponent);
const LoginSelectionModal = connector(LoginSelectionModalComponent);
const LoginModal = connector(LoginModalComponent);

export {
    SignUpSelectionModal,
    SignUpModal,
    LoginSelectionModal,
    LoginModal
}
