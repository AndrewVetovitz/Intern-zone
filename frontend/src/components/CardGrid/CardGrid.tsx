import React from 'react';

import { AutoSizer, WindowScroller, List } from 'react-virtualized';
import 'react-virtualized/styles.css';

import { RouteComponentProps } from 'react-router-dom';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Card from '../Card/Card';

import { CARD_WIDTH, CARD_HEIGHT, MOBILE_CARD_HEIGHT, MOBILE_SCREEN_WIDTH } from '../../constants';

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

const sidePadding: number = 20;
const verticalPadding: number = 10;

const styles = () => createStyles({
    row: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: verticalPadding,
        paddingTop: verticalPadding
    },
    cardMargin: {
        paddingLeft: sidePadding,
        paddingRight: sidePadding
    },
    cardLeft: {
        paddingRight: sidePadding
    },
    cardRight: {
        paddingLeft: sidePadding,
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
        const { companies, classes, filter } = this.props;

        let companyNames: string[] = [];

        if (companies.companyNames) {
            companyNames = companies.companyNames
                .filter(name => name.toLowerCase().includes(filter.toLowerCase()));
        }

        return (
            <WindowScroller>
                {({ height, isScrolling, onChildScroll, scrollTop }) => (
                    <AutoSizer disableHeight={true}>
                        {({ width }) => {
                            let itemsPerRow = 1;
                            let curr = CARD_WIDTH;

                            while (curr < width) {
                                itemsPerRow++;
                                curr = CARD_WIDTH * itemsPerRow + 40 * (itemsPerRow - 1);
                            }

                            itemsPerRow--;
                            itemsPerRow = itemsPerRow || 1;

                            const rowCount = Math.ceil(companyNames.length / itemsPerRow);
                            const cardHeight: number = (window.innerWidth <= MOBILE_SCREEN_WIDTH) ? MOBILE_CARD_HEIGHT : CARD_HEIGHT;

                            return (
                                <List
                                    style={{ outline: 'none' }}
                                    autoHeight={true}
                                    width={width}
                                    height={height}
                                    rowCount={rowCount}
                                    rowHeight={cardHeight + 20}
                                    scrollTop={scrollTop}
                                    isScrolling={isScrolling}
                                    onScroll={onChildScroll}
                                    overscanRowCount={3}
                                    rowRenderer={({ index, key, style }) => {
                                        const items = [];
                                        const fromIndex = index * itemsPerRow;
                                        const toIndex = Math.min(fromIndex + itemsPerRow, companyNames.length);

                                        for (let i = fromIndex; i < toIndex; i++) {
                                            if (i == fromIndex && i !== toIndex - 1) {
                                                items.push(
                                                    <div className={classes.cardLeft} key={i}>
                                                        <Card name={companyNames[i]} />
                                                    </div>
                                                );
                                            } else if (i == toIndex - 1 && i !== fromIndex) {
                                                items.push(
                                                    <div className={classes.cardRight} key={i}>
                                                        <Card name={companyNames[i]} />
                                                    </div>
                                                );
                                            } else {
                                                items.push(
                                                    <div className={classes.cardMargin} key={i}>
                                                        <Card name={companyNames[i]} />
                                                    </div>
                                                );
                                            }
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
                )
                }
            </WindowScroller>
        );
    }
}

export default withStyles(styles)(TileGrid);
