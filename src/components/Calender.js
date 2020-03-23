import React from 'react'

import moment from "moment"

export default class Calender extends React.Component {

    state = {
        dateObject: moment()
    }
    weekdayShort = moment.weekdaysShort()

    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject
        let firstDay = moment(dateObject).startOf('month').format('d')
        return firstDay
    }

    daysInMonth = () => {
        let dayObject = this.state.dateObject.daysInMonth()
        return dayObject
    }

    
    render(){
        let weekday = this.weekdayShort.map(day => {
            return(
                <th key={day} className="weekday">
                    {day}
                </th>
    
            )
        })

        let blankDays = []
        for( let i = 0; i < this.firstDayOfMonth(); i += 1){
            blankDays.push(
                <td key={i} className="calender-day blank">
                    {""}
                </td>)
        }
        console.log("Blank Spaces: ", blankDays)

        let daysInMonth = []
        for( let day = 1; day <= this.daysInMonth(); day += 1){
            daysInMonth.push(
                <td key={day} className="calender-day">
                    {day}
                </td>
            )
        }

        console.log("Day: ", daysInMonth)


        return(
            <div className="calender-container">
                <h1>Kalfender</h1>
                <table className="calender">
                    <tbody>
                        <tr>
                            {weekday}
                        </tr>
                    </tbody>       
                </table>
            </div>
        )
    }
}