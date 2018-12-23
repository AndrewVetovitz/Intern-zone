import React from 'react';

import { NavLink } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { ModalEnum } from '../Modal';

const toHome = '/';
const toAbout = '/about';
const toResources = '/resources';

const homeLink: any = ({ innerRef, ...props }: any) => <NavLink {...props} to={toHome} activeStyle={{
    fontWeight: 'bold',
    color: 'red'
}} />;
const aboutLink: any = ({ innerRef, ...props }: any) => <NavLink {...props} to={toAbout} activeStyle={{
    fontWeight: 'bold',
    color: 'red'
}} />;

const resourcesLink: any = ({ innerRef, ...props }: any) => <NavLink {...props} to={toResources} />;

const styles = () => createStyles({
    iconColor: {
        color: 'white',
    },
    textColor: {
        color: 'white'
    },
    textMargin: {
        marginLeft: 45
    },
    text: {
        color: 'white',
        marginLeft: 45
    },
    active: {
        color: 'red'
    }
});

export interface SidebarContentInputProps {
    onClick: () => any;
}

interface SidebarContentProps extends SidebarContentInputProps, WithStyles<typeof styles> {
    setModalOpen: (state: boolean) => any;
    setModalContent: (state: ModalEnum) => any;
}

class SidebarContent extends React.Component<SidebarContentProps> {
    constructor(props: SidebarContentProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <ListItem>
                    <ListItemText
                        disableTypography={true}
                        primary={
                            <div className={classes.textMargin}>
                                <Typography
                                    className={classes.textColor}
                                    style={{ display: 'inline-block', cursor: 'pointer' }}
                                    onClick={this.setModalContent(ModalEnum.SIGN_UP_SELECTION)}
                                >
                                    Sign up
                                </Typography>
                                {' '}
                                <Typography className={classes.textColor} style={{ display: 'inline-block' }}>
                                    or
                                </Typography>
                                {' '}
                                <Typography
                                    className={classes.textColor}
                                    style={{ display: 'inline-block', cursor: 'pointer' }}
                                    onClick={this.setModalContent(ModalEnum.LOGIN)}
                                >
                                    Login
                                </Typography>
                            </div>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={homeLink}>
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>Home</Typography>}
                    />
                </ListItem>

                <ListItem onClick={this.props.onClick} button={true} component={aboutLink}>
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>About</Typography>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={resourcesLink}>
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>Resources</Typography>}
                    />
                </ListItem>
            </>
        );
    }

    private setModalContent = (content: ModalEnum): () => void => {
        return () => this.modalClicked(content);
    }

    private modalClicked = (content: ModalEnum): void => {
        this.props.onClick();
        this.props.setModalContent(content);
        this.props.setModalOpen(true);
    }
}

export default withStyles(styles)(SidebarContent);
