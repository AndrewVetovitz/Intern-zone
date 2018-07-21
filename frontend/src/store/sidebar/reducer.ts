import { combineReducers } from 'redux';

import { ActionType, getType } from 'typesafe-actions';

import { sidebarActions } from './actions';

import { SidebarState } from './index';

export type SidebarAction = ActionType<typeof sidebarActions>;

export default combineReducers<SidebarState, SidebarAction>({
    screenSizeIsOpen: (state = false, action: SidebarAction) => {
        switch (action.type) {
            case getType(sidebarActions.setScreenSizeSidebarState): {
                return state = action.payload;
            }
            default: {
                return state;
            }
        }
    },
    conditionalIsOpen: (state = false, action: SidebarAction) => {
        switch (action.type) {
            case getType(sidebarActions.setConditionalSidebarState): {
                return state = action.payload;
            }
            default: {
                return state;
            }
        }
    }
});
