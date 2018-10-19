import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { CompanyAction } from './company';
import { SidebarAction } from './sidebar';
import { ModalAction } from './modal';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | CompanyAction | SidebarAction | ModalAction;
