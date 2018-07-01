import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from '../Routes/Routes';

export default function App(): JSX.Element {
    return (
        <div>
            <CssBaseline />
            <Routes/>
        </div>
    );
}
