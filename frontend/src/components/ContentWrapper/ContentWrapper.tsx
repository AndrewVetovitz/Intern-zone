import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import constants from '../../constants';

const styles = () => createStyles({});

export interface ContentWrapperInputProps {
    children: JSX.Element;
}

export interface ContentWrapperProps extends RouteComponentProps<void>, WithStyles<typeof styles>  {
    screenSizeIsOpen: boolean;
}

class ContentWrapper extends React.Component<ContentWrapperProps, {}> {
    constructor(props: ContentWrapperProps) {
        super(props);
    }

    render() {
        const left = this.props.screenSizeIsOpen ? constants.DRAWER_WIDTH : 0;
        const top = this.props.screenSizeIsOpen ? 0 : constants.NAVBAR_HEIGHT;
        const width = this.props.screenSizeIsOpen ? 'calc(100% - ' + constants.DRAWER_WIDTH + 'px)' : '100%';
        const translate = 'translate(' + left + 'px, ' + top + 'px)';

        const contentStyle = {
            zIndex: -1,
            padding: '75px',
            margin: 0,
            width: width,
            transform: translate,
            minHeight: 'calc(100vh - 64px)',
            backgroundColor: 'white'
        };

        const contentStyleSmall = {
            zIndex: -1,
            padding: '25px',
            margin: 0,
            width: width,
            transform: translate,
            minHeight: 'calc(100vh - 64px)',
            backgroundColor: 'white'
        };

        const mobile: JSX.Element = (
            <MediaQuery maxWidth={600}>
                <div style={contentStyleSmall}>
                    {this.props.children}
                </div>
            </MediaQuery>
        );

        const other: JSX.Element = (
            <MediaQuery minWidth={600}>
                <div style={contentStyle}>
                    {this.props.children}
                </div>
            </MediaQuery>
        );
        
        return (
            <React.Fragment>
                {mobile}
                {other}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ContentWrapper);
