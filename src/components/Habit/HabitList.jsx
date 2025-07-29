





import React from 'react';
import { TableRow, TableCell, IconButton, Box } from '@mui/material';
import { CheckCircleOutline, CircleOutlined, Edit, Delete } from '@mui/icons-material';

function HabitList({ habit, onToggleDayCompletion, onEdit, onDelete }) {
  return (
    <TableRow key={habit.id}>
      <TableCell component="th" scope="row">
        {habit.name}
      </TableCell>
      {habit.completion.map((completed, index) => (
        <TableCell key={index} align="center">
          <IconButton
            onClick={() => onToggleDayCompletion(habit.id, index)}
            color={completed ? 'success' : 'default'} // Green if completed
            size="small"
          >
            {completed ? <CheckCircleOutline /> : <CircleOutlined />}
          </IconButton>
        </TableCell>
      ))}
      <TableCell align="right">
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <IconButton aria-label="edit" onClick={() => onEdit(habit)} size="small">
            <Edit />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => onDelete(habit.id)} size="small">
            <Delete />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default HabitList;





















//   import React, { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import Habit from './Habit'
// import axios from 'axios'



// const HabitList = () => {

//     const [habitList, setHabitList] = useState([])
//     const [habitInput, setHabitInput] = useState("")

    
// async function allCompletedHabits() {
//         try {console.log(Habit)
            
//             const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
//             const completed = response.data.payload.filter(item => item.isDone === false)
//             setHabitList(completed)
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     async function nonCompletedHabits() {
//         try {
//             const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
//             const notCompleted = response.data.payload.filter(item => item.isDone === false)
//             setHabitList(notCompleted)
//         } catch (error) {
//             console.log(error)
//         }
//     }

// useEffect(() => {
//         async function getAllHabits() {
//             try {
//                 const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
//                 setHabitList(response.data.payload)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         getAllHabits()
//     }, [])


//     // useEffect(() => {
//     //     async function fetchHabits() {
//     //         try {
//     //             const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
//     //             setHabitList(response.data.payload)
//     //         } catch (error) {
//     //             console.log(error)
//     //         }
//     //     }
//     //     fetchHabits()
//     // }, [])

//  async function addHabit(event) {
//         try {
//             event.preventDefault()
//             if (habitInput === '') {
//                 return
//             }
//             const response = await axios.post('http://localhost:3000/api/habits/create-habit', { habit: habitInput })
//             setHabitList([...habitList, response.data.payload])
//             setHabitInput('')
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     async function habitDelete(id, deleteObj) {
//         try {
//             await axios.delete(`http://localhost:3000/api/habits/delete-habit-by-id/${id}`, deleteObj)
//             const newList = habitList.filter(item => item._id !== id)
//             setHabitList(newList)
//         } catch (error) {
//             console.log(error)
//         }

//     }

//  async function handleEdit(id, updateObj) {
//         try {
//             const response = await axios.put(`http://localhost:3000/api/habits/update-habit-by-id/${id}`, updateObj)
//             console.log(response.data.payload)
//             const newList = habitList.map(item => {
//                 if (item._id === id) {
//                     item = response.data.payload
//                 }
//                 return item
//             })
//             setHabitList(newList)
//         } catch (error) {
//             console.log(error)
//         }
//     }





//     return (




        
//         // <div>Habit</div>

//         <div  style={{
//                 marginLeft:'20%'
//              }}>
//             <div className='form-div'
//             >
//                 <form onSubmit={e => addHabit(e)}>
//                     <input
//                         type="text"
//                         name="habit"
//                         value={habitInput}
//                         onChange={e => setHabitInput(e.target.value)}
//                     />
//                     <button type='add'>Add Item</button>
//                 </form>
//             </div>
//             <div className='habit-div'>
//                 <ul>

//                     <div className='sorted-options'>
//                         {/* <button onClick={oldestFirst}>Sort Oldest to Newest</button> */}
//                         {/* <button onClick={newestFirst}>Sort Newest to Oldest</button> */}
//                         <button onClick={allCompletedHabits}>Completed Items</button>
//                         <button onClick={nonCompletedHabits}>Not yet Completed</button>

//                     </div>
//                     {
//                         habitList.map((item) => {
//                             return <Habit

//                                 key={item._id}
//                                 item={item}
//                                 // oldestFirst={oldestFirst}
//                                 // groceryPurchased={groceryPurchased}
//                                 handleEdit={handleEdit}
//                                 habitDelete={habitDelete} />
//                         })
//                     }
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default HabitList