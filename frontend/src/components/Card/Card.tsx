import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import { MOBILE_SCREEN_WIDTH, CARD_HEIGHT, MOBILE_CARD_HEIGHT, CARD_WIDTH } from '../../constants';

const styles = createStyles({
    card: {
        width: CARD_WIDTH,
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
        height: MOBILE_CARD_HEIGHT
    },
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: CARD_HEIGHT
    }
});

interface CardProps extends WithStyles<typeof styles> {
    name: string;
}

function SimpleCard(props: CardProps): JSX.Element {
    const { classes } = props;

    const to = '/company/' + props.name;
    const link: any = ({ innerRef, ...propsSpread }: any) => <Link {...propsSpread} to={to} />;

    const mobile = (
        <MediaQuery maxWidth={MOBILE_SCREEN_WIDTH}>
            <div className={classes.sm_text}>
                {props.name}
            </div>
        </MediaQuery>
    );

    const other = (
        <MediaQuery minWidth={MOBILE_SCREEN_WIDTH}>
            <div className={classes.text}>
                {props.name}
            </div>
        </MediaQuery>
    );

    return (
        <>
            <Card className={classes.card}>
                <ButtonBase component={link} >
                    <CardContent className={classes.cardContent}>
                        <Typography align={'center'} variant="h5" component="h2">
                            {mobile}
                            {other}
                        </Typography>
                    </CardContent>
                </ButtonBase>
            </Card>
        </>
    );
}

export default withStyles(styles)(SimpleCard);
