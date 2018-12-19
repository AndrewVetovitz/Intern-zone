import * as React from 'react';

import Grid from '@material-ui/core/Grid';

import { RouteComponentProps } from 'react-router-dom';

import Tile from '../Tile/Tile';

export interface TileGridInputProps {
    filter: string;
}

export interface TileGridProps extends TileGridInputProps, RouteComponentProps<void> {
    getAllCompanyNames: () => any;
    companies: {
        companyNames: string[];
        fetching?: boolean;
        fetched?: boolean;
        error?: any;
    };
}

class TileGrid extends React.Component<TileGridProps, {}> {
    constructor(props: TileGridProps) {
        super(props);
    }

    componentDidMount(): void {
        if (this.props.companies.companyNames.length === 0) {
            this.props.getAllCompanyNames && this.props.getAllCompanyNames();
        }
    }

    getTiles(): JSX.Element | JSX.Element[] {
        const { companies } = this.props;
 
        if (companies.companyNames.length > 0) {
            return companies.companyNames
                .filter(name => name.toLowerCase().includes(this.props.filter.toLowerCase()))
                .map((value: string, index: number) => {
                    return (
                        <Grid item={true} key={index} xs={12} sm={6} md={4} lg={3} style={{paddingBottom: 10, paddingTop: 10}}>
                            <Tile name={value} />
                        </Grid>
                    );
            });
        }

        return <React.Fragment/>;
    }

    render(): JSX.Element {
        const tiles = this.getTiles();

        return (
            <Grid container={true} spacing={40}>
                {tiles}
            </Grid>
        );
    }
}

export default TileGrid;
