import * as React from 'react';

import Tile from '../Tile/Tile';
import './TileGrid.css';

// import { Company } from '../../store/company';
import { CompanyStateProps } from '../../store/company';
import { CompanyDispatchProps } from '../../containers/TileGridContainer';

export interface TileGridProps extends CompanyStateProps, CompanyDispatchProps {}

class TileGrid extends React.Component<TileGridProps, {}> {
    constructor(props: TileGridProps) {
        super(props);
    }

    UNSAFE_componentWillMount(): void {
        if (this.props.companyNames && this.props.companyNames.companyNames.length === 0) {
            this.props.getAllCompanyNames && this.props.getAllCompanyNames();
        }
      }

    getTiles(): JSX.Element | JSX.Element[] {
        const { companyNames } = this.props;

        if (companyNames && companyNames.companyNames && companyNames.companyNames.length > 0) {
            return companyNames.companyNames.map((value: string, index: number) => {
                return (
                    <div className="Tile" key={index}>
                        <Tile name={value} />
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
