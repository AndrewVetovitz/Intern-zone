import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Sidebar, { SidebarProps } from '../components/Sidebar/Sidebar';

import { sidebarActions } from '../store/sidebar';

import { RootState } from '../store/root-reducer';

export interface SidebarDispatchProps {
  toggleSidebar?: () => any;
}

function mapStateToProps(state: RootState, ownProps: SidebarProps) {
  return {
    state: state.sidebarReducer,
    toggleSidebar: ownProps.toggleSidebar,
    classes: ownProps.classes,
    theme: ownProps.theme
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleSidebar: () => {
      dispatch(sidebarActions.toggleSidebar());
    }
  };
}

export default connect<SidebarProps>(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

