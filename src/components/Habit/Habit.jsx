
import React, { useEffect, useState } from 'react'



//  return (
//         <>
//                 <div className='form-div'>               
//                     <h1><b>Habit Tracker</b></h1>                      
//                 </div>
                
//                 <div className='habit-div' style={{
//                     marginLeft: '250px',
//                     border: '2px solid black',
//                     display: 'flex',
//                     flexDirection: 'column', // Stack table and form vertically
//                     height: 'auto', // Let it grow with content
//                     padding: '20px'
//                 }}>                   
        
//                     <table style={{padding: '10px', marginLeft: '50px', marginBottom: '20px'}}>
//                         <tbody>
//                             {habits.map((habit, index) => {
//                                 const days = []
//                                 for(let i = 0; i < 31; i++){
//                                     days.push(
//                                         <td 
//                                             key={i}
//                                             className={`Task ${habit.daysCompleted && habit.daysCompleted.includes(i + 1) ? 'completed' : ''}`}
//                                             style={{ 
//                                                 justifyContent: 'space-evenly', 
//                                                 padding: '5px',
//                                                 cursor: 'pointer',
//                                                 backgroundColor: habit.daysCompleted && habit.daysCompleted.includes(i + 1) ? '#90EE90' : '#f0f0f0',
                                               
//                                                   border: '1px solid #ddd',
//                                                 textAlign: 'center',
//                                                 minWidth: '30px'
                                           
//                                             }}
//                                             onClick={() => toggleDay(habit._id, i + 1)} // Add click handler
//                                         >                                                                                
//                                             {i + 1}                                     
//                                         </td>                                 
//                                     )                                   
//                                 }
//                                 return (
//                                     <tr key={habit._id || index}> {/* Use _id if available */}
//                                         <td style={{padding: '5px', fontWeight: 'bold', minWidth: '100px'}}>{habit.name}</td>
//                                         {days}
//                                         <td style={{padding: '5px'}}>                                   
//                                             <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
//                                                 <Flex vertical gap="small">
//                                                     <Flex gap="small" wrap>
//                                                         <Button 
//                                                             color="pink" 
//                                                             variant="dashed"
//                                                             onClick={() => handleEdit(habit._id)}
//                                                         >
//                                                             Edit
//                                                         </Button>
//                                                         <Button 
//                                                             color="pink" 
//                                                             variant="dashed"
//                                                             onClick={() => habitDelete(habit._id)}
//                                                         >
//                                                             Delete
//                                                         </Button>
//                                                     </Flex>
//                                                 </Flex>
//                                             </ConfigProvider>
//                                         </td>
//                                     </tr>                                                 
//                                 )
//                             })}
//                         </tbody>
//                     </table>         
                    
//                     {/* Move the form outside the table */}
//                     <div style={{  marginLeft: '200px', 
//                         padding: '10px',
//                         border: '1px solid #ccc',
//                         borderRadius: '5px',
//                         backgroundColor: '#f9f9f9',
//                         width: 'fit-content' }}>
//                         <form onSubmit={(e) => { e.preventDefault(); addHabit(); }}>
//                             <input 
//                                 type="text"
//                                 placeholder="Enter new habit"
//                                 value={newHabit} 
//                                 onChange={(e) => setNewHabit(e.target.value)} 
                        
//                                 style={{
//                                     padding: '8px',
//                                     marginRight: '10px',
//                                     border: '1px solid #ddd',
//                                     borderRadius: '4px'
//                                 }}

//                             />
//                             <button type="submit"
                            
//                              style={{
//                                     padding: '8px 16px',
//                                     backgroundColor: '#ff69b4',
//                                     color: 'white',
//                                     border: 'none',
//                                     borderRadius: '4px',
//                                     cursor: 'pointer'
//                                 }}

//                             >Add Habit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }














// import './Habit.css'

// const Habit = () => {
//     const [habits, setHabits] = useState([])
//     const [newHabit, setNewHabit] = useState('')
//     const [editIndex, setEditIndex] = useState(null)
//     const [editHabit, setEditHabit] = useState('')

//     // const [daysCompleted, setDaysCompleted] = useState(Array(31).fill(false))

//     // const [habit, setHabit] = useState('')



//     
//    


    // const handleHabitChange = (e) => {
    //     setHabitInput(e.target.value)
    // }

    // const toggleDay = async (habitIndex, dayIndex) => {
    //     const updatedHabits = [...habits]
    //     updatedHabits[habitIndex].days[dayIndex] =
    //         !updatedHabits[habitIndex].days[dayIndex]
    //     // newDays[index] = !newDays[index]
    //     setHabits(updatedHabits)
    //     try {
    //         const habitToUpdate = updatedHabits[habitIndex]
    //         await axios.put(`http://localhost:3000/api/habits/update-habit-by-id/${id}`, habitToUpdate)
    //     } catch (error) {
    //         console.log("Error updating habit:", error)
    //     }
    //     // setEditIndex(null)
    //     // setEditHabit('')
    // }

    // 

   




    async function allCompletedHabits() {
        try {

            const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')


            const completed = response.data.payload.filter(item => item.isDone === false)
            setHabitList(completed)
        } catch (error) {
            console.log(error)
        }
    }


    async function nonCompletedHabits() {
        try {
            const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')


            const notCompleted = response.data.payload.filter(item => item.isDone === false)
            setHabitList(notCompleted)
        } catch (error) {
            console.log(error)
        }
    }


   
   

    return (


        //         <form onSubmit={e => addHabit(e)}>
        //             <input
        //                 type="text"
        //                 placeholder='Add a habit...'
        //                 name="habit"
        //                 value={habitInput}
        //                 onChange={e => setHabitInput(e.target.value)}
        //             />
        //             <button onClick='add'>Add Habit</button>


//         <div className="habit-tracker">
//             <h2>Habit Tracker</h2>
//             <div className="habit-input">
//                 {/* <label>Habit:</label> */}
//                 <input
//                     type="text"
//                     placeholder="Enter your habit..."
//                     value={habitInput}
//                     onChange={(e) => setNewHabit(e.target.value)}
//                     // onChange={handleHabitChange}
//                 />
//                 <button onClick={addHabit}>Add Habit</button>
//             </div>
//             {habits.map((habit, habitIndex) => (
//                 <div key={habit.id || habitIndex} className='habit-row'>

//                     {editIndex === habitIndex ? (
//                         <div className='habit-edit'>
//                             <input
//                             type='text'
//                             value='editHabit'
//                             onChange={(e)=> setEditHabit(e.target.value)}
//                             />
//                             <button onClick={() => saveEdit(habitIndex)}>Save</button>
//                         </div>
//                     ) : (
//                         <div className='habit-name'>{habit.name}</div>
//                     )}


// <div className="days-container">
//     {habit.days.map((isDone, dayIndex)=> (
//         <div
//         key={dayIndex}
//         className={`day-box ${isDone ? "completed" : "" }` }
//         onClick={() => toggleDay(habitIndex, dayIndex)}
//         >
//             {dayIndex + 1}
//         </div>
//     ))}
// </div>
//   {editIndex !== habitIndex && (
//     <div className='habit-actions'>
//         <button onClick={()=> handleEdit(habitIndex)}></button>
//         <button onClick={() => habitDelete(habitIndex)}></button>
//     </div>
//   )}
// </div>
//             ))}
//             </div>
//     )


export default Habit


        /* //     <div className="days-completed"> */
        /* //         {days.map((daysCompleted, index) => ( */ 
        //             <div
        //                 key={index}
        //                 className={`day-box ${daysCompleted ? "completed" : ""}`}
        //                 onClick={() => toggleDay(index)}
        //             >
        //                 {index + 1}
        //             </div>
        //         ))}

        //         <div className='habit-div'>
        // //         <ul>

        // //             <div className='sorted-options'>
        // //                 {/* <button onClick={oldestFirst}>Sort Oldest to Newest</button> */}
        // //                 {/* <button onClick={newestFirst}>Sort Newest to Oldest</button> */}
        // //                 <button onClick={allCompletedHabits}>Completed Items</button>
        // //                 <button onClick={nonCompletedHabits}>Not yet Completed</button>
        // //                 <button onClick={getAllHabits}>Get All Habits</button>

        // //             </div>
        // //             {
        //                     habitList.map((item) => {
        //                         return <Habit

        //                             key={item._id}
        //                             item={item}
        //                             // oldestFirst={oldestFirst}
        //                             // groceryPurchased={groceryPurchased}
        //                             handleEdit={handleEdit}
        //                             habitDelete={habitDelete} />
        //                     })
        //                 }
        //             </ul>
        //         </div>


        //     </div>
        // </div>



        // <div  style={{
        //         marginLeft:'20%'
        //      }}>
        //     <div className='form-div'
        //     >

/* <section class="theme-container">
  <button class="theme" id="theme"></button>
</section>
<section className="habit-container">
    <div className="habit">
        <button className="habit-button">
           😄 
        </button>
    </div>
</section> */


        //         <form onSubmit={e => addHabit(e)}>
        //             <input
        //                 type="text"
        //                 placeholder='Add a habit...'
        //                 name="habit"
        //                 value={habitInput}
        //                 onChange={e => setHabitInput(e.target.value)}
        //             />
        //             <button onClick='add'>Add Habit</button>
        //         </form>
        //     </div>
        //     <div className='habit-div'>
        //         <ul>

        //             <div className='sorted-options'>
        //                 {/* <button onClick={oldestFirst}>Sort Oldest to Newest</button> */}
        //                 {/* <button onClick={newestFirst}>Sort Newest to Oldest</button> */}
        //                 <button onClick={allCompletedHabits}>Completed Items</button>
        //                 <button onClick={nonCompletedHabits}>Not yet Completed</button>
        //                 <button onClick={getAllHabits}>Get All Habits</button>

        //             </div>
        //             {
        //                 habitList.map((item) => {
        //                     return <Habit

        //                         key={item._id}
        //                         item={item}
        //                         // oldestFirst={oldestFirst}
        //                         // groceryPurchased={groceryPurchased}
        //                         handleEdit={handleEdit}
        //                         habitDelete={habitDelete} />
        //                 })
        //             }
        //         </ul>
        //     </div>
        // </div>

    // )
// }

// export default Habit


// habit: {
//     type: String,
//         required: true
// },
// year: {
//     type: Number
// },
// month: {
//     type: Number
// },
// daysCompleted: {
//     type: [Number],
//         default: []
// },
// user: {
//     type: mongoose.Schema.ObjectId,
//         ref: 'user'


// import Button from '../common/Button'
// import './Habit.css'
// import React, {  useState } from 'react'
// const Habit = ({item, handleEdit, habitDelete,}) => {

// const [isEditing, setIsEditing] = useState(false)
//  const [editInput, setEditInput] = useState('')


//   return (

//   <div className='habitlist-div'>
//             {!isEditing ? (<li
//                 className={`li-style ${item.isDone? "li-style-isDone" : ""}`}
//                 onClick={() => handleEdit(item._id, { isDone: !item.isDone})}>
//                 {item.habit}
//             </li>) : (
//                 <input
//                     type="text"
//                     value={editInput}
//                     onChange={(e) => setEditInput(e.target.value)} />

//             )}

//   {!isEditing ?
//                 (<Button
//                     cssid={'edit-button'}
//                     clickFunc={() => {
//                         setIsEditing(true)
//                         console.log("handle edit")
//                     }}
//                     buttonName={'Edit'}
//                 />) : (

//                     <Button
//                         cssid={'submit-button'}
//                         clickFunc={() => {
//                             handleEdit(item._id, { habit: editInput })
//                             setIsEditing(false)
//                         }}
//                         buttonName={'Submit'}
//                     />
//                 )}

//             <Button
//                 cssid={'completed-button'}
//                 clickFunc={() => {
//                     handleEdit(item._id, { isDone: !item.isDone})
//                     console.log("completed button")
//                 }}
//                 buttonName={'Completed'}
//             />

//             <Button
//                 cssid={'delete-button'}
//                 clickFunc={() => {
//                     console.log('deleting')
//                     habitDelete(item._id, editInput)
//                 }}
//                 buttonName={'Delete'}
//             />

//         </div>



//   )
// }

// export default Habit













// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
// import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
// import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

// export default function ResponsiveDateTimePickers() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer
//         components={[
//           'DateTimePicker',
//           'MobileDateTimePicker',
//           'DesktopDateTimePicker',
//           'StaticDateTimePicker',
//         ]}
//       >
//         <DemoItem label="Desktop variant">
//           <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
//         </DemoItem>
//         <DemoItem label="Mobile variant">
//           <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
//         </DemoItem>
//         <DemoItem label="Responsive variant">
//           <DateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
//         </DemoItem>
//         <DemoItem label="Static variant">
//           <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }