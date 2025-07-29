
  import React, { useState } from 'react'
// import React from 'react'
import './Habit.css'


function Habit() {


    // const days = Array.from({ length: 31}, (_, i) => i + 1)

const [habitInput, setHabitInput] = useState ('')
// const [habits, setHabits] = useState([])



  return (

       <div  style={{
        display:'flex',

        backgroundColor: 'aqua'
                    // marginLeft:'20%'
                 }}>

{/* {[...Array(31)].map((_, i) => (
      <div key = {i} style={{margin:'5px'}}>
                           {i + 1}
                        </div>
))} */}


                    {/* {days.map((day)=> (
                        <div key = {day} style={{margin:'5px'}}>
                            {day}
                        </div>
                    ))} */}


                <div className='form-div'
                >


                    <form >
             <h1><b>Habit Tracker</b></h1>

                        <input
                            type="text"
                            name="habit"
                            value={habitInput}
                            onChange={e => setHabitInput(e.target.value)}
                        />
                        <button type='add'>Add Habit</button>
                        <button type='edit'>Edit Habit</button>
                        <button type='delete'>Delete Habit</button>
                    </form>
                </div>
                <div className='habit-div' >
                    <ul>
    {/* , justifyContent: 'space-between' */}

                     <table  style={{padding: '10px', marginTop: '50%'}} >

                        <tr>
                            <td>Clean Room</td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                        </tr>
                        <tr>
                            <td>Walk Dog</td>
                            <td className='Task'></td>
                             <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                        </tr>
                        <tr>
                            <td>WorkOut</td>
                            <td className='Task'></td>
                             <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                            <td className='Task'></td>
                        </tr>
                        
                     </table>
                    </ul>
                </div>
            </div>
        )
    }
   



export default Habit



















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
























{/* <h1>My Habit Tracker</h1>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit} // Pass the individual habit object (including its completion array) as a prop
          onToggleDayCompletion={toggleDayCompletion}
        />
      ))} */}


      {/* <div className="row">
        {days.map((day)=> (
            <div key = {day} className="day">
                {day}
            </div>
        ))}
      </div> */}









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




































































//    import React, { useState } from 'react';
// import <Tailwind></Tailwind>
import './Habit.css'
//  import { Button } from 'antd';
//  import { DatePicker, message, Alert } from 'antd';
// import 'antd/dist/reset.css'

    // const { Card, Button, Input, Typography, Space, Tooltip } = antd;
    //     const { Title, Text } = Typography;

    //     function HabitTracker() {
    //         const habits = [
    //             'No more than 1 coffee',
    //             'Bed by 10pm',
    //             '8 Hours Sleep',
    //             'Go to Gym',
    //             'Wake up at 7am',
    //             'Read before Bed',
    //             'Make Bed',
    //             'Eat Healthy Dinner',
    //             'No Sugar',
    //             'Meditate for 30 Minutes'
    //         ];

    //         const weeks = [
    //             { name: 'WEEK 1', days: [1, 2, 3, 4, 5, 6, 7] },
    //             { name: 'WEEK 2', days: [8, 9, 10, 11, 12, 13, 14] },
    //             { name: 'WEEK 3', days: [15, 16, 17, 18, 19, 20, 21] },
    //             { name: 'WEEK 4', days: [22, 23, 24, 25, 26, 27, 28] },
    //             { name: 'WEEK 5', days: [29, 30, 31] }
    //         ];

    //         return (
    //             <div className="habit-tracker-container glow-effect">
    //                 <div className="floating-elements">
    //                     <div className="floating-circle"></div>
    //                     <div className="floating-circle"></div>
    //                     <div className="floating-circle"></div>
    //                 </div>

    //                 <div className="header-section">
    //                     <h1 className="main-title">HABIT TRACKER</h1>
    //                     <p className="subtitle">Transform Your Life, One Day at a Time</p>
    //                 </div>

    //                 <div className="add-habit-section">
    //                     <div className="add-habit-form">
    //                         <input 
    //                             type="text" 
    //                             className="habit-input" 
    //                             placeholder="Enter your new habit..."
    //                         />
    //                         <button className="add-button">
    //                             ✨ Add Habit
    //                         </button>
    //                     </div>
    //                 </div>

    //                 <div className="month-header">
    //                     <h2 className="month-title">JANUARY 2025</h2>
    //                     <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '5px' }}>
    //                         DAILY HABITS TRACKING
    //                     </div>
    //                 </div>

    //                 <div className="week-headers">
    //                     <div className="habit-column">
    //                         <div>HABITS</div>
    //                     </div>
    //                     {weeks.map((week, index) => (
    //                         <div key={week.name} className={`week-column week-${index + 1}`}>
    //                             <div>{week.name}</div>
    //                             <div className="day-numbers">
    //                                 {week.days.map(day => (
    //                                     <span key={day}>{day}</span>
    //                                 ))}
    //                             </div>
    //                         </div>
    //                     ))}
    //                     <div className="stats-column">STATS</div>
    //                 </div>

    //                 <div>
    //                     {habits.map((habit, habitIndex) => (
    //                         <div key={habitIndex} className="habit-row">
    //                             <div className="habit-name-cell">
    //                                 <span>{habit}</span>
    //                                 <div className="action-buttons">
    //                                     <Tooltip title="Edit Habit">
    //                                         <button className="edit-btn">✏️</button>
    //                                     </Tooltip>
    //                                     <Tooltip title="Delete Habit">
    //                                         <button className="delete-btn">🗑️</button>
    //                                     </Tooltip>
    //                                 </div>
    //                             </div>
                                
    //                             {weeks.map((week, weekIndex) => (
    //                                 <div key={weekIndex} className={`week-cell week-${weekIndex + 1}`}>
    //                                     {week.days.map(day => (
    //                                         <div 
    //                                             key={day} 
    //                                             className={`habit-checkbox ${Math.random() > 0.6 ? 'completed' : ''}`}
    //                                         >
    //                                             <span className="checkmark">✓</span>
    //                                         </div>
    //                                     ))}
    //                                 </div>
    //                             ))}
                                
    //                             <div className="stats-cell">
    //                                 <div className="percentage">{Math.floor(Math.random() * 40 + 60)}%</div>
    //                                 <div className="fraction">{Math.floor(Math.random() * 10 + 20)}/31</div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>

    //                 <div className="summary-row">
    //                     <div className="habit-name-cell" style={{ background: 'linear-gradient(135deg, #2d3748, #4a5568)', color: 'white' }}>
    //                         <span>MONTHLY SUMMARY</span>
    //                     </div>
    //                     {weeks.map((week, index) => (
    //                         <div key={index} className={`week-cell week-${index + 1}`} style={{ fontWeight: 'bold', justifyContent: 'center' }}>
    //                             <div>
    //                                 <div style={{ fontSize: '1.2rem', color: '#2d3748' }}>{Math.floor(Math.random() * 20 + 70)}%</div>
    //                                 <div style={{ fontSize: '0.8rem', color: '#718096' }}>{Math.floor(Math.random() * 50 + 100)}/140</div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                     <div className="stats-cell" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white' }}>
    //                         <div style={{ fontSize: '1.5rem' }}>78%</div>
    //                         <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>OVERALL</div>
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    //     }





// function Habit2() {
//   const [habitInput, setHabitInput] = useState('');
//   const [habitList, setHabitList] = useState([
//     'No more than 1 coffee',
//     'Bed by 10pm',
//     '8 Hours Sleep',
//     'Go to Gym',
//     'Wake up at 7am',
//     'Read before Bed',
//     'Make Bed',
//     'Eat Healthy Dinner',
//     'No Sugar',
//     'Meditate for 30 Minutes'
//   ]);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editingText, setEditingText] = useState('');
  
//   // Get current month info
//   const getCurrentMonthData = () => {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = now.getMonth();
//     const monthName = now.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
    
//     const days = [];
//     const weeks = [];
//     let currentWeek = [];
    
//     for (let day = 1; day <= daysInMonth; day++) {
//       const date = new Date(year, month, day - 1);
//       const dayOfWeek = date.getDay(); // 0 = Sunday
      
//       days.push(day);
//       currentWeek.push(day);
      
//       // If it's Saturday (6) or the last day of month, end the week
//       if (dayOfWeek === 6 || day === daysInMonth) {
//         weeks.push([...currentWeek]);
//         currentWeek = [];
//       }
//     }
    
//     return { monthName, days, weeks };
//   };

//   const [completedHabits, setCompletedHabits] = useState({});
//   const { monthName, days, weeks } = getCurrentMonthData();

//   const addHabit = (e) => {
//     e.preventDefault();
//     if (habitInput.trim() !== '') {
//       setHabitList([...habitList, habitInput.trim()]);
//       setHabitInput('');
//     }
//   };

//   const toggleHabit = (habitIndex, day) => {
//     const key = `${habitIndex}-${day}`;
//     setCompletedHabits(prev => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   const removeHabit = (indexToRemove) => {
//     setHabitList(habitList.filter((_, index) => index !== indexToRemove));
//     // Clean up completed habits for removed habit
//     const newCompletedHabits = { ...completedHabits };
//     Object.keys(newCompletedHabits).forEach(key => {
//       if (key.startsWith(`${indexToRemove}-`)) {
//         delete newCompletedHabits[key];
//       }
//     });
//     setCompletedHabits(newCompletedHabits);
//     // Reset editing state if we're editing the removed habit
//     if (editingIndex === indexToRemove) {
//       setEditingIndex(null);
//       setEditingText('');
//     }
//   };

//   const startEditing = (index) => {
//     setEditingIndex(index);
//     setEditingText(habitList[index]);
//   };

//   const saveEdit = () => {
//     if (editingText.trim() !== '') {
//       const updatedHabits = [...habitList];
//       updatedHabits[editingIndex] = editingText.trim();
//       setHabitList(updatedHabits);
//     }
//     setEditingIndex(null);
//     setEditingText('');
//   };

//   const cancelEdit = () => {
//     setEditingIndex(null);
//     setEditingText('');
//   };

//   const getWeekStats = (weekDays, habitIndex) => {
//     const completed = weekDays.filter(day => completedHabits[`${habitIndex}-${day}`]).length;
//     const total = weekDays.length;
//     return { completed, total, percentage: Math.round((completed / total) * 100) };
//   };

//   const getOverallStats = (habitIndex) => {
//     const completed = days.filter(day => completedHabits[`${habitIndex}-${day}`]).length;
//     const total = days.length;
//     return { completed, total, percentage: Math.round((completed / total) * 100) };
//   };

//   const getWeekColor = (weekIndex) => {
//     const colors = ['bg-pink-100', 'bg-purple-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100'];
//     return colors[weekIndex % colors.length];
//   };

//   return (
//     <div className="max-w-full mx-auto p-6 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-light text-gray-800 tracking-wider mb-2">HABIT TRACKER</h1>
//       </div>

//       {/* Add Habit Form */}
//       <div className="mb-6 bg-white p-4 rounded-lg border shadow-sm">
//         <div className="flex gap-3">
//           <input
//             type="text"
//             placeholder="Add new daily habit..."
//             value={habitInput}
//             onChange={(e) => setHabitInput(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && addHabit(e)}
//             className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={addHabit}
//             className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
//           >
//             Add Habit
//           </button>
//         </div>
//       </div>

//       {/* Main Tracker */}
//       <div className="bg-white border-2 border-gray-800 rounded-lg overflow-hidden shadow-lg">
//         {/* Month Header */}
//         <div className="bg-gray-800 text-white text-center py-3">
//           <h2 className="text-xl font-bold tracking-wide">{monthName}</h2>
//           <p className="text-sm text-gray-300">DAILY HABITS</p>
//         </div>

//         {/* Week Headers */}
//         <div className="flex border-b-2 border-gray-800">
//           <div className="w-64 bg-gray-100 border-r-2 border-gray-800"></div>
//           {weeks.map((week, weekIndex) => (
//             <div key={weekIndex} className={`flex-1 ${getWeekColor(weekIndex)} text-center py-2 border-r border-gray-400`}>
//               <div className="font-bold text-sm text-gray-700">WEEK {weekIndex + 1}</div>
//               <div className="flex justify-center mt-1">
//                 {week.map(day => (
//                   <div key={day} className="w-6 text-xs font-medium text-gray-600">
//                     {day}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//           <div className="w-20 bg-orange-100 text-center py-2 border-r border-gray-400">
//             <div className="font-bold text-xs text-gray-700">STATS</div>
//           </div>
//         </div>

//         {/* Habit Rows */}
//         <div>
//           {habitList.length === 0 ? (
//             <div className="p-8 text-center text-gray-500">
//               <p>No habits added yet. Add your first habit above!</p>
//             </div>
//           ) : (
//             habitList.map((habit, habitIndex) => (
//               <div key={habitIndex} className="flex border-b border-gray-300 hover:bg-gray-50">
//                 {/* Habit Name */}
//                 <div className="w-64 px-4 py-3 border-r-2 border-gray-800 bg-gray-50 flex items-center justify-between group">
//                   {editingIndex === habitIndex ? (
//                     <div className="flex items-center gap-2 flex-1">
//                       <input
//                         type="text"
//                         value={editingText}
//                         onChange={(e) => setEditingText(e.target.value)}
//                         onKeyPress={(e) => {
//                           if (e.key === 'Enter') saveEdit();
//                           if (e.key === 'Escape') cancelEdit();
//                         }}
//                         className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                         autoFocus
//                       />
//                       <button
//                         onClick={saveEdit}
//                         className="text-green-600 hover:text-green-700 text-xs font-bold"
//                         title="Save"
//                       >
//                         ✓
//                       </button>
//                       <button
//                         onClick={cancelEdit}
//                         className="text-red-500 hover:text-red-700 text-xs"
//                         title="Cancel"
//                       >
//                         ✕
//                       </button>
//                     </div>
//                   ) : (
//                     <>
//                       <span className="font-medium text-sm text-gray-800">{habit}</span>
//                       <div className="opacity-0 group-hover:opacity-100 flex gap-1">
//                         <button
//                           onClick={() => startEditing(habitIndex)}
//                           className="text-blue-500 hover:text-blue-700 transition-opacity text-xs"
//                           title="Edit habit"
//                         >
//                           ✏️
//                         </button>
//                         <button
//                           onClick={() => removeHabit(habitIndex)}
//                           className="text-red-500 hover:text-red-700 transition-opacity text-xs"
//                           title="Delete habit"
//                         >
//                           🗑️
//                         </button>
//                       </div>
//                     </>
//                   )}
//                 </div>
                
//                 {/* Week Columns */}
//                 {weeks.map((week, weekIndex) => (
//                   <div key={weekIndex} className={`flex-1 ${getWeekColor(weekIndex)} flex border-r border-gray-400`}>
//                     {week.map(day => {
//                       const isCompleted = completedHabits[`${habitIndex}-${day}`];
//                       return (
//                         <div key={day} className="flex-1 flex items-center justify-center py-2">
//                           <button
//                             onClick={() => toggleHabit(habitIndex, day)}
//                             className={`w-5 h-5 border-2 transition-all duration-200 ${
//                               isCompleted
//                                 ? 'bg-blue-500 border-blue-500'
//                                 : 'bg-white border-gray-400 hover:border-blue-400'
//                             }`}
//                           >
//                             {isCompleted && (
//                               <span className="text-white text-xs leading-none">✓</span>
//                             )}
//                           </button>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 ))}

//                 {/* Stats Column */}
//                 <div className="w-20 bg-orange-100 border-r border-gray-400 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="text-xs font-bold text-gray-700">
//                       {getOverallStats(habitIndex).percentage}%
//                     </div>
//                     <div className="text-xs text-gray-600">
//                       {getOverallStats(habitIndex).completed}/{getOverallStats(habitIndex).total}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Summary Row */}
//         {habitList.length > 0 && (
//           <div className="bg-gray-200 border-t-2 border-gray-800">
//             <div className="flex">
//               <div className="w-64 px-4 py-3 border-r-2 border-gray-800 bg-gray-300">
//                 <div className="font-bold text-sm text-gray-800">SUMMARY</div>
//               </div>
              
//               {weeks.map((week, weekIndex) => {
//                 const weekTotal = habitList.reduce((sum, _, habitIndex) => {
//                   return sum + getWeekStats(week, habitIndex).completed;
//                 }, 0);
//                 const weekMax = habitList.length * week.length;
//                 const weekPercentage = weekMax > 0 ? Math.round((weekTotal / weekMax) * 100) : 0;
                
//                 return (
//                   <div key={weekIndex} className={`flex-1 ${getWeekColor(weekIndex)} text-center py-3 border-r border-gray-400`}>
//                     <div className="text-sm font-bold text-gray-700">{weekPercentage}%</div>
//                     <div className="text-xs text-gray-600">{weekTotal}/{weekMax}</div>
//                   </div>
//                 );
//               })}
              
//               <div className="w-20 bg-orange-100 border-r border-gray-400 text-center py-3">
//                 <div className="text-sm font-bold text-gray-700">
//                   {Math.round((Object.values(completedHabits).filter(Boolean).length / (habitList.length * days.length)) * 100) || 0}%
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Quick Stats */}
//       {habitList.length > 0 && (
//         <div className="mt-6 bg-white p-4 rounded-lg border shadow-sm">
//           <h3 className="font-bold text-gray-800 mb-3">Monthly Overview</h3>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
//             <div className="text-center p-3 bg-blue-50 rounded">
//               <div className="text-2xl font-bold text-blue-600">{habitList.length}</div>
//               <div className="text-gray-600">Active Habits</div>
//             </div>
//             <div className="text-center p-3 bg-green-50 rounded">
//               <div className="text-2xl font-bold text-green-600">{Object.values(completedHabits).filter(Boolean).length}</div>
//               <div className="text-gray-600">Completed</div>
//             </div>
//             <div className="text-center p-3 bg-purple-50 rounded">
//               <div className="text-2xl font-bold text-purple-600">{days.length}</div>
//               <div className="text-gray-600">Days This Month</div>
//             </div>
//             <div className="text-center p-3 bg-orange-50 rounded">
//               <div className="text-2xl font-bold text-orange-600">
//                 {Math.round((Object.values(completedHabits).filter(Boolean).length / (habitList.length * days.length)) * 100) || 0}%
//               </div>
//               <div className="text-gray-600">Overall Success</div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Habit2;




