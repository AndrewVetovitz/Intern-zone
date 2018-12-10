import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Sidebar from '../components/Sidebar/Sidebar';

import { sidebarActions } from '../store/sidebar';
import { SidebarState, SidebarDispatchProps } from '../store/sidebar/types';

import { RootState } from '../store/root-reducer';

function mapStateToProps(state: RootState): SidebarState {
    return {
        screenSizeIsOpen: state.sidebar.screenSizeIsOpen,
        conditionalIsOpen: state.sidebar.conditionalIsOpen
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
)(Sidebar));

