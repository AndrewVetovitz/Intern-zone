import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { modalActions, ModalState, ModalDispatchProps } from '../../store/modal';

import SignUpModal from '../../components/Modal/SignUpModal/SignUpModal';
import { ModalEnum } from '../../components/Modal';

import { RootState } from '../../store/root-reducer';

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

export default connect<ModalState, ModalDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(SignUpModal);
