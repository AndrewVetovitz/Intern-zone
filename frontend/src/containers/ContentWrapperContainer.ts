import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import ContentWrapper, { ContentWrapperInputProps } from '../components/ContentWrapper/ContentWrapper';
import { SidebarState } from '../store/sidebar';

import { RootState } from '../store/root-reducer';

function mapStateToProps(state: RootState): SidebarState {
    return {
        conditionalIsOpen: state.sidebar.conditionalIsOpen,
        screenSizeIsOpen: state.sidebar.screenSizeIsOpen,
    };
}

export default withRouter(connect<SidebarState, {}, ContentWrapperInputProps>(
    mapStateToProps,
    {}
)(ContentWrapper));

