import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { withRouter } from 'react-router-dom';

import Sidebar, { SidebarInputProps } from '../components/Sidebar/Sidebar';

import { sidebarActions, SidebarState, SidebarDispatchProps } from '../store/sidebar';

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

export default withRouter(connect<SidebarState, SidebarDispatchProps, SidebarInputProps>(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar));

