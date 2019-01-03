import React from 'react';

import { Link } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

import { ModalEnum } from '../Modal';

import { ACTIVE_COLOR } from '../../constants';

const toHome = '/';
const toAbout = '/about';
const toResources = '/resources';

const homeLink: any = ({ innerRef, ...props }: any) => <Link {...props} to={toHome} />;

const aboutLink: any = ({ innerRef, ...props }: any) => <Link {...props} to={toAbout} />;

const resourcesLink: any = ({ innerRef, ...props }: any) => <Link {...props} to={toResources} />;

const textMargin: number = 45;
const dividerMargin: number = 16;
const textColor: string = 'white';

const styles = () => createStyles({
    iconColor: {
        color: textColor,
    },
    textColor: {
        color: textColor
    },
    textMargin: {
        marginLeft: textMargin
    },
    divider: {
        marginLeft: dividerMargin + textMargin,
        userSelect: 'none',
        color: textColor,
        borderTop: '2px dashed #8c8b8b'
    },
    text: {
        color: textColor,
        marginLeft: textMargin
    },
    active: {
        backgroundColor: ACTIVE_COLOR + ' !important'
    }
});

const inline: React.CSSProperties = { display: 'inline-block' };
const textStyle: React.CSSProperties = { ...inline, cursor: 'pointer' };
const test: React.CSSProperties = {
    marginLeft: dividerMargin + textMargin,
    userSelect: 'none',
    color: textColor,
    borderTop: '2px dashed #8c8b8b',
    marginTop: 8,
    marginBottom: 8
}

export interface SidebarContentInputProps {
    onClick: () => any;
}

interface SidebarContentState {
    selectedIndex: number;
}

interface SidebarContentProps extends SidebarContentInputProps, WithStyles<typeof styles> {
    setModalOpen: (state: boolean) => any;
    setModalContent: (state: ModalEnum) => any;
}


class SidebarContent extends React.Component<SidebarContentProps, SidebarContentState> {
    constructor(props: SidebarContentProps) {
        super(props);

        this.state = {
            selectedIndex: this.selectedPage()
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <MenuItem>
                    <ListItemText
                        disableTypography={true}
                        primary={
                            <div className={classes.textMargin}>
                                <Typography
                                    className={classes.textColor}
                                    style={textStyle}
                                    onClick={this.setModalContent(ModalEnum.SIGN_UP_SELECTION)}
                                >
                                    Sign up
                                </Typography>
                                {' '}
                                <Typography className={classes.textColor} style={inline}>
                                    or
                                </Typography>
                                {' '}
                                <Typography
                                    className={classes.textColor}
                                    style={textStyle}
                                    onClick={this.setModalContent(ModalEnum.LOGIN)}
                                >
                                    Login
                                </Typography>
                            </div>}
                    />
                </MenuItem>

                <div style={test} />

                <MenuItem
                    onClick={this.itemClicked(1)}
                    button={true}
                    component={homeLink}
                    selected={this.state.selectedIndex === 1}
                    classes={{
                        selected: classes.active
                    }}
                >
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>Home</Typography>}
                    />
                </MenuItem>

                <MenuItem
                    onClick={this.itemClicked(2)}
                    button={true}
                    component={aboutLink}
                    selected={this.state.selectedIndex === 2}
                    classes={{
                        selected: classes.active
                    }}
                >
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>About</Typography>}
                    />
                </MenuItem>
                <MenuItem
                    onClick={this.itemClicked(3)}
                    button={true}
                    component={resourcesLink}
                    selected={this.state.selectedIndex === 3}
                    classes={{
                        selected: classes.active
                    }}
                >
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>Resources</Typography>}
                    />
                </MenuItem>
            </>
        );
    }

    private selectedPage(): number {
        const URL: string = window.location.href.toLowerCase();

        if (URL.includes('about')) {
            return 2;
        } if (URL.includes('resources')) {
            return 3;
        } else {
            return 1;
        }
    }

    private itemClicked = (index: number): () => void => {
        return () => this.itemAction(index);
    }

    private itemAction = (index: number): void => {
        this.setState({
            selectedIndex: index
        });

        this.props.onClick();
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
