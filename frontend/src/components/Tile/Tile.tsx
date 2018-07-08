import * as React from 'react';

import Card  from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const ONE = 1, TWO = 2, FIVE = 5;
const phi = (ONE + Math.sqrt(FIVE)) / TWO;
const width = 350;
const height = width / phi;

const styles = createStyles({
    card: {
        width: width,
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        margin: 'auto'
    },
    cardwidth: {
        width: '100%'
    }
});

interface CardProps extends WithStyles<typeof styles> {
    name: string;
}

function handleSearch(name: string) {
    window.location.href = '/company/' + name;
}

function SimpleCard(props: CardProps): JSX.Element {
    const { classes } = props;
    
    if (classes === undefined) {
        return (<div/>);
    }

    return (
        <div className={classes.cardwidth}>
            <Card className={classes.card} onClick={() => handleSearch(props.name)} raised={true}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        {props.name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default withStyles(styles)(SimpleCard);
