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

const returnImg = (img: string | undefined): string | undefined => {
    switch (img) {
        case 'email': {
            return emailImageUrl;
        }
        case 'none': {
            return undefined;
        }
        default: {
            return undefined;
        }
    }
}

interface SignUpProps extends WithStyles<typeof styles> {
    onClick?: () => any;
    text: string;
    img?: 'email' | 'none';
}

class SignUp extends React.Component<SignUpProps> {
    constructor(props: SignUpProps) {
        super(props);
    }

    componentDidMount() {
        const imgURL: string | undefined = returnImg(this.props.img);

        if (typeof imgURL === 'string') {
            (new Image()).src = imgURL;
        }
    }

    renderImg(iconClass: any): JSX.Element {
        if(this.props.img){
            return <img src={emailImageUrl} className={iconClass} />;
        }

        return <></>;
    }

    render() {
        const { classes } = this.props;
        const img: JSX.Element = this.renderImg(classes.icon);

        return (
            <button type={'submit'} onClick={this.props.onClick} className={classes.emailButton} style={{ width: '100%', cursor: 'pointer' }}>
                {img}
                <span className={classes.buttonText}>{this.props.text}</span>
            </button>
        );
    }
}

export default withStyles(styles)(SignUp);
