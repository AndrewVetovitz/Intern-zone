import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TileGrid, { TileGridProps } from '../components/TileGrid/TileGrid';

import { companyActions, CompanyStateProps } from '../store/company';

import CompanyApi from '../api/companyAPI';

export interface CompanyDispatchProps {
  getAllCompanyNames?: () => any;
}

function mapStateToProps({ companyNames }: CompanyStateProps) {
  return {
    companyNames
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

