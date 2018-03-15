import { RouterState } from 'react-router-redux';
import { CompanyState } from './company/types';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
    router: RouterState;
    company: CompanyState;
}
