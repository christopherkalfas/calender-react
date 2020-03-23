import React from 'react'

import moment from "moment"

export default class Calender extends React.Component {

    weekdayShort = moment.weekdaysShort()

    
    render(){
        let weekdaySname = this.weekdayShort.map(day => {
            return(
                <th key={day} className="weekday">
                    {day}
                </th>
    
            )
        });


        return(
            <div className="calender-container">
                <h1>Kalfender</h1>
                <table className="calender">
                    <tbody>
                        <tr>
                            {weekdaySname}
                        </tr>
                    </tbody>       
                </table>
            </div>
        )
    }
}