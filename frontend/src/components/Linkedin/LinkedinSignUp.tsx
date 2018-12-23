import React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import OAuth from '../OAuth/OAuth';

import io from 'socket.io-client';
const socket = io('http://localhost:5000', { transports: ['websocket'] });

const linkedlnImageUrl: string = '/images/linkdln/linkedln-button-24x24.png';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    },
    button: {
        display: 'inline-block',
        background: '#0077b5',
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

interface LinkedlnSignUpProps extends WithStyles<typeof styles> {}

class LinkedlnSignUp extends React.Component<LinkedlnSignUpProps> {
    constructor(props: LinkedlnSignUpProps) {
        super(props);
    }

    componentDidMount() {
        (new Image()).src = linkedlnImageUrl;
    }

    render() {
        const { classes } = this.props;

        return (
            <OAuth
                socket={socket}
                provider={'linkedin'}
                name={'Linkedin'}
                classes={classes}
                imgUrl={linkedlnImageUrl}
            />
        ); 
    }
}

export default withStyles(styles)(LinkedlnSignUp);
