import {connect} from 'react-redux';
import {toggleUiItemAction} from '../actions';
import AppLayout from '../components/AppLayout';

const mapStateToProps = (state) => {
  return {
    drawerActive: state.ui.drawerActive,
    drawerPinned: state.ui.drawerPinned,
    sidebarPinned: state.ui.sidebarPinned,
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
