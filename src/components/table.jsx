import React from 'react'


export class Table extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <table className="pt-html-table pt-interactive">
                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Name</th>
                        <th>Project</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Blueprint</td>
                        <td>CSS framework and UI toolkit</td>
                        <td>Sass, TypeScript, React</td>
                    </tr>
                    <tr>
                        <td>TSLint</td>
                        <td>Static analysis linter for TypeScript</td>
                        <td>TypeScript</td>
                    </tr>
                    <tr>
                        <td>Plottable</td>
                        <td>Composable charting library built on top of D3</td>
                        <td>SVG, TypeScript, D3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}