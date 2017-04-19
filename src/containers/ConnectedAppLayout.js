import {connect} from 'react-redux';
import {toggleUiItemAction} from '../actions';
import AppLayout from '../components/AppLayout';

const mapStateToProps = (state, ownProps) => {
  return {
    drawerActive: ownProps.filter === state.ui.drawerActive,
    drawerPinned: ownProps.filter === state.ui.drawerPinned,
    sidebarPinned: ownProps.filter === state.ui.sidebarPinned,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleUiItem: (item) => {
      dispatch(toggleUiItemAction(item));
    },
  };
};

const ConnectedAppLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);

export default ConnectedAppLayout;
