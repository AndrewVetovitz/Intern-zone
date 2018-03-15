import * as React from 'react';

import Tile from '../Tile/Tile';
import './TileGrid.css';

export interface TileGridProps {
    companyNames?: string[];
    getAllCompanyNames?: () => any;
}

class TileGrid extends React.Component<TileGridProps, {}> {
    constructor(props: TileGridProps) {
        super(props);
    }

    componentWillMount(): void {
        if (this.props.companyNames && this.props.companyNames.length === 0) {
            this.props.getAllCompanyNames && this.props.getAllCompanyNames();
        }
      }

    getTiles(): JSX.Element | JSX.Element[] {
        const { companyNames } = this.props;
        const name: string = 'name';

        if (companyNames) {
            return companyNames.map((value: string, index: number) => {
                return (
                    <div className="Tile" key={index}>
                        <Tile name={value[name]} />
                    </div>
                );
            });
        }

        return <div/>;
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
