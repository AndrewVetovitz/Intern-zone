import * as React from 'react';
import { Helmet } from 'react-helmet';

import Grid from '@material-ui/core/Grid';

import ListSubheader from '@material-ui/core/ListSubheader';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import resource from './resource.list.json';

import constants from '../../constants';

const title: string = constants.TITLE + ' | Resources';

const styles = createStyles({
    grid: {
        marginBottom: 50
    },
    imgStyles: {
        width: '100%',
        height: '100%'
    }
});

interface ResourceProps extends WithStyles<typeof styles> { }

interface DataInterface {
    readonly category: string;
    readonly data: ResourceTiles[];
}

interface ResourceTiles {
    readonly name: string;
    readonly img_url: string;
    readonly website_url: string;
}

function Resources(props: ResourceProps): JSX.Element {
    const { classes } = props;

    return (
        <React.Fragment>
            <Helmet defer={false}>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="Description" content="Intern-Zone Resource page"></meta>
            </Helmet>

            {
                resource.map((res: DataInterface, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <Grid container={true} spacing={40} className={classes.grid}>
                                <Grid style={{ fontSize: 50 }} item={true} key="Subheader" xs={12} sm={12} md={12} lg={12}>
                                    <ListSubheader component="div" style={{ color: '#888', fontSize: 30 }}>{res.category}</ListSubheader>
                                </Grid>
                                {getImages(res.data, props)}
                            </Grid>
                        </React.Fragment>
                    );
                })
            }
        </React.Fragment>
    );
}

function getImages(tiles: ResourceTiles[], props: ResourceProps): JSX.Element | JSX.Element[] {
    const { classes } = props;

    return tiles.map((tile: ResourceTiles, index: number) => {
        const link: any = ({ innerRef, ...propsSpread }: any) => <a {...propsSpread} target={'_blank'} rel={'noopener noreferrer nofollow'} href={tile.website_url} />;

        return (
            <Grid component={link} item={true} key={index} xs={12} sm={6} md={4} lg={4} style={{ padding: 20 }}>
                <img className={classes.imgStyles} src={tile.img_url} alt={tile.name} title={tile.name} />
            </Grid>
        );
    });
}

export default withStyles(styles)(Resources);
