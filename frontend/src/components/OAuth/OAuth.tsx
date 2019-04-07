import React from 'react';

import { SERVER_URL } from '../../constants';

interface OAuthProps {
    socket: SocketIOClient.Socket;
    provider: string;
    name: string;
    classes: {
        margin: any;
        button: any;
        icon: any;
        buttonText: any;
    };
    imgUrl: string;
}

interface OAuthState {
    user: {
        name?: any;
        photo?: any;
    };
    disabled: any;
}

class OAuth extends React.Component<OAuthProps, OAuthState> {
    private popup: any;

    constructor(props: OAuthProps) {
        super(props);

        this.state = {
            user: {},
            disabled: false
        };
    }

    componentDidMount() {
        const { socket, provider } = this.props;

        socket.on(provider, (user: any) => {
            this.popup.close();
            console.log(user);
            this.setState({ user });
        });
    }

    checkPopup() {
        const check = setInterval(() => {
            const { popup } = this;
            if (!popup || popup.closed || popup.closed === undefined) {
                clearInterval(check);
                this.setState({ disabled: false });
            }
        }, 1000);
    }

    openPopup() {
        const { provider, socket } = this.props;
        const url = `${SERVER_URL}/api/authenticate/${provider}?socketId=${socket.id}`;

        return window.open(url);
    }

    startAuth = () => {
        if (!this.state.disabled) {
            this.popup = this.openPopup();
            this.checkPopup();
            this.setState({ disabled: true });
        }
    }

    render() {
        const { classes, name, imgUrl } = this.props;

        return (
            <button onClick={this.startAuth} className={classes.button} style={{ width: '100%', cursor: 'pointer' }}>
                <img src={imgUrl} className={classes.icon} />
                <span className={classes.buttonText}>Sign Up with {name}</span>
            </button>
        );
    }
}


export default OAuth;