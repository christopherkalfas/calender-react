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

    currentDay = () =>{
        return this.state.dateObject.format('D')
    }

    
    render(){
        let weekday = this.weekdayShort.map(day => {
            return(
                <th key={day} className="week-day">
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
            let currentDay = day === this.currentDay() ? "today" : ""
            daysInMonth.push(
                <td key={day} className={`calender-day ${currentDay}`} >
                    {day}
                </td>
            )
        }

        console.log("Day: ", daysInMonth)

        const totalCalenderSlots = [...blankDays, ...daysInMonth]
        let rows = []
        let cells = []

        totalCalenderSlots.forEach((row, i) => {
            if( i % 7 !== 0){
                cells.push(row)
            } else {
                rows.push(cells)
                cells = []
                cells.push(row)
            }
            if( i === totalCalenderSlots.length -1){
                rows.push(cells)
            }
        })

        let rowElements = rows.map((day, i) => {
            return <tr key={i * 100}>
                {day}
            </tr>
        })



        return(
            <div className="calender-container">
                <h1>Kalfender</h1>
                <table className="calender">
                    
                    <tbody>
                        <tr>
                            {weekday}
                        </tr>
                        {rowElements}
                    </tbody>       
                </table>
            </div>
        )
    }
}