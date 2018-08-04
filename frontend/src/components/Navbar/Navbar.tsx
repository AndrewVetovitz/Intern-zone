import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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
    }
});

export interface NavbarProps extends RouteComponentProps<void>, WithStyles<typeof styles> {
    setConditionalSidebarState: (state: boolean) => any;
    conditionalIsOpen: boolean;
}

class Navbar extends React.Component<NavbarProps, {}> {
    constructor(props: NavbarProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar/> 
                </AppBar>
            </div>
        );
    }
}
   
export default withStyles(styles)(Navbar);
