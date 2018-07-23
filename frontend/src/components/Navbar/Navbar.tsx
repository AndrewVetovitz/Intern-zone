import * as React from 'react';

import { RouteComponentProps, Link } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const TITLE: string = 'Zinterns';

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

        const toHome = '/';
        const link: any = ({innerRef, ...propsSpread}: any) => <Link {...propsSpread} to={toHome} />;

        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                          onClick={this.handleClick}
                          className={classes.menuButton} 
                          color="inherit" 
                          aria-label="Menu"
                        >
                          <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex} component={link}>
                            {TITLE}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    private handleClick = (): void => {
        this.props.setConditionalSidebarState(!this.props.conditionalIsOpen);
    }
}
   
export default withStyles(styles)(Navbar);
