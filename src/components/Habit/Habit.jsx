
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Habit.css'

function Habit() {
    const [habitInput, setHabitInput] = useState('')
    // const [daysCompleted, setDaysCompleted] = useState(Array(31).fill(false))
    const [habitList, setHabitList] = useState([])

   
async function allCompletedHabits() {
        try {console.log(Habit)
            
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


    // useEffect(() => {
        async function getAllHabits() {
            try {
                const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
               
                setHabitList(response.data.body)
                 console.log(response.data.body)
            } catch (error) {
                console.log(error)
            }
        }
        // getAllHabits()
    // }, [])

 async function addHabit(event) {
        try {
            event.preventDefault()
            if (habitInput === '') {
                return
            }
            const response = await axios.post('http://localhost:3000/api/habits/create-habit', { habit: habitInput })
            setHabitList([...habitList, response.data.payload])
            setHabitInput('')
        } catch (error) {
            console.log(error)
        }
    }

    async function habitDelete(id, deleteObj) {
        try {
            await axios.delete(`http://localhost:3000/api/habits/delete-habit-by-id/${id}`, deleteObj)
            const newList = habitList.filter(item => item._id !== id)
            setHabitList(newList)
        } catch (error) {
            console.log(error)
        }

    }




 async function handleEdit(id, updateObj) {
        try {
            const response = await axios.put(`http://localhost:3000/api/habits/update-habit-by-id/${id}`, updateObj)
            console.log(response.data.payload)
            const newList = habitList.map(item => {
                if (item._id === id) {
                    item = response.data.payload
                }
                return item
            })
            setHabitList(newList)
        } catch (error) {
            console.log(error)
        }
    }





    return (

        
        // <div>Habit</div>

        <div  style={{
                marginLeft:'20%'
             }}>
            <div className='form-div'
            >
                <form onSubmit={e => addHabit(e)}>
                    <input
                        type="text"
                        name="habit"
                        value={habitInput}
                        onChange={e => setHabitInput(e.target.value)}
                    />
                    <button type='add'>Add Item</button>
                </form>
            </div>
            <div className='habit-div'>
                <ul>

                    <div className='sorted-options'>
                        {/* <button onClick={oldestFirst}>Sort Oldest to Newest</button> */}
                        {/* <button onClick={newestFirst}>Sort Newest to Oldest</button> */}
                        <button onClick={allCompletedHabits}>Completed Items</button>
                        <button onClick={nonCompletedHabits}>Not yet Completed</button>
                        <button onClick={getAllHabits}>Get All Habits</button>

                    </div>
                    {
                        habitList.map((item) => {
                            return <Habit

                                key={item._id}
                                item={item}
                                // oldestFirst={oldestFirst}
                                // groceryPurchased={groceryPurchased}
                                handleEdit={handleEdit}
                                habitDelete={habitDelete} />
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default Habit


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


// const Habit = ({item, handleEdit, habitDelete,}) => {

// const [isEditing, setIsEditing] = useState(false)
//  const [editInput, setEditInput] = useState(item.habit)


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