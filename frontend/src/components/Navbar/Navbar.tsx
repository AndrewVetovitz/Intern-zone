import React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { BACKGROUND_COLOR } from '../../constants';

const styles = createStyles({
    root: {
        flexGrow: 1,
        position: 'fixed',
        width: '100%',
        zIndex: 2
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    navStyle: {
        background: BACKGROUND_COLOR
    }
});

export interface NavbarProps extends RouteComponentProps<void>, WithStyles<typeof styles> {
    conditionalIsOpen: boolean;
    screenSizeIsOpen: boolean;
}

class Navbar extends React.Component<NavbarProps> {
    constructor(props: NavbarProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (!this.props.screenSizeIsOpen) ? (
            <div className={classes.root}>
                <AppBar className={classes.navStyle}>
                    <Toolbar />
                </AppBar>
            </div>
        ) : <></>;
    }
}

export default withStyles(styles)(Navbar);
