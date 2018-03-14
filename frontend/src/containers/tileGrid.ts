import { connect, Dispatch } from 'react-redux';

import * as actions from '../redux/company/actions';
import { StoreState } from '../redux/types';

import TileGrid from '../components/Tile/TileGrid';
import CompanyApi from '../api/companyAPI';

function mapStateToProps({ companyNames }: StoreState) {
  return {
    companyNames
  };
}

function mapDispatchToProps(dispatch: Dispatch<actions.CompanyAction>) {
  return {
    getAllCompanyNames: () => {
      dispatch(actions.fetchCompanies());
      CompanyApi.getAllCompanyNames()
        .then((companyNames => {
          dispatch(actions.fetchCompaniesFullfilled(companyNames.data.companies));
        }))
        .catch((err => {
          dispatch(actions.fetchCompaniesRejected(err));
        }));
    }
  };
}

export const TileGridContainer = connect(mapStateToProps, mapDispatchToProps)(<any> TileGrid);
