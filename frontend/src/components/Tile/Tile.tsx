import * as React from 'react';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const ONE = 1, TWO = 2, FIVE = 5;
const phi = (ONE + Math.sqrt(FIVE)) / TWO;
const width = 350;
const height = width / phi;

interface Props {
    classes?: {
        cardwidth: string;
        card: string;
    };
    name: string;
}

const styles: object = () => ({
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

function handleSearch(name: string) {
    window.location.href = '/company/' + name;
}

function SimpleCard(props: Props): JSX.Element {
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
