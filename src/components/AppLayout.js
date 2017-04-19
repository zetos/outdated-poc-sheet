import React, {PropTypes} from 'react';
import {AppBar, Checkbox, IconButton, Layout, NavDrawer, Panel, Sidebar} from 'react-toolbox';

const AppLayout = ({drawerActive, drawerPinned, sidebarPinned, toggleUiItem}) => (
    <Layout>
        <NavDrawer active={drawerActive}
            pinned={drawerPinned} permanentAt='xxxl'
            onOverlayClick={()=>toggleUiItem('DrawerActive')}>
            <p>
                Navigation, account switcher, etc. go here.
                    </p>
        </NavDrawer>
        <Panel>
            <AppBar leftIcon='menu' onLeftIconClick={()=>toggleUiItem('DrawerActive')} />
            <div style={{flex: 1, overflowY: 'auto', padding: '1.8rem'}}>
                <h1>Main Content</h1>
                <p>Main content goes here.</p>
                <Checkbox label='Pin drawer' checked={drawerPinned} onChange={()=>toggleUiItem('DrawerPinned')} />
                <Checkbox label='Show sidebar' checked={sidebarPinned} onChange={()=>toggleUiItem('SidebarPinned')} />
            </div>
        </Panel>
        <Sidebar pinned={sidebarPinned} width={5}>
            <div><IconButton icon='close' onClick={()=>toggleUiItem('SidebarPinned')} /></div>
            <div style={{flex: 1}}>
                <p>Supplemental content goes here.</p>
            </div>
        </Sidebar>
    </Layout>
    );

AppLayout.propTypes = {
    drawerActive: PropTypes.bool.isRequired,
    drawerPinned: PropTypes.bool.isRequired,
    sidebarPinned: PropTypes.bool.isRequired,
    toggleUiItem: PropTypes.func.isRequired,
};

export default AppLayout;
