import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from '../../containers/RouterContainer';

export default function App(): JSX.Element {
    return (
        <React.Fragment>
            <CssBaseline />
            <Routes/>
        </React.Fragment>
    );
}
