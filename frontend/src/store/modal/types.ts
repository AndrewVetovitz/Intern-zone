export interface ModalState {
    readonly modalState: boolean;
    readonly modalContent: string;
}

export interface ModalDispatchProps {
    setModalState: (state: boolean) => any;
    setModalContent: (state: string) => any;
}
