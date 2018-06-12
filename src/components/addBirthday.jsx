import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { DateInput } from "@blueprintjs/datetime"
let data = require('../data/data.json')

export class AddBirthday extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            projectName: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChnageDate = this.handleChnageDate.bind(this)
        this.handleChangeProjectName = this.handleChangeProjectName.bind(this)
    }
    handleChangeName(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleChnageDate(date) {
        this.setState({
            birthdayDate: date
        })
    }

    handleChangeProjectName(event) {
        this.setState({
            projectName: event.target.value
        })
    }
    render() {
        return <div className="flex w-100 h-100 flex-column">
            <div className="flex flex-column w-50">
                <input type="text" className="pt-input .pt-intent-primary w-30"
                    value={this.state.name}
                    onChange={this.handleChangeName}
                    placeholder="Name" />
                <input type="text" className="pt-input .pt-intent-primary w-30"
                    value={this.state.projectName}
                    onChange={this.handleChangeProjectName}
                    placeholder="Project Name" />
                <DateInput
                    formatDate={date => date.toLocaleDateString()}
                    parseDate={str => new Date(str)}
                    placeholder={"M/D/YYYY"}
                    onChange={this.handleChnageDate}
                    value={this.state.birthdayDate}
                    closeOnSelection={true}
                    className=" w-30"
                />
                <button type="button" className="pt-button pt-active w-20">Submit</button>
            </div>
        </div>
    }
}