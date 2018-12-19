import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { CompaniesAction } from './companies/reducer';
import { CompanyAction } from './company/reducer';
import { SidebarAction } from './sidebar/reducer';
import { ModalAction } from './modal/reducer';

type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction = ReactRouterAction | CompanyAction | CompaniesAction | SidebarAction | ModalAction;
