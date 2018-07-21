import * as React from 'react';

import Tile from '../Tile/Tile';
import './TileGrid.css';

export interface TileGridProps {
    getAllCompanyNames: () => any;
    companyInfo: {
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

    UNSAFE_componentWillMount(): void {
        if (this.props.companyInfo.companyNames.length === 0) {
            this.props.getAllCompanyNames && this.props.getAllCompanyNames();
        }
    }

    getTiles(): JSX.Element | JSX.Element[] {
        const { companyInfo } = this.props;

        if (companyInfo.companyNames.length > 0) {
            return companyInfo.companyNames.map((value: string, index: number) => {
                return (
                    <div className="Tile" key={index}>
                        <Tile name={value} />
                    </div>
                );
            });
        }

        return <React.Fragment/>;
    }

    render(): JSX.Element {
        const tiles = this.getTiles();

        return (
            <div className="Tile-Grid">
                {tiles}
            </div>
        );
    }
}

export default TileGrid;
