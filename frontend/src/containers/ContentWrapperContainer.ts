import { connect } from 'react-redux';

import ContentWrapper, { ContentWrapperProps } from '../components/ContentWrapper/ContentWrapper';

import { RootState } from '../store/root-reducer';

function mapStateToProps(state: RootState, ownProps: ContentWrapperProps) {
  return {
    conditionalIsOpen: state.sidebar.conditionalIsOpen,
    screenSizeIsOpen: state.sidebar.screenSizeIsOpen,
    children: ownProps.children,
    classes: ownProps.classes,
    theme: ownProps.theme
  };
}

export default connect<ContentWrapperProps>(
  mapStateToProps,
  {}
)(ContentWrapper);

