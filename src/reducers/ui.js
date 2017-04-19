const ui = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_UI_ITEM':
      // console.log('Satanic state.item: ', state.item);
      // console.log('Satanic action.item: ', action.item);
      // console.log('Satanic state: ', state);
      // console.log('Satanic !state.drawerActive: ', !state.drawerActive);

      return action.item === 'DrawerActive' ? Object.assign({}, state, {drawerActive: !state.drawerActive}) :
      action.item === 'DrawerPinned' ? Object.assign({}, state, {drawerPinned: !state.drawerPinned}) :
      action.item === 'SidebarPinned' ? Object.assign({}, state, {sidebarPinned: !state.sidebarPinned}) :
      state;

    default:
      return state;
  }
};

export default ui;
