import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';

const drawerWidth = 280;

const styles = (theme: any) => createStyles({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    drawerPaper: {
        position: 'fixed',
        width: drawerWidth,
        top: 0
    },
    toolbar: theme.mixins.toolbar
});

interface SidebarProps extends WithStyles<typeof styles> {}

class Sidebar extends React.Component<SidebarProps, {}> {
    constructor(props: SidebarProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {/* <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <List>{'Test 1'}</List>
                    <Divider />
                    <List>{'Test 2'}</List>
                </Drawer> */}
                <div style={{width: '100%'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Sidebar);
