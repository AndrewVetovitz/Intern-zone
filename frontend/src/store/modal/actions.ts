import { createAction } from 'typesafe-actions';

import { ModalEnum } from '../../components/Modal/index';

export const modalActions = {
    setModalOpen: createAction('SET_MODAL_STATE', resolve => {
          return (state: boolean) => resolve(state);
    }),
    setModalContent: createAction('SET_MODAL_CONTENT', resolve => {
        return (content: ModalEnum) => resolve(content);
  }),
};
