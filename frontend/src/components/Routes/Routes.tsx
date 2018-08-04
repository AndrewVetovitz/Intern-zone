import * as React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Backdrop from '@material-ui/core/Backdrop';

import Navbar from '../../containers/NavbarContainer';
import Sidebar from '../../containers/SidebarContainer';
import ContentWrapper from '../../containers/ContentWrapperContainer';

import Home from '../Home/Home';
import Company from '../Company/Company';
import About from '../About/About';
import Resources from '../Resources/Resources';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import constants from '../../constants';

// TEST
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const TITLE: string = 'Zinterns';
// TEST

const styles = (theme: any) => createStyles({
    backdropStyle: {
        cursor: 'pointer',
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
});

export interface RouterProps extends WithStyles<typeof styles>  {
    setConditionalSidebarState: (state: boolean) => any;
    conditionalIsOpen: boolean;
}

const routes: JSX.Element = (
    <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/company/:name" component={Company} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/resources" component={Resources} />
    </Switch>
);

class Routes extends React.Component<RouterProps, {}> {
    constructor(props: RouterProps) {
        super(props);
    }

    render(): JSX.Element {
        const { classes } = this.props;

        const queryWidth = constants.NAVBAR_SIDEBAR_BREAK_WIDTH;

        const customStyles: React.CSSProperties = {
            'zIndex': this.props.conditionalIsOpen ? 3 : 0,
            'transition': 'opacity 5ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important'
        };

        const toHome = '/';
        const link: any = ({innerRef, ...propsSpread}: any) => <Link {...propsSpread} to={toHome} />;

        return (
            <Router>
                <div>
                    <div style={{position: 'absolute', zIndex: 6, top: 0, left: 0}}>
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
                    </div>
                    <Backdrop
                        style={customStyles}
                        open={this.props.conditionalIsOpen} 
                        classes={{root: classes.backdropStyle}}
                        onClick={() => this.props.setConditionalSidebarState(false)} 
                    />
                    <MediaQuery maxWidth={queryWidth}>
                        <Navbar/>
                        <Toolbar />
                    </MediaQuery>
                    <MediaQuery minWidth={queryWidth}>
                        {(matches) => {
                            return (
                                <Sidebar windowSize={matches} />
                            );
                        }}
                    </MediaQuery>
                    <ContentWrapper>
                        {routes}
                    </ContentWrapper>
                </div>
            </Router>
        );
    }

    private handleClick = (): void => {
        this.props.setConditionalSidebarState(!this.props.conditionalIsOpen);
    }
}

export default withStyles(styles)(Routes);
