import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './Tile';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tile />, div);
    ReactDOM.unmountComponentAtNode(div);
});
