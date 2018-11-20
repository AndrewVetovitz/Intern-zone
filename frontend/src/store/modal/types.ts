import { ModalEnum } from '../../components/Modal/index';

export interface ModalState {
    readonly modalOpen: boolean;
    readonly modalContent: ModalEnum;
}

export interface ModalDispatchProps {
    setModalOpen: (state: boolean) => any;
    setModalContent: (state: ModalEnum) => any;
}
