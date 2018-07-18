import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Navbar, { NavbarProps } from '../components/Navbar/Navbar';

import { sidebarActions } from '../store/sidebar';

import { RootState } from '../store/root-reducer';

function mapStateToProps(state: RootState, ownProps: NavbarProps) {
  return {
    isOpen: state.sidebar.isOpen,
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

export default connect<NavbarProps>(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

