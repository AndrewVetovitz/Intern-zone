import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// import { withRouter } from 'react-router-dom';

import Company from '../components/Company/Company';

import { companyActions } from '../store/company';
import { CompanyState, CompanyDispatchProps } from '../store/company/types';

import { RootState } from '../store/root-reducer';

import CompanyApi from '../api/companyAPI';

function mapStateToProps(state: RootState): CompanyState {
    return {
        company: state.company.company
    };
}

function mapDispatchToProps(dispatch: Dispatch): CompanyDispatchProps {
    return {
        getCompanyByName: (name: string) => {
            dispatch(companyActions.fetchCompany());
            CompanyApi.getCompanyByName(name)
                .then(company => {
                    dispatch(companyActions.fetchCompanyFullfilled(company));
                })
                .catch(err => {
                    dispatch(companyActions.fetchCompanyRejected(err));
                });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Company);

