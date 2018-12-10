import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

import { sidebarActions } from '../store/sidebar';
import { SidebarDispatchProps, SidebarState } from '../store/sidebar/types';

import { RootState } from '../store/root-reducer';

function mapStateToProps(state: RootState): SidebarState {
    return {
        conditionalIsOpen: state.sidebar.conditionalIsOpen,
        screenSizeIsOpen: state.sidebar.screenSizeIsOpen
    };
}

function mapDispatchToProps(dispatch: Dispatch): SidebarDispatchProps {
    return {
        setScreenSizeSidebarState: (state: boolean) => {
            dispatch(sidebarActions.setScreenSizeSidebarState(state));
        },
        setConditionalSidebarState: (state: boolean) => {
            dispatch(sidebarActions.setConditionalSidebarState(state));
        }
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar));

