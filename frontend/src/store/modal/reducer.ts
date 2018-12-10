import { combineReducers } from 'redux';

import { ActionType, getType } from 'typesafe-actions';

import { modalActions } from './actions';

import { ModalState } from './types';

import { ModalEnum } from '../../components/Modal/index';

export type ModalAction = ActionType<typeof modalActions>;

export default combineReducers<ModalState, ModalAction>({
    modalOpen: (state = false, action: ModalAction) => {
        switch (action.type) {
            case getType(modalActions.setModalOpen): {
                return action.payload;
            }
            default: {
                return state;
            }
        }
    },
    modalContent: (state = ModalEnum.NONE, action: ModalAction) => {
        switch (action.type) {
            case getType(modalActions.setModalContent): {
                return action.payload;
            }
            default: {
                return state;
            }
        }
    }
});
