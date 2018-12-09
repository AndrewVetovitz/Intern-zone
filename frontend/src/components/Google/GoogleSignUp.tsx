import * as React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import OAuth from '../OAuth/OAuth';

import io from 'socket.io-client';
const socket = io('http://localhost:5000', { transports: ['websocket'] });

const googleImageUrl: string = '/images/google/google-button-24x24.png';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    },
    button: {
        display: 'inline-block',
        background: 'white',
        color: '#444',
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

interface GoogleSignUpProps extends WithStyles<typeof styles> { }

class GoogleSignUp extends React.Component<GoogleSignUpProps> {
    constructor(props: GoogleSignUpProps) {
        super(props);
    }

    componentDidMount() {
        (new Image()).src = googleImageUrl;
    }

    googleResponse = (response: object) => {
        console.log(response);
    }

    render() {
        const { classes } = this.props;

        return (
            <OAuth
                socket={socket}
                provider={'google'}
                name={'Google'}
                classes={classes}
                imgUrl={googleImageUrl}
            />
        );
    }
}

export default withStyles(styles)(GoogleSignUp);
