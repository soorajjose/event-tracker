import React from 'react';
import { render } from 'react-dom';
import { Dashboard } from './components'
import  './styles'
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css"

export class App extends React.Component {
    render() {
        return <Dashboard />
    }
}

render(<App />, document.getElementById('root'));