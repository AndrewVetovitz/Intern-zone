import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import './tile.css'

const styles = theme => ({
    card: {
        maxWidth: 275,
        minWidth: 275,
        minHeight: 150,
        margin: 50,
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