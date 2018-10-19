import { createAction } from 'typesafe-actions';

export const modalActions = {
    setModalState: createAction('SET_MODAL_STATE', resolve => {
          return (state: boolean) => resolve(state);
    }),
    setModalContent: createAction('SET_MODAL_CONTENT', resolve => {
        return (state: string) => resolve(state);
  }),
};
