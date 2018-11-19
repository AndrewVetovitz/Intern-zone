import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';

import { RouteComponentProps } from 'react-router-dom';

import SidebarContent from '../../containers/SidebarContentContainer';

import constants from '../../constants';

const styles = () => createStyles({
    root: {
        flexGrow: 1,
        zIndex: 5,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    list: {
        width: '100%'
    },
    drawerPaper: {
        position: 'fixed',
        width: constants.DRAWER_WIDTH,
        backgroundColor: constants.BACKGROUND_COLOR,
        height: '100%',
        overflow: 'hidden'
    }
});

export interface SidebarInputProps {
    windowSize: boolean;
}

export interface SidebarProps extends SidebarInputProps, RouteComponentProps<void>, WithStyles<typeof styles> {
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

    componentDidUpdate(nextProps: any) {
        this.checkWindowSize(nextProps);
    }

    render() {
        const { classes } = this.props;

        const variant = 'persistent';

        const content: JSX.Element = (
            <div className={classes.list}>
                <List component="nav">
                    <SidebarContent onClick={() => this.props.setConditionalSidebarState(false)}/>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <Drawer
                    variant={variant}
                    open={this.props.conditionalIsOpen || this.props.screenSizeIsOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar style={{width: constants.DRAWER_WIDTH}} />
                    <div
                        role="button"
                        onKeyDown={() => this.props.setConditionalSidebarState(false)}
                    >
                        {content}
                    </div>
                </Drawer>
            </div>
        );
    }

    private checkWindowSize(nextProps: any): void {
        if (nextProps.windowSize && !this.props.conditionalIsOpen && !this.props.screenSizeIsOpen) {
            this.props.setScreenSizeSidebarState(true);
        } else if (!nextProps.windowSize && !this.props.conditionalIsOpen && this.props.screenSizeIsOpen) {
            this.props.setScreenSizeSidebarState(false);
        }
    }
}

export default withStyles(styles)(Sidebar);
