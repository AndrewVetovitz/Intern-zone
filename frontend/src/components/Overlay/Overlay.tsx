import * as React from 'react';
// import { Link } from 'react-router-dom';

import './Overlay.css';

interface NavbarProps {
    openRef: any;
}

interface NavbarState {
    style: any;
}

class Overlay extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = {
            style: {
                height: 0
            }
        };

        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.props.openRef(this.openNav.bind(this));
    }

    componentDidMount(): void {
        document.addEventListener('click', this.closeNav);
    }

    componentWillUnmount(): void {
        document.removeEventListener('click', this.closeNav);
    }

    openNav(): void {
        const style = {height: '100vw'};
        this.setState({style});
        document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
        document.addEventListener('click', this.closeNav);
    }

    closeNav(): void {
        document.removeEventListener('click', this.closeNav);
        const style = {height: 0};
        this.setState({style});
        document.body.style.backgroundColor = '#F3F3F3';
    }

    render(): JSX.Element {
        return (
          <div>
            <span style={{fontSize: 30, cursor: 'pointer'}} onClick={this.openNav}>&#9776; open</span>
            <div
                className="overlay"
                style={this.state.style}
            >
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                <div className="overlay-content">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>
          </div>
        );
    }
}

export default Overlay;

// function createListItem(key: number, header: object, classes: any) {
//     const link: string = 'link';
//     const icon: string = 'icon';
//     const text: string = 'text';

//     return (
//         <ListItem button={true} component={props => <Link to={header[link]} {...props} />} key={key}>
//             <ListItemIcon>
//                 <i className="material-icons icon-white">{header[icon]}</i>
//             </ListItemIcon>
//             <ListItemText primary={listItemStyle(header, text)} />
//         </ListItem>
//     );
// }

// function listItemStyle(header: object, text: string): JSX.Element {
//     return <div className="ListItemText">{header[text]}</div>;
// }


// const headers = [{text: 'Home', link: '/', icon: 'home'},
// {text: 'About', link: '/about', icon: 'description'},
// {text: 'Resources', link: '/resources', icon: 'import_contacts'}];

// const content = [];
//     for (let i = 0; i < headers.length; i++) {
//         content.push(createListItem(i, headers[i], classes));
//     }

