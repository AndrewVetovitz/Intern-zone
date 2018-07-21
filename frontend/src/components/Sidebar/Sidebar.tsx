import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

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

export interface SidebarInputProps {
    windowSize: boolean;
}

export interface SidebarProps extends SidebarInputProps, WithStyles<typeof styles> {
    setScreenSizeSidebarState: (state: boolean) => any;
    conditionalIsOpen: boolean;
    screenSizeIsOpen: boolean;
    windowSize: boolean;
}


class Sidebar extends React.Component<SidebarProps, {}> {
    constructor(props: SidebarProps) {
        super(props);
    }

    componentWillReceiveProps(nextProps: any) {
        this.checkWindowSize(nextProps);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Drawer
                    variant="persistent"
                    open={this.props.conditionalIsOpen || this.props.screenSizeIsOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <List>{'Test 1'}</List>
                    <Divider />
                    <List>{'Test 2'}</List>
                </Drawer>
            </div>
        );
    }

    checkWindowSize(nextProps: any): void {
        if (nextProps.windowSize && !this.props.screenSizeIsOpen) {
            this.props.setScreenSizeSidebarState(true);
        } else if (!nextProps.windowSize && this.props.screenSizeIsOpen) {
            this.props.setScreenSizeSidebarState(false);
        }
    }
}

export default withStyles(styles, {withTheme: true})(Sidebar);
