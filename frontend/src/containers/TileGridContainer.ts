import { connect } from 'react-redux';

import TileGrid, { TileGridProps } from '../components/TileGrid/TileGrid';

import { companyActions } from '../redux/company/actions';
import { CompanyState } from '../redux/company/types';
import { Dispatch } from '../redux/types';

import CompanyApi from '../api/companyAPI';

function mapStateToProps({ companyNames }: CompanyState) {
  return {
    companyNames
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getAllCompanyNames: () => {
      dispatch(companyActions.fetchCompanies());
      CompanyApi.getAllCompanyNames()
        .then((companyNames => {
          dispatch(companyActions.fetchCompaniesFullfilled(companyNames.data.companies));
        }))
        .catch((err => {
          dispatch(companyActions.fetchCompaniesRejected(err));
        }));
    }
  };
}

export default connect<TileGridProps>(mapStateToProps, mapDispatchToProps)(TileGrid);
