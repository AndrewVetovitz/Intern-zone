import {
    Dispatch as ReduxDispatch
} from 'redux';

import { RootAction } from './root-action';

export type Dispatch = ReduxDispatch<RootAction>;

export interface Action {
    type: any;
    payload: any;
}
