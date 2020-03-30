import React from 'react'
import moment from 'moment'

export default class Calendar extends React.Component{
    render(){
        return(
            <div className="calendar-container">
                <h2>Kalfendar</h2>
            </div>
        )
    }
}




















// import React from 'react'

// import moment from "moment"
// import "./calendar.css"


// export default class Calendar extends React.Component {

//     state = {
//         dateObject: moment()
//     }
//     weekdayshort = moment.weekdaysShort()

//     firstDayOfMonth = () => {
//         let dateObject = this.state.dateObject
//         let firstDay = moment(dateObject).startOf('month').format('d')
//         return firstDay
//     }

//     daysInMonth = () => {
//         let dayObject = this.state.dateObject.daysInMonth()
//         return dayObject
//     }

//     currentDay = () =>{
//         return this.state.dateObject.format('D')
//     }

    
//     render(){
//         let weekdayshortname = this.weekdayshort.map(day => {
//             return(
//                 <th key={day} className="week-day">
//                     {day}
//                 </th>
    
//             )
//         })

//         let blanks = []
//         for( let i = 0; i < this.firstDayOfMonth(); i += 1){
//             blanks.push(
//                 <td key={i} className="calender-day empty">
//                     {""}
//                 </td>)
//         }
//         console.log("Blank Spaces: ", blanks)

//         let daysInMonth = []
//         for( let d = 1; d <= this.daysInMonth(); d += 1){
//             let currentDay = d === this.currentDay() ? "today" : ""
//             daysInMonth.push(
//                 <td key={d} className={`calender-day ${currentDay}`} >
//                     {d}
//                 </td>
//             )
//         }

//         console.log("Day: ", daysInMonth)

//         const totalSlots = [...blanks, ...daysInMonth]
//         let rows = []
//         let cells = []

//         totalSlots.forEach((row, i) => {
//             if( i % 7 !== 0){
//                 cells.push(row)
//             } else {
//                 rows.push(cells)
//                 cells = []
//                 cells.push(row)
//             }
//             if( i === totalSlots.length -1){
//                 rows.push(cells)
//             }
//         })

//         let rowElements = rows.map((day, i) => {
//             return <tr key={i * 100}>
//                 {day}
//             </tr>
//         })



//         return(
//             <div className="calender-container">
//                 <h1>Kalfendar</h1>
//                 <table className="calender">
                    
//                     <tbody>
//                         <tr>
//                             {weekdayshortname }
//                         </tr>
//                         {rowElements}
//                     </tbody>       
//                 </table>
//             </div>
//         )
//     }
// }