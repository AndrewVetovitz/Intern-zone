import React from 'react';

// import Grid from '@material-ui/core/Grid';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';

import { RouteComponentProps } from 'react-router-dom';

// import Tile from '../Tile/Tile';

import { CARD_WIDTH, CARD_HEIGHT } from '../../constants';

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

class TileGrid extends React.Component<TileGridProps> {
    constructor(props: TileGridProps) {
        super(props);
    }

    componentDidMount(): void {
        if (this.props.companies.companyNames.length === 0) {
            this.props.getAllCompanyNames && this.props.getAllCompanyNames();
        }
    }

    getTile(props: ListRowProps): JSX.Element | JSX.Element[] {
        // const { companies } = this.props;

        // if (companies.companyNames.length > 0 &&
        //     props.index < companies.companyNames.length &&
        //     companies.companyNames[props.index].toLowerCase().includes(this.props.filter.toLowerCase())) {
        //     const value: string = companies.companyNames[props.index];

        //     return (
        //         <div
        //             key={props.key}
        //             style={props.style}
        //         >
        //             <Tile name={value} />
        //         </div>
        //     );
        // }

        return <div style={{...props.style, backgroundColor: 'red' }}>t</div>;
    }

    render(): JSX.Element {
        // const { companies } = this.props;

        const ITEMS_COUNT = 900

        return (
            <WindowScroller>
                {({ height, isScrolling, onChildScroll, scrollTop }) => (
                    <List
                        autoHeight
                        height={height}
                        isScrolling={isScrolling}
                        onScroll={onChildScroll}
                        rowCount={ITEMS_COUNT}
                        rowHeight={CARD_HEIGHT}
                        rowRenderer={this.getTile}
                        scrollTop={scrollTop}
                        width={CARD_WIDTH}
                    />
                )}
            </WindowScroller>
        );
    }
}

export default TileGrid;
