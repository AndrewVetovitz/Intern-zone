import * as React from 'react';

import CssBaseline from 'material-ui/CssBaseline';

import Routes from '../Routes/Routes';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
          <CssBaseline />
          <Routes/>
      </div>
    );
  }
}

export default App;
