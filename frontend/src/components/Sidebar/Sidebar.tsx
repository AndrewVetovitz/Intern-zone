import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { SidebarState } from '../../store/sidebar';
import { SidebarDispatchProps } from '../../containers/SidebarContainer';

import constants from '../component.constants';

const styles = (theme: any) => createStyles({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    drawerPaper: {
        position: 'fixed',
        width: constants.drawerWidth,
        height: 'calc(100% - 64px)',
        top: 64
    },
    toolbar: theme.mixins.toolbar
});

export interface SidebarProps extends SidebarDispatchProps, SidebarState, WithStyles<typeof styles>  {}

class Sidebar extends React.Component<SidebarProps, {}> {
    constructor(props: SidebarProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Drawer
                    variant="persistent"
                    open={this.props.isOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <List>{'Test 1'}</List>
                    <Divider />
                    <List>{'Test 2'}</List>
                </Drawer>
                {/* <div style={{width: '100%'}}>
                    {this.props.children}
                </div> */}
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Sidebar);
