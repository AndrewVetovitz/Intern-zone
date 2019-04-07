import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import ModalEnum from './Modal.enum';

describe('<Modal />', () => {
  it('renders without crashing', () => {
        const modalOpen: boolean = false;
        const modalContent: ModalEnum = ModalEnum.NONE;
        const setModalOpen = (state: boolean) => {};
        const setModalContent = (content: ModalEnum) => {};  

        const div = document.createElement('div');
        ReactDOM.render(
            <Modal 
                modalOpen={modalOpen} 
                modalContent={modalContent} 
                setModalOpen={setModalOpen} 
                setModalContent={setModalContent}
            />,
        div);
        ReactDOM.unmountComponentAtNode(div);
  });
});
