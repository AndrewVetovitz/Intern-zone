import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Navbar from '../components/Navbar/Navbar';

import { sidebarActions, SidebarDispatchProps, SidebarState } from '../store/sidebar';

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

export default connect<SidebarState, SidebarDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

