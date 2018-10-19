import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Modal, { ModalEnum } from '../components/Modal';

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
        setModalContent: (state: ModalEnum) => {
            dispatch(modalActions.setModalContent(state));
        }
    };
}

export default withRouter(connect<ModalState, ModalDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Modal));

