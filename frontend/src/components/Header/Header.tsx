import * as React from 'react';
import './Header.css';

interface State {
    test: string;
}

class Header extends React.Component<{}, State> {
    constructor(props: object) {
        super(props);
        this.state = { test: 'HEADER' };
    }

    render(): JSX.Element {
        return (
            <div className="Header">
                {this.state.test}
            </div>
        );
    }
}

export default Header;
