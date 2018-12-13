import * as React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Navbar from '../../containers/NavbarContainer';
import Sidebar from '../../containers/SidebarContainer';
import Modal from '../../containers/ModalContainerBase';
import ContentWrapper from '../../containers/ContentWrapperContainer';

import Home from '../Home/Home';
import Company from '../Company/Company';
import About from '../About/About';
import Resources from '../Resources/Resources';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import constants from '../../constants';

const TITLE: string = constants.TITLE;

const styles = createStyles({
    backdropStyle: {
        cursor: 'pointer',
    },
    flex: {
        flex: 1,
        textDecoration: 'none',
        color: 'white'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 10,
        color: 'white'
    }
});

export interface RouterProps extends WithStyles<typeof styles> {
    setConditionalSidebarState: (state: boolean) => any;
    conditionalIsOpen: boolean;
    screenSizeIsOpen: boolean;
}

const routes: JSX.Element = (
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/company/:name" component={Company} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/resources" component={Resources} />
        <Route path="/**" component={Home} />
    </Switch>
);

class Routes extends React.Component<RouterProps, {}> {
    constructor(props: RouterProps) {
        super(props);
    }

    render(): JSX.Element {
        const { classes } = this.props;

        const queryWidth = constants.NAVBAR_SIDEBAR_BREAK_WIDTH;

        const backdropStyles: React.CSSProperties = {
            'zIndex': this.props.conditionalIsOpen ? 3 : 0
        };

        const toHome = '/';
        const link: any = ({ innerRef, ...propsSpread }: any) => <Link {...propsSpread} to={toHome} />;

        let icon: JSX.Element = <React.Fragment />;

        if (!this.props.screenSizeIsOpen) {
            icon = (
                <IconButton
                    onClick={this.handleClick}
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                >
                    <MenuIcon />
                </IconButton>
            );
        }

        const logoStyle: React.CSSProperties = { marginRight: 10 };
        const LOGO: JSX.Element = (
            <img
                onClick={this.setSidebarStateFalse}
                height="35px"
                width="35px"
                alt={'Intern Zone Logo'}
                style={logoStyle}
                src={constants.LOGO_URL}
            />
        );

        return (
            <Router>
                <React.Fragment>
                    <div style={{ position: 'fixed', zIndex: 6, top: 0, left: 0, width: 300 }}>
                        <Toolbar>
                            {icon}
                            <Typography variant="h6" color="inherit" component={link}>
                                {LOGO}
                            </Typography>
                            <Typography variant="h6" color="inherit" className={classes.flex} component={link}>
                                {TITLE}
                            </Typography>
                        </Toolbar>
                    </div>
                    <Backdrop
                        style={backdropStyles}
                        open={this.props.conditionalIsOpen}
                        classes={{ root: classes.backdropStyle }}
                        onClick={this.setSidebarStateFalse}
                    />
                    <Modal />
                    <Navbar />
                    <MediaQuery minWidth={queryWidth}>
                        {matches => <Sidebar windowSize={matches} />}
                    </MediaQuery>
                    <ContentWrapper>
                        {routes}
                    </ContentWrapper>
                </React.Fragment>
            </Router>
        );
    }

    private setSidebarStateFalse = (): void => {
        this.props.setConditionalSidebarState(false);
    }

    private handleClick = (): void => {
        this.props.setConditionalSidebarState(!this.props.conditionalIsOpen);
    }
}

export default withStyles(styles)(Routes);
