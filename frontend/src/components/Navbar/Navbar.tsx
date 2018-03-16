import * as React from 'react';
// import { Link } from 'react-router-dom';

import './Navbar.css';

import Overlay from '../Overlay/Overlay';

interface NavbarProps {

}

class Navbar extends React.Component<NavbarProps, {}> {
    constructor(props: NavbarProps) {
        super(props);
    }

    render() {
        let toggleOverlay: Function;

        return (
            <div className="Navbar">
                <button type="button" onClick={() => toggleOverlay()}>Do Stuff</button>
                <Overlay
                    openRef={(click: Function) => toggleOverlay = click}
                />
            </div>
        );
    }
}
   
export default Navbar;
