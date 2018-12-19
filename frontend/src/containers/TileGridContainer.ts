import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import TileGrid from '../components/TileGrid/TileGrid';

import { companiesActions } from '../store/companies';
import { CompaniesState, CompanyDispatchProps } from '../store/companies/types';

import { RootState } from '../store/root-reducer';

import CompanyApi from '../api/companyAPI';

function mapStateToProps(state: RootState): CompaniesState {
    return {
        companies: state.companies.companies
    };
}

function mapDispatchToProps(dispatch: Dispatch): CompanyDispatchProps {
    return {
        getAllCompanyNames: () => {
            dispatch(companiesActions.fetchCompanies());
            CompanyApi.getAllCompanyNames()
                .then(companyNames => {
                    dispatch(companiesActions.fetchCompaniesFullfilled(companyNames));
                })
                .catch(err => {
                    dispatch(companiesActions.fetchCompaniesRejected(err));
                });
        }
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TileGrid));

