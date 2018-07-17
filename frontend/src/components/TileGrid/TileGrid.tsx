import * as React from 'react';

import Tile from '../Tile/Tile';
import './TileGrid.css';

import { CompanyState } from '../../store/company';
import { CompanyDispatchProps } from '../../containers/TileGridContainer';

export interface TileGridProps extends CompanyState, CompanyDispatchProps {}

class TileGrid extends React.Component<TileGridProps, {}> {
    constructor(props: TileGridProps) {
        super(props);
    }

    UNSAFE_componentWillMount(): void {
        if (this.props.company && this.props.company.companyNames && this.props.company.companyNames.length === 0) {
            this.props.getAllCompanyNames && this.props.getAllCompanyNames();
        }
    }

    getTiles(): JSX.Element | JSX.Element[] {
        const { company } = this.props;

        if (company.companyNames && company.companyNames.length > 0) {
            return company.companyNames.map((value: string, index: number) => {
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
