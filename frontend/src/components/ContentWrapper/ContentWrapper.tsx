import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import { SidebarState } from '../../store/sidebar';

import constants from '../../constants';

const styles = (theme: any) => createStyles({});

export interface ContentWrapperProps extends SidebarState, WithStyles<typeof styles>  {
    children: JSX.Element;
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
