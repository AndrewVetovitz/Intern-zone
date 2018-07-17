// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';

// import Sidebar, { SidebarProps } from '../components/Sidebar/Sidebar';

// import { sidebarActions, SidebarStateProps } from '../store/sidebar';

// export interface SidebarDispatchProps {
//   toggleSidebar?: () => any;
// }

// function mapStateToProps(state: SidebarStateProps, ownProps: SidebarProps) {
//   return {
//     state: state,
//     toggleSidebar: ownProps.toggleSidebar,
//     classes: ownProps.classes,
//     theme: ownProps.theme
//   };
// }

// function mapDispatchToProps(dispatch: Dispatch) {
//   return {
//     toggleSidebar: () => {
//       dispatch(sidebarActions.toggleSidebar());
//     }
//   };
// }

// export default connect<SidebarProps>(
//   mapStateToProps, 
//   mapDispatchToProps
// )(Sidebar);

