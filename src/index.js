import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './robots';

// // Create a root.
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Initial render: Render the <Hello /> component to our root.
// root.render(<Hello />);

//doing it on one line
ReactDOM.createRoot(document.getElementById('root')).render(
    <CardList robots={robots}/>
   
);

reportWebVitals();
