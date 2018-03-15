import * as React from 'react';

import Reboot from 'material-ui/Reboot';

import Routes from '../Routes/Routes';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
          <Reboot/>
          <Routes/>
      </div>
    );
  }
}

export default App;
