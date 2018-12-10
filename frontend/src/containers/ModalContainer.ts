import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Modal, { ModalEnum } from '../components/Modal';

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

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal));

