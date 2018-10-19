import { ModalEnum } from '../../components/Modal/index';

export interface ModalState {
    readonly modalState: boolean;
    readonly modalContent: ModalEnum;
}

export interface ModalDispatchProps {
    setModalState: (state: boolean) => any;
    setModalContent: (state: ModalEnum) => any;
}
