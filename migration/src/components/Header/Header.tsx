import * as React from 'react';
import './Header.css';

interface State {
    test: string;
}

class Header extends React.Component<{}, State> {
    constructor(props: any){
        super(props);
        this.state = { test: 'HEADER' };
    }

    Headers() {
        return (
            <div className="Header">
                { this.state.test }
            </div>
        );
    }
}

export default Header;
