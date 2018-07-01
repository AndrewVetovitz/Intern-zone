import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { CompanyAction } from './company';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | CompanyAction;
