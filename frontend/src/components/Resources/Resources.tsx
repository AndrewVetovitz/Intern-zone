import * as React from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import resource from './resource.list.json';

const styles = createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    subheader: {
        width: '100%',
    }
});

interface ResourceProps extends WithStyles<typeof styles> {}

function Resources(props: ResourceProps): JSX.Element {
    const { classes } = props;

    return (
        <React.Fragment>
            {
                resource.map((res: DataInterface, index: number) => {
                    return (
                        <GridList key={index} cellHeight={800} className={classes.gridList} cols={2}>
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                <ListSubheader component="div">{res.category}</ListSubheader>
                            </GridListTile>
                            {getImages(res.data)}
                        </GridList>
                    );
                })
            }
        </React.Fragment>
    );
}

interface DataInterface {
    readonly category: string;
    readonly data: ResourceTiles[];
}

interface ResourceTiles {
    readonly name: string;
    readonly img_url: string;
    readonly url: string;
}

function getImages(tiles: ResourceTiles[]): JSX.Element | JSX.Element[] {
        return tiles.map((tile: ResourceTiles, index: number) => {
            return (
                <GridListTile key={index} cols={1}>
                    <img style={{maxHeight: '100%', maxWidth: '100%'}} src={tile.img_url} alt={tile.name} />
                </GridListTile>
            );
        });
}

export default withStyles(styles)(Resources);
