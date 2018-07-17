import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { CompanyAction } from './company';
import { SidebarAction } from './sidebar';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | CompanyAction | SidebarAction;
