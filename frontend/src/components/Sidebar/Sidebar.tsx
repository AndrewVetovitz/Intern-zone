import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import sidebarContent from '../SidebarContent/SidebarContent';

import constants from '../../constants';

const styles = (theme: any) => createStyles({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    list: {
        width: '100%',
    },
    drawerPaper: {
        position: 'fixed',
        width: constants.DRAWER_WIDTH,
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
    setConditionalSidebarState: (state: boolean) => any;
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

        const variant = (this.props.screenSizeIsOpen) ? 'persistent' : 'temporary';

        const content: JSX.Element = (
            <div className={classes.list}>
                <List>
                    {sidebarContent}
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <Drawer
                    ModalProps={{ onBackdropClick: () => this.props.setConditionalSidebarState(false) }}
                    variant={variant}
                    open={this.props.conditionalIsOpen || this.props.screenSizeIsOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onKeyDown={() => () => this.props.setConditionalSidebarState(false)}
                    >
                        {content}
                    </div>
                </Drawer>
            </div>
        );
    }

    checkWindowSize(nextProps: any): void {
        if (nextProps.windowSize && !this.props.conditionalIsOpen && !this.props.screenSizeIsOpen) {
            this.props.setScreenSizeSidebarState(true);
        } else if (!nextProps.windowSize && !this.props.conditionalIsOpen && this.props.screenSizeIsOpen) {
            this.props.setScreenSizeSidebarState(false);
        }
    }
}

export default withStyles(styles)(Sidebar);
