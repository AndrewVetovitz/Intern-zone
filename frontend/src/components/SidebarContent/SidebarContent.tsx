import * as React from 'react';

import { Link } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { ModalEnum } from '../Modal';

const toHome = '/';
const toAbout = '/about';
const toResources = '/resources';

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
            <React.Fragment>
                <ListItem> 
                    <ListItemText
                        disableTypography={true}
                        primary={
                            <div className={classes.textMargin}>
                                <Typography 
                                    className={classes.textColor} 
                                    style={{display: 'inline-block', cursor: 'pointer'}} 
                                    onClick={() => this.modalClicked(ModalEnum.SIGN_UP_SELECTION)}
                                >
                                    Sign up
                                </Typography>
                                {' '}
                                <Typography className={classes.textColor} style={{display: 'inline-block'}}>
                                    or
                                </Typography>
                                {' '}
                                <Typography 
                                    className={classes.textColor} 
                                    style={{display: 'inline-block', cursor: 'pointer'}} 
                                    onClick={() => this.modalClicked(ModalEnum.LOGIN)}
                                >
                                    Login
                                </Typography>    
                            </div>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toHome} />}> 
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>Home</Typography>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toAbout} />}> 
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>About</Typography>}
                    />
                </ListItem>
                <ListItem onClick={this.props.onClick} button={true} component={({innerRef, ...props}) => <Link {...props} to={toResources} />}>
                    <ListItemText
                        disableTypography={true}
                        primary={<Typography className={classes.text}>Resources</Typography>}
                    />
                </ListItem>
            </React.Fragment>
        );
    }

    private modalClicked = (content: ModalEnum) => {
        this.props.onClick();
        this.props.setModalContent(content);
        this.props.setModalOpen(true);
    }
}

export default withStyles(styles)(SidebarContent);
