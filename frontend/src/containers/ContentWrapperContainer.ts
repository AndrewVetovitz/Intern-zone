import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import { SidebarState } from '../store/sidebar/types';

import { RootState } from '../store/root-reducer';

function mapStateToProps(state: RootState): SidebarState {
    return {
        conditionalIsOpen: state.sidebar.conditionalIsOpen,
        screenSizeIsOpen: state.sidebar.screenSizeIsOpen,
    };
}

export default withRouter(connect(
    mapStateToProps,
    {}
)(ContentWrapper));

