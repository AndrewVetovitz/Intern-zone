import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import './Tile.css'

const phi = (1 + Math.sqrt(5)) / 2;
const width = 275;
const height = 275 / phi;

const styles = theme => ({
    card: {
        width: width,
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});

function SimpleCard(props) {
    const { classes } = props;

    const url = "/company/" + props.name;

    return (
        <div className="Tile">
            <a href={url}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            { props.name }
                        </Typography>
                    </CardContent>
                </Card>
            </a>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);