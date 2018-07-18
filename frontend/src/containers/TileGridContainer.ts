import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TileGrid, { TileGridProps } from '../components/TileGrid/TileGrid';

import { companyActions } from '../store/company';

import { RootState } from '../store/root-reducer';

import CompanyApi from '../api/companyAPI';

export interface CompanyDispatchProps {
  getAllCompanyNames?: () => any;
}

function mapStateToProps(state: RootState) {
  return {
    company: state.company.company
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getAllCompanyNames: () => {
      dispatch(companyActions.fetchCompanies());
      CompanyApi.getAllCompanyNames()
        .then(companyNames => {
          dispatch(companyActions.fetchCompaniesFullfilled(companyNames));
        })
        .catch((err => {
          dispatch(companyActions.fetchCompaniesRejected(err));
        }));
    }
  };
}

export default connect<TileGridProps>(
  mapStateToProps, 
  mapDispatchToProps
)(TileGrid);

