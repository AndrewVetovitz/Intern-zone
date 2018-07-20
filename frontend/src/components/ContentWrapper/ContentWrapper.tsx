import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import { SidebarState } from '../../store/sidebar';

import constants from '../component.constants';

const styles = (theme: any) => createStyles({});

export interface ContentWrapperProps extends SidebarState, WithStyles<typeof styles>  {
    children: JSX.Element;
}

class ContentWrapper extends React.Component<ContentWrapperProps, {}> {
    constructor(props: ContentWrapperProps) {
        super(props);
    }

    render() {
        const left = this.props.isOpen ? constants.drawerWidth : 0;

        const transitionOpen = '225ms cubic-bezier(0, 0, 0.2, 1) 0ms';
        const transitionClose = '300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';

        const width = this.props.isOpen ? 'calc(100% - ' + constants.drawerWidth + 'px)' : '100%';
        const translate = 'translate(' + left + 'px, 0)';

        const transition = this.props.isOpen ?
            'transform ' + transitionOpen + ', width ' + transitionOpen :
            'transform ' + transitionClose + ', width ' + transitionClose;

        const contentStyle = {
            padding: 0,
            width: width,
            transform: translate,
            transition: transition,
        };

        return (
            <div style={contentStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(ContentWrapper);
