import React, {Component} from 'react';
import './App.css';
import "antd/dist/antd.css";

import Demo from './Molecules/Demo';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Demo/>
            </div>
        );
    }
}

export default App;
