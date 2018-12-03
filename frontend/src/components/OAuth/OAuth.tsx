import * as React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const githubImageUrl: string = '/images/github/github-button-24x24.png';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    },
    githubButton: {
        display: 'inline-block',
        background: 'black',
        color: 'white',
        height: 60,
        borderRadius: 5,
        border: 'thin solid #888',
        boxShadow: '1px 1px 1px grey',
        whiteSpace: 'nowrap',
        '&:focus': {
            outline: 'none'
        }
    },
    icon: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 24,
        height: 24,
        marginRight: 20
    },
    buttonText: {
        display: 'inline-block',
        verticalAlign: 'middle',
        fontSize: 14,
        fontWeight: 'bold',
        /* Use the Roboto font that is loaded in the <head> */
        fontFamily: '\'Roboto\', sans-serif'
    }
});

interface OAuthProps extends WithStyles<typeof styles> {
    socket: SocketIOClient.Socket;
    provider: any;
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

    popup: any;

    constructor(props: OAuthProps) {
        super(props);
    }

    componentDidMount() {
        const { socket, provider } = this.props;

        socket.on(provider, (user: any) => {
            this.popup.close();
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
        const { socket } = this.props;
        const width = 600, height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const url = `/api/authenticate/github?socketId=${socket.id}`;

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
        const { classes } = this.props;

        return (
            <button onClick={this.startAuth} className={classes.githubButton} style={{ width: '100%', cursor: 'pointer' }}>
                <img src={githubImageUrl} className={classes.icon} />
                <span className={classes.buttonText}>Sign Up with Github</span>
            </button>
        );
    }
}


export default withStyles(styles)(OAuth);