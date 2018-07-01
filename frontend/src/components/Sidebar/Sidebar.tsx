import * as React from 'react';
// import { Link } from 'react-router-dom';

import './Sidebar.css';

interface SidebarProps {

}

class Sidebar extends React.Component<SidebarProps, {}> {
    constructor(props: SidebarProps) {
        super(props);
    }

    render() {
        return (
            <div className="Sidebar">
                Test
            </div>
        );
    }
}
   
export default Sidebar;
