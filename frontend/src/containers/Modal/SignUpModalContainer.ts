import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { modalActions, ModalState, ModalDispatchProps } from '../../store/modal';

import SignUpModal from '../../components/Modal/SignUpModal/SignUpModal';
import { ModalEnum } from '../../components/Modal';

import { RootState } from '../../store/root-reducer';

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

export default connect<ModalState, ModalDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(SignUpModal);
