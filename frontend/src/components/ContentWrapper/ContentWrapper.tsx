import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

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
        const width = this.props.screenSizeIsOpen ? 'calc(100% - ' + constants.DRAWER_WIDTH + 'px)' : '100%';
        const translate = 'translate(' + left + 'px, 0)';

        const contentStyle = {
            zIndex: -1,
            padding: 0,
            width: width,
            transform: translate,
        };

        return (
            <div style={contentStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(ContentWrapper);
