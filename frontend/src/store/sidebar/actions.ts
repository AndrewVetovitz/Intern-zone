import { createAction } from 'typesafe-actions';

export const sidebarActions = {
    setScreenSizeSidebarState: createAction('SET_SCREEN_SIZE_SIDEBAR_STATE', resolve => {
          return (state: boolean) => resolve(state);
    }),
    setConditionalSidebarState: createAction('SET_CONDITIONAL_SIDEBAR_STATE', resolve => {
        return (state: boolean) => resolve(state);
  }),
};
