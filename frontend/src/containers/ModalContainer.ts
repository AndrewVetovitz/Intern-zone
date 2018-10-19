import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Modal, { ModalInputProps } from '../components/Modal/Modal';

import { modalActions, ModalState, ModalDispatchProps } from '../store/modal';

import { RootState } from '../store/root-reducer';

function mapStateToProps(state: RootState): ModalState {
  return {
    modalState: state.modal.modalState,
    modalContent: state.modal.modalContent
  };
}

function mapDispatchToProps(dispatch: Dispatch): ModalDispatchProps {
    return {
        setModalState: (state: boolean) => {
            dispatch(modalActions.setModalState(state));
        },
        setModalContent: (state: string) => {
            dispatch(modalActions.setModalContent(state));
        }
    };
}

export default withRouter(connect<ModalState, ModalDispatchProps, ModalInputProps>(
  mapStateToProps,
  mapDispatchToProps
)(Modal));

