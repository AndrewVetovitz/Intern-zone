// RootActions
import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { $call } from 'utility-types';

import { companyActions } from '../redux/company/actions';

const returnsOfActions = [
  ...(<any> Object).values(companyActions),
].map($call);

type AppAction = typeof returnsOfActions[number];
type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction = AppAction | ReactRouterAction;
