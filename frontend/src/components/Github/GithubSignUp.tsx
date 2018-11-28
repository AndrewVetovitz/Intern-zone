import * as React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

// import GithubApi from '../../api/githubAPI';

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

interface GithubSignUpProps extends WithStyles<typeof styles> { }

class GithubSignUp extends React.Component<GithubSignUpProps> {
    constructor(props: GithubSignUpProps) {
        super(props);
    }

    componentDidMount() {
        (new Image()).src = githubImageUrl;
    }

    render() {
        const { classes } = this.props;

        return (
            <button onClick={this.githubLogin} className={classes.githubButton} style={{ width: '100%', cursor: 'pointer' }}>
                <img src={githubImageUrl} className={classes.icon} />
                <span className={classes.buttonText}>Sign Up with Github</span>
            </button>
        );
    }

    private githubLogin = () => {
        const width: number = 700;
        const height: number = 700;
        // Need window.screenX for dual monitors. Will add first screen to left if on second screen
        const left: number = (screen.width / 2) - (width / 2) + window.screenX;
        const top: number = (screen.height / 2) - (height / 2);
        const url: string = 'https://github.com/login/oauth/authorize?client_id=9c5ade6df05ee7847376';
        const title: string = 'Github Login';
        
        const specs: string = 'width=700,height=700,top=' + top + ',left=' + left;

        window.open(url, title, specs);
    }
}

export default withStyles(styles)(GithubSignUp);
