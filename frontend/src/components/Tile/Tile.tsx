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
        cursor: 'pointer',
        margin: 'auto'
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

function handleSearch(name: string) {
    window.location.href = '/company/' + name;
}

function SimpleCard(props: CardProps): JSX.Element {
    const { classes } = props;
    
    if (classes === undefined) {
        return (<div/>);
    }

    return (
        <React.Fragment>
            <Card className={classes.card} onClick={() => handleSearch(props.name)} raised={true}>
                <CardContent>
                    <Typography style={{height: height, width: width}} variant="headline" component="h2">
                        <div className={classes.text}>
                            {props.name}
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}

export default withStyles(styles)(SimpleCard);
