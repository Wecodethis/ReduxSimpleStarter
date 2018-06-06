import React from 'react'
import ReactDom from 'react-dom';
'hello jp'
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBzBtAXZ_eZRCF3FXS-rR5XdApmFnqs9w8';

// create a new component. This component should produce some HTML
const App = () => {
    return ( 
        <div>
        <SearchBar / >
        </div>

    )
}

ReactDOM.render( < App / > , document.querySelector('.container'));