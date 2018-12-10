import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { CompanyAction } from './company/reducer';
import { SidebarAction } from './sidebar/reducer';
import { ModalAction } from './modal/reducer';

type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction = ReactRouterAction | CompanyAction | SidebarAction | ModalAction;
