import React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import OAuth from '../OAuth/OAuth';

import io from 'socket.io-client';
const socket = io('http://localhost:5000', { transports: ['websocket'] });

const facebookImageUrl: string = '/images/facebook/facebook-button-24x24.png';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    },
    button: {
        display: 'inline-block',
        background: '#3e5b94',
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

interface FacebookSignUpProps extends WithStyles<typeof styles> {}

class FacebookSignUp extends React.Component<FacebookSignUpProps, {}> {
    constructor(props: FacebookSignUpProps) {
        super(props);
    }

    componentDidMount() {
        (new Image()).src = facebookImageUrl;
    }

    render() {
        const { classes } = this.props;

        return (
            <OAuth
                socket={socket}
                provider={'facebook'}
                name={'Facebook'}
                classes={classes}
                imgUrl={facebookImageUrl}
            />
        ); 
    }
}

export default withStyles(styles)(FacebookSignUp);
