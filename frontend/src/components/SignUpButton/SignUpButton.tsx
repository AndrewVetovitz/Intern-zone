import React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const emailImageUrl: string = '/images/email/email-button-38x24.png';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    },
    emailButton: {
        display: 'inline-block',
        background: '#67dfcd',
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
        width: 38,
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

interface SignUpProps extends WithStyles<typeof styles> {
    onClick: () => any;
}

class SignUp extends React.Component<SignUpProps> {
    constructor(props: SignUpProps) {
        super(props);
    }

    componentDidMount() {
        (new Image()).src = emailImageUrl;
    }

    render() {
        const { classes } = this.props;

        return (
            <button onClick={this.props.onClick} className={classes.emailButton} style={{ width: '100%', cursor: 'pointer' }}>
                <img src={emailImageUrl} className={classes.icon} />
                <span className={classes.buttonText}>Sign Up with Email</span>
            </button>
        );
    }
}

export default withStyles(styles)(SignUp);
