import React from 'react';

import { AutoSizer, WindowScroller, List } from 'react-virtualized';
import 'react-virtualized/styles.css';

import { RouteComponentProps } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Card from '../Card/Card';

import { CARD_WIDTH, CARD_HEIGHT } from '../../constants';

export interface TileGridInputProps {
    filter: string;
}

export interface TileGridProps extends TileGridInputProps, RouteComponentProps<void>, WithStyles<typeof styles> {
    getAllCompanyNames: () => any;
    companies: {
        companyNames: string[];
        fetching?: boolean;
        fetched?: boolean;
        error?: any;
    };
}

const styles = () => createStyles({
    row: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: 10,
        paddingTop: 10
    }
});

class TileGrid extends React.Component<TileGridProps> {
    constructor(props: TileGridProps) {
        super(props);
    }

    componentDidMount(): void {
        if (this.props.companies.companyNames.length === 0) {
            this.props.getAllCompanyNames && this.props.getAllCompanyNames();
        }
    }

    render(): JSX.Element {
        const { companies, classes } = this.props;

        return (
            <WindowScroller>
                {({ height, isScrolling, onChildScroll, scrollTop }) => (
                    <AutoSizer disableHeight={true}>
                        {({ width }) => {
                            const itemsPerRow = Math.floor(width / CARD_WIDTH) || 1;
                            const rowCount = Math.ceil(companies.companyNames.length / itemsPerRow);

                            return (
                                <List
                                    autoHeight={true}
                                    width={width}
                                    height={height}
                                    rowCount={rowCount}
                                    rowHeight={CARD_HEIGHT + 20}
                                    scrollTop={scrollTop}
                                    isScrolling={isScrolling}
                                    onScroll={onChildScroll}
                                    overscanRowCount={2}
                                    rowRenderer={({ index, key, style }) => {
                                        const items = [];
                                        const fromIndex = index * itemsPerRow;
                                        const toIndex = Math.min(fromIndex + itemsPerRow, companies.companyNames.length);
                                
                                        for (let i = fromIndex; i < toIndex; i++) {
                                            items.push(
                                                <Card key={i} name={companies.companyNames[i]} />
                                            );
                                        }
                                
                                        return (
                                            <div className={classes.row} key={key} style={style}>
                                                {items}
                                            </div>
                                        );
                                    }}
                                />
                            );
                        }}
                    </AutoSizer>
                )}
            </WindowScroller>
        );
    }
}

export default withStyles(styles)(TileGrid);
