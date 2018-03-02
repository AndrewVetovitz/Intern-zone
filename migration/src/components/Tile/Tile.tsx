import * as React from 'react';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import './Tile.css';

const ONE = 1, TWO = 2, FIVE = 5;

const phi = (ONE + Math.sqrt(FIVE)) / TWO;
const width = 300;
const height = width / phi;

export interface Props {
    classes: any;
    name: string
}

const styles = () => ({
    card: {
        width: width,
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        margin: 'auto'
    },
    test: {
        width: '100%'
    }
});

function handleSearch(name: string) {
    window.location = '/company/'+ name;
}

function SimpleCard(props: Props) {
    const { classes } = props;

    return (
        <div className={ classes.test }>
            <Card className={classes.card} onClick={ () => handleSearch(props.name) } raised>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        { props.name }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default withStyles(styles)(SimpleCard);