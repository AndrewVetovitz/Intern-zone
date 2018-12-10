import * as React from 'react';

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

interface State {
    user: {
        name?: any;
        photo?: any;
    };
    disabled: any;
}

class OAuth extends React.Component<OAuthProps, State> {
    state: State = {
        user: {},
        disabled: ''
    };

    private popup: any;

    constructor(props: OAuthProps) {
        super(props);
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
                this.setState({ disabled: '' });
            }
        }, 1000);
    }

    openPopup() {
        const { provider, socket } = this.props;
        const width = 600, height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const url = `http://localhost:5000/api/authenticate/${provider}?socketId=${socket.id}`;

        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
            scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
            height=${height}, top=${top}, left=${left}`
        );
    }

    startAuth = () => {
        if (!this.state.disabled) {
            this.popup = this.openPopup();
            this.checkPopup();
            this.setState({ disabled: 'disabled' });
        }
    }

    closeCard = () => {
        this.setState({ user: {} });
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