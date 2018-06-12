import React from 'react'
import {AddBirthday , Table} from './../components'

let data = require('../data/data.json')

export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <AddBirthday />
            <Table/>
            {data.map((item, key) => {
                console.log(item.square, key)
            })
            }
        </div>
    }
}