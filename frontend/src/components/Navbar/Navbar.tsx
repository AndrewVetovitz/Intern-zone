import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.css';

const TITLE: string = 'Intern Zone';

interface NavbarProps {
    classes: {
        root: string,
        menuButton: string,
        flex: string
    };
}

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

class Navbar extends React.Component<NavbarProps, {}> {
    constructor(props: NavbarProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        {TITLE}
                    </Typography>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}
   
export default withStyles(styles)(Navbar);
