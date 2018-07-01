import * as React from 'react';
// import { Link } from 'react-router-dom';

import './Navbar.css';

interface NavbarProps {

}

class Navbar extends React.Component<NavbarProps, {}> {
    constructor(props: NavbarProps) {
        super(props);
    }

    render() {
        return (
            <div className="Navbar">
                Test
            </div>
        );
    }
}
   
export default Navbar;
