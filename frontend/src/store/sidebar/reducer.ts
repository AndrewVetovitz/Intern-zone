import { combineReducers } from 'redux';

import { ActionType, getType } from 'typesafe-actions';

import { sidebarActions } from './actions';

import { SidebarState } from './index';

export type SidebarAction = ActionType<typeof sidebarActions>;

export default combineReducers<SidebarState, SidebarAction>({
    isOpen: (state = false, action: SidebarAction) => {
        switch (action.type) {
            case getType(sidebarActions.toggleSidebar): {
                return state = !state ;
            }
            default: {
                return state;
            }
        }
    }
});
