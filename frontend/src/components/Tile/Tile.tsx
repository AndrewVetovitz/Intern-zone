import * as React from 'react';

import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import Card  from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import constants from '../../constants';

const ONE = 1, TWO = 2, FIVE = 5;
const phi = (ONE + Math.sqrt(FIVE)) / TWO;
const width = 325;
const height = width / phi;

const styles = createStyles({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1
    },
    sm_text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 85
    },
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: height
    }
});

interface CardProps extends WithStyles<typeof styles> {
    name: string;
}

function SimpleCard(props: CardProps): JSX.Element {
    const { classes } = props;

    const mobileBreakWidth = constants.MOBILE_SCREEN_WIDTH;
    
    if (classes === undefined) {
        return (<div/>);
    }

    const to = '/company/' + props.name;
    const link: any = ({innerRef, ...propsSpread}: any) => <Link {...propsSpread} to={to} />;

    const mobile = (
        <MediaQuery maxWidth={mobileBreakWidth}>
            <div className={classes.sm_text}>
                {props.name}
            </div>
        </MediaQuery>
    );

    const other = (
        <MediaQuery minWidth={mobileBreakWidth}>
            <div className={classes.text}>
                {props.name}
            </div>
        </MediaQuery>
    );

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <ButtonBase component={link} >
                    <CardContent className={classes.cardContent}>
                        <Typography align={'center'} gutterBottom={true} variant="headline" component="h2">
                            {mobile}
                            {other}
                        </Typography>
                    </CardContent>
                </ButtonBase>
            </Card>
        </React.Fragment>
    );
}

export default withStyles(styles)(SimpleCard);
