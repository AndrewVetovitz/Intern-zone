import { combineReducers } from 'redux';

import { ActionType, getType } from 'typesafe-actions';

import { sidebarActions } from './actions';

import { SidebarState } from './types';

import { NAVBAR_SIDEBAR_BREAK_WIDTH } from '../../constants';

export type SidebarAction = ActionType<typeof sidebarActions>;

export default combineReducers<SidebarState, SidebarAction>({
    screenSizeIsOpen: (state = (window.innerWidth > NAVBAR_SIDEBAR_BREAK_WIDTH), action: SidebarAction) => {
        switch (action.type) {
            case getType(sidebarActions.setScreenSizeSidebarState): {
                return action.payload;
            }
            default: {
                return state;
            }
        }
    },
    conditionalIsOpen: (state = false, action: SidebarAction) => {
        switch (action.type) {
            case getType(sidebarActions.setConditionalSidebarState): {
                return action.payload;
            }
            default: {
                return state;
            }
        }
    }
});
