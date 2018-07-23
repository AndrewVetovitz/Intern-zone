import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import TileGrid from '../components/TileGrid/TileGrid';

import { companyActions, CompanyState, CompanyDispatchProps } from '../store/company';

import { RootState } from '../store/root-reducer';

import CompanyApi from '../api/companyAPI';

function mapStateToProps(state: RootState): CompanyState {
    return {
        companyInfo: state.company.companyInfo
    };
}

function mapDispatchToProps(dispatch: Dispatch): CompanyDispatchProps {
  return {
    getAllCompanyNames: () => {
        dispatch(companyActions.fetchCompanies());
        CompanyApi.getAllCompanyNames()
            .then(companyNames => {
                dispatch(companyActions.fetchCompaniesFullfilled(companyNames));
            })
            .catch(err => {
                dispatch(companyActions.fetchCompaniesRejected(err));
            });
    }
  };
}

export default withRouter(connect<CompanyState, CompanyDispatchProps>(
    mapStateToProps, 
    mapDispatchToProps
)(TileGrid));

