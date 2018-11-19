import * as React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import GoogleLogin from 'react-google-login';

const githubImageUrl: string = '/images/github-signin-buttons/github-button-24x24.png';

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

interface GithubSignUpProps extends WithStyles<typeof styles> {}

class GithubSignUp extends React.Component<GithubSignUpProps> {
    constructor(props: GithubSignUpProps) {
        super(props);
    }

    componentDidMount() {
        (new Image).src = githubImageUrl;
    }

    render() {
        const { classes } = this.props;

        return (
            <GoogleLogin
                clientId="" // TODO
                className={classes.githubButton}
                style={{width: '100%', cursor: 'pointer'}}
                onSuccess={() => console.log('success')}
                onFailure={() => console.log('failure')}
            >
                <img src={githubImageUrl} className={classes.icon}/>
                <span className={classes.buttonText}>Sign Up with Github</span>
            </GoogleLogin>
        ); 
    }
}

export default withStyles(styles)(GithubSignUp);
