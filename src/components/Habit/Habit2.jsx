
import React, { useEffect, useState } from 'react'
import './Habit.css'
import { Button, ConfigProvider, Flex } from 'antd';
import { useResponsive } from 'antd-style';
import Axios from '../../utils/Axios';

const mockData = [{
    name: "Study",
    year: 2025,
    month: 8,
    daysCompleted: [1, 4, 5, 6]
},
{
    name: "Read",
    year: 2025,
    month: 8,
    daysCompleted: [1, 2, 3, 5]
},
{
    name: "Meditate",
    year: 2025,
    month: 8,
    daysCompleted: [2, 3, 5, 8]
},
]
function Habit() {

    // const [habitInput, setHabitInput] = useState('')
    const [habits, setHabits] = useState(mockData)

    const [newHabit, setNewHabit] = useState('')
    const [editHabit, setEditHabit] = useState('')
    const [habitIndex, setHabitIndex] = useState(null)

    // const [habitList, setHabitList] = useState(mockData); // if different from `habits

    const { xxl } = useResponsive();

    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()



    useEffect(() => {
        async function getHabitByMonth() {
            try {
                const response = await Axios.post('/habits/get-habits-by-month', { month, year })
                console.log(response)
                setHabits(response.data.payload)
                console.log(response.data.body)
            } catch (error) {
                console.log(error)
            }
        }
        getHabitByMonth()
    }, [month, year])


    async function habitDelete(id) {
        // , deleteObj , deleteObj
        try {
            await Axios.delete(`/habits/delete-habit-by-id/${id}`)
            const newList = habits.filter(item => item._id !== id)
            setHabits(newList)
        } catch (error) {
            console.log(error)
        }

    }

    const addHabit = async () => {
        //   if (!newHabit)
        if (newHabit === '')
            return;

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;

        try {
            const response = await Axios.post('/habits/create-habit', {
                name: newHabit,
                year,
                month,
                days: [], // optional: could be omitted
            });

            setHabits([...habits, response.data.payload]);
            setNewHabit('');
        } catch (error) {
            console.log("Error adding habit:", error);
        }
    };

    const handleEdit = (id) => {

        setHabitIndex(id)
        setEditHabit(habits[id].name)
    }

    const saveEdit = async (id) => {
        const updatedHabits = [...habits];
        updatedHabits[habitIndex].name = editHabit;

        try {
            const response = await Axios.put(`/habits/update-habit-by-id/${id}`, {
                name: editHabit,
            });
            const newList = habits.map((item) =>
                item._id === id ? response.data.payload : item
            );
            setHabits(newList);
            setHabitIndex(null);
            setEditHabit('');
        } catch (error) {
            console.log(error);
        }
    };



    

    const toggleDay = async (habitId, day) => {
        // try {
        //     const response = await Axios.put(`/habits/toggle-day`, {
        //         habitId,
        //         day,
        //     });

        // Optimistically update UI:
        const updatedHabits = habits.map(habit => {
            if (habit._id === habitId) {
                const alreadyCompleted = habit.daysCompleted.includes(day);
                const updatedDays = alreadyCompleted
                    ? habit.daysCompleted.filter(d => d !== day)
                    : [...habit.daysCompleted, day];

                return { ...habit, daysCompleted: updatedDays };
            }
            return habit;
        });
        setHabits(updatedHabits);

        try {
            await Axios.put(`/habits/toggle-day`, { habitId, day, });

        } catch (error) {
            console.log("Error toggling day:", error);
            setHabits(habits)
        }
    };



    // const addHabit = async () => {
    //     // name, days
    //     if (newHabit === '')
    //         return
    //     const habit = {
    //         name: newHabit,
    //         month,
    //         year,
    //         daysCompleted: [],
    //         // days: Array(31).fill(false)
    //     }
    //     try {

    //         const response = await Axios.post('/api/habits/create-habit', { habit: habit.name })
    //         console.log(response)
    //         setHabits([...habits, response.data])
    //         setNewHabit('')
    //     } catch (error) {
    //         console.log("Error adding habit:", error)
    //     }
    // }


    //     const saveEdit = async (id, updateObj) => {
    //         const updatedHabits = [...habits]
    //         updatedHabits[updateObj].name = editHabit
    //         setHabits(id, updateObj)
    //     }
    //     try {
    //         const habitToUpdate = updatedHabits[habitIndex]
    //         const response = await Axios.put(`/habits/update-habit-by-id/${id}`, updateObj)
    //         console.log(response.data.payload)
    //         const newList = habitList.map(item => {
    //             if (item._id === id) {
    //                 item = response.data.payload
    //             }
    //             return item
    //         })
    //         setHabits(newList)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


return (
    <div className="habit-page-container">
        <div className="background-animation"></div>
        
        <div className="habit-content">
            <div className='form-div'>
                <h1 className="main-title">🎯 Habit Tracker</h1>
                <p className="subtitle">Build consistency, one day at a time</p>
            </div>
            
            <div className='habits-grid'>
                {habits.map((habit, index) => (
                    <div key={habit._id} className="habit-card">
                        <div className="habit-header">
                            <div className="habit-name-section">
                                {habitIndex === index ? (
                                    <div className="edit-section">
                                        <input
                                            className="edit-input"
                                            value={editHabit}
                                            onChange={(e) => setEditHabit(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && saveEdit(habit._id)}
                                            autoFocus
                                        />
                                        <div className="edit-buttons">
                                            <button 
                                                className="save-btn"
                                                onClick={() => saveEdit(habit._id)}
                                            >
                                                ✅ Save
                                            </button>
                                            <button 
                                                className="cancel-btn"
                                                onClick={() => {
                                                    setHabitIndex(null);
                                                    setEditHabit('');
                                                }}
                                            >
                                                ❌ Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="habit-title">{habit.name}</h3>
                                        <div className="habit-actions">
                                            <button
                                                className="edit-btn"
                                                onClick={() => handleEdit(index)}
                                                title="Edit habit"
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className="delete-btn"
                                                onClick={() => habitDelete(habit._id)}
                                                title="Delete habit"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        
                        <div className="days-container">
                            <div className="days-grid">
                                {Array.from({ length: 31 }, (_, i) => {
                                    const day = i + 1;
                                    const isCompleted = habit.daysCompleted.includes(day);
                                    
                                    return (
                                        <div
                                            key={i}
                                            className={`day-box ${isCompleted ? 'completed' : 'incomplete'}`}
                                            onClick={() => toggleDay(habit._id, day)}
                                            title={`Day ${day} - ${isCompleted ? 'Completed' : 'Not completed'}`}
                                        >
                                            <span className="day-number">{day}</span>
                                            {isCompleted && <div className="check-mark">✓</div>}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                        <div className="habit-stats">
                            <div className="progress-info">
                                <span className="completed-days">
                                    {habit.daysCompleted.length}/31 days
                                </span>
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill"
                                        style={{ 
                                            width: `${(habit.daysCompleted.length / 31) * 100}%` 
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="add-habit-card">
                <h3>➕ Add New Habit</h3>
                <div className="add-habit-form">
                    <input
                        type="text"
                        className="new-habit-input"
                        placeholder="Enter your new habit..."
                        value={newHabit}
                        onChange={(e) => setNewHabit(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addHabit()}
                    />
                    <button className="add-habit-btn" onClick={addHabit}>
                        Add Habit
                    </button>
                </div>
            </div>
        </div>
    </div>
)}












// Replace your return statement with this cleaned-up version:

// return (
//     <div className="main-container">
//         <div className='form-div'>
//             <h1><b>Habit Tracker</b></h1>
//         </div>
        
//         <div className='habit-div'>
//             <table>
//                 <tbody>
//                     {habits.map((habit, index) => {
//                         const days = [];
//                         for (let i = 0; i < 31; i++) {
//                             days.push(
//                                 <td
//                                     key={i}
//                                     className={`day-cell ${habit.daysCompleted.includes(i + 1) ? 'completed' : 'incomplete'}`}
//                                     onClick={() => toggleDay(habit._id, i + 1)}
//                                 >
//                                     <span className="day-number">{i + 1}</span>
//                                 </td>
//                             );
//                         }

//                         return (
//                             <tr key={habit._id} className="habit-row">
//                                 <td className="habit-name">{habit.name}</td>
//                                 {days}
//                                 <td className="actions-cell">
//                                     <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
//                                         <Flex gap="small" wrap>
//                                             {habitIndex === index ? (
//                                                 <>
//                                                     <input
//                                                         className="edit-input"
//                                                         value={editHabit}
//                                                         onChange={(e) => setEditHabit(e.target.value)}
//                                                         onKeyPress={(e) => e.key === 'Enter' && saveEdit(habit._id)}
//                                                     />
//                                                     <Button 
//                                                         type="primary" 
//                                                         size="small"
//                                                         onClick={() => saveEdit(habit._id)}
//                                                     >
//                                                         Save
//                                                     </Button>
//                                                     <Button 
//                                                         size="small"
//                                                         onClick={() => {
//                                                             setHabitIndex(null);
//                                                             setEditHabit('');
//                                                         }}
//                                                     >
//                                                         Cancel
//                                                     </Button>
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <Button
//                                                         color="primary"
//                                                         variant="outlined"
//                                                         size="small"
//                                                         onClick={() => handleEdit(index)}
//                                                     >
//                                                         Edit
//                                                     </Button>
//                                                     <Button
//                                                         color="danger"
//                                                         variant="outlined"
//                                                         size="small"
//                                                         onClick={() => habitDelete(habit._id)}
//                                                     >
//                                                         Delete
//                                                     </Button>
//                                                 </>
//                                             )}
//                                         </Flex>
//                                     </ConfigProvider>
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>

//             <div className="add-habit-section">
//                 <input
//                     type="text"
//                     placeholder="Enter new habit..."
//                     value={newHabit}
//                     onChange={(e) => setNewHabit(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && addHabit()}
//                 />
//                 <button onClick={addHabit}>Add Habit</button>
//             </div>
//         </div>
//     </div>
// )}








    // return (
    //     <>
    //         <div style={{
    //             display: 'flex',
    //             marginLeft: '150px',
    //             backgroundColor: 'aqua',
    //             flexDirection: 'column',
    //             height: '100vh',
    //             alignItems: 'center'
    //             // marginLeft:'20%'
    //         }}>

    //             <div className='form-div' >
    //                 {/* <form > */}
    //                 <h1><b>Habit Tracker</b></h1>
    //             </div>
    //             <div className='habit-div'
    //                 style={{
    //                     marginLeft: '90px',





                        //                     border: '2px solid black',
                        //                     display: 'flex',
                        //                     flexDirection: 'column', // Stack table and form vertically
                        //                     height: 'auto', // Let it grow with content
                        //                     padding: '20px'                    
                        //  border: '2px solid black',
                        //  display: 'flex',
                        //  height: '30%',




                    // }} >
                    // <table style={{ padding: '10px', marginLeft: '50px' }} >
                    //     <tbody >
                    //         {habits.map((habit, index) => {
                    //             const days = [];
                    //             for (let i = 0; i < 31; i++) {
                    //                 days.push(

                                    

                                        // <td
                                        //     key={i}
                                        //     className={`Task ${habit.daysCompleted.includes(i + 1) ? 'completed' : ''}`}
                                        //     style={{ justifyContent: 'space-evenly', padding: '5px', }}
                                        //     onClick={() => toggleDay(habit._id, i + 1)}
                                        // >
                                        //     {i + 1}
                                        // </td>



//                                     );

//                                 }

//                                 return (
//                                     <tr key={habit.name} className="button-div">
//                                         <td>{habit.name}</td>
//                                         {days}
//                                         <td>
//                                             <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
//                                                 <Flex vertical gap="small">
//                                                     <Flex gap="small" wrap>

//                                                         {habitIndex === index ? (
//                                                             <>
//                                                                 <input
//                                                                     value={editHabit}
//                                                                     onChange={(e) => setEditHabit(e.target.value)}
//                                                                 />
//                                                                 <Button onClick={() => saveEdit(habit._id)}>Save</Button>
//                                                             </>
//                                                         ) : (
//                                                             <Button
//                                                                 color="pink"
//                                                                 variant="dashed"
//                                                                 onClick={() => handleEdit(index)}
//                                                             >
//                                                                 Edit
//                                                             </Button>
//                                                         )}


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
//                                 );
//                             })}
//                         </tbody>
//                     </table>

//                     <div style={{ marginTop: '20px' }}>
//                         <input
//                             type="text"
//                             name="habit"
//                             value={newHabit}
//                             onChange={(e) => setNewHabit(e.target.value)}
//                         />
//                         <button onClick={addHabit}>Add Habit</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

export default Habit


//                                     return (
//                                         <div className='button-div' >
//                                             <tr keys={habit.name}>

//                                                 <tr key={habit.name} className='button-div'>
//                                                     <td>{habit.name}</td>
//                                                     {days}
//                                                     <td>
//                                                         <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
//                                                             <Flex vertical gap="small">
//                                                                 <Flex gap="small" wrap>

//                                                                     <Button color="pink" variant="dashed">
//                                                                         Edit
//                                                                     </Button>
//                                                                     <Button color="pink" variant="dashed">
//                                                                         Delete
//                                                                     </Button>
//                                                                 </Flex>
//                                                             </Flex>
//                                                         </ConfigProvider>
//                                                     </td>
//                                                 </tr>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </tbody>
//                         <input
//                             type="text"
//                             name="habit"
//                             value={habitInput}
//                             onChange={e => setHabitInput(e.target.value)}
//                         />
//                         <button type='add'>Add Habit</button>

//                     </table>
//                 </div>

//             </div >


//         </>

//     )
// }




// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Box,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   IconButton,
// } from '@mui/material';
// import { Add, Edit, Delete, CheckCircleOutline, CircleOutlined } from '@mui/icons-material';
// import HabitRow from './HabitRow'; // Assuming HabitRow.jsx is in the same directory

// function Habit() {
//   const [habits, setHabits] = useState([
//     { id: 1, name: 'Clean Room', completion: Array(31).fill(false) },
//     { id: 2, name: 'Walk Dog', completion: Array(31).fill(false) },
//     { id: 3, name: 'WorkOut', completion: Array(31).fill(false) },
//   ]);

//   const [openAddEditDialog, setOpenAddEditDialog] = useState(false);
//   const [currentHabit, setCurrentHabit] = useState(null); // For editing
//   const [newHabitName, setNewHabitName] = useState('');

//   // Toggles the completion status for a specific day and habit
//   const toggleDayCompletion = (habitId, dayIndex) => {
//     setHabits((prevHabits) =>
//       prevHabits.map((habit) =>
//         habit.id === habitId
//           ? {
//               ...habit,
//               completion: habit.completion.map((completed, index) =>
//                 index === dayIndex ? !completed : completed
//               ),
//             }
//           : habit
//       )
//     );
//   };

//   // Handles opening the Add/Edit dialog
//   const handleOpenAddEdit = (habit = null) => {
//     setCurrentHabit(habit);
//     setNewHabitName(habit ? habit.name : '');
//     setOpenAddEditDialog(true);
//   };

//   // Handles closing the Add/Edit dialog
//   const handleCloseAddEdit = () => {
//     setOpenAddEditDialog(false);
//     setCurrentHabit(null);
//     setNewHabitName('');
//   };

//   // Adds a new habit or updates an existing one
//   const handleAddUpdateHabit = () => {
//     if (!newHabitName.trim()) return; // Don't add empty habits

//     if (currentHabit) {
//       // Update existing habit
//       setHabits((prevHabits) =>
//         prevHabits.map((habit) =>
//           habit.id === currentHabit.id ? { ...habit, name: newHabitName.trim() } : habit
//         )
//       );
//     } else {
//       // Add new habit
//       const newId = habits.length > 0 ? Math.max(...habits.map((h) => h.id)) + 1 : 1;
//       setHabits((prevHabits) => [
//         ...prevHabits,
//         { id: newId, name: newHabitName.trim(), completion: Array(31).fill(false) },
//       ]);
//     }
//     handleCloseAddEdit();
//   };
// const handleDeleteHabit = (id) => {
//     setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
//   };

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom align="center">
//         Monthly Habit Tracker
//       </Typography>

//       <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<Add />}
//           onClick={() => handleOpenAddEdit()}
//         >
//           Add Habit
//         </Button>
//       </Box>
// <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="habit tracker table">
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 'bold', width: '150px' }}>Habit</TableCell>
//               {Array.from({ length: 31 }, (_, i) => (
//                 <TableCell key={i} align="center" sx={{ width: '30px', fontWeight: 'bold' }}>
//                   {i + 1}
//                 </TableCell>
//               ))}
//               <TableCell sx={{ fontWeight: 'bold', width: '100px' }} align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {habits.map((habit) => (
//               <HabitRow
//                 key={habit.id}
//                 habit={habit}
//                 onToggleDayCompletion={toggleDayCompletion}
//                 onEdit={handleOpenAddEdit}
//                 onDelete={handleDeleteHabit}
//               />
//             ))}

//   </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add/Edit Habit Dialog */}
//       <Dialog open={openAddEditDialog} onClose={handleCloseAddEdit}>
//         <DialogTitle>{currentHabit ? 'Edit Habit' : 'Add New Habit'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Habit Name"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={newHabitName}

//   onChange={(e) => setNewHabitName(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseAddEdit}>Cancel</Button>
//           <Button onClick={handleAddUpdateHabit}>
//             {currentHabit ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// }

// export default Habit





/* <h1>My Habit Tracker</h1>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit} // Pass the individual habit object (including its completion array) as a prop
          onToggleDayCompletion={toggleDayCompletion}
        />
      ))} */


/* <div className="row">
        {days.map((day)=> (
            <div key = {day} className="day">
                {day}
            </div>
        ))}
      </div> */



// /     const toggleDayCompletion = (habitId, dayIndex) => {
//     setHabits((prevHabits) =>
//       prevHabits.map((habit) =>
//         habit.id === habitId
//           ? {
//               ...habit,
//               completion: habit.completion.map((completed, index) =>
//                 index === dayIndex ? !completed : completed
//               ),
//             }
//           : habit
//       )
//     );
//   };



// import React, { useState } from 'react'
// import React from 'react'
// import './Habit.css'


// function Habit({ habit, onToggleDayCompletion }) {
//   // habit prop will be an object like:
//   // { id: 1, name: 'Clean Room', completion: [false, true, false, ...] }
//   // onToggleDayCompletion is a function passed from the parent to update state

//   return (
//     <div className="habit-row">
//       <span className="habit-name">{habit.name}</span>
//       <div className="day-circles">
//         {habit.completion.map((completed, index) => (
//           <div
//             key={index} // Unique key for each circle based on its index
//             className={`circle ${completed ? 'completed' : ''}`} // Apply 'completed' class if the day is completed
//             onClick={() => onToggleDayCompletion(habit.id, index)} // Call the parent's toggle function on click
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Habit;



































































