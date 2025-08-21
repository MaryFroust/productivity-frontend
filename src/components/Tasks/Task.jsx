import React, { useState, useEffect } from 'react'
import Axios from '../../utils/Axios'
import './Task.css'
// import Button from '../common/Button'
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import {
    Box,
    Typography,
    Grid,
    Paper,
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Chip,
    IconButton,
} from '@mui/material';


const drawerWidth = 240; // Same as used in Nav

// const Task = ({item, handleEdit, taskDelete,}) => {

const mockData = [{
    name: "call bank",
    status: "in progress",
    priority: "high",
    date: Date.now(),
    dueDate: "2025-08-20"
},
{
    name: "call bank",
    status: "in progress",
    priority: "high",
    date: Date.now(),
    dueDate: "2025-08-20"
},
{
    name: "call bank",
    status: "in progress",
    priority: "high",
    date: Date.now(),
    dueDate: "2025-08-20"
},
]

function Task() {
    // const [tasks, setTasks] = useState(mockData)
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const [priority, setPriority] = useState('low');
    const [status, setStatus] = useState('todo');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');


    const [editTask, setEditTask] = useState('')
    const [taskIndex, setTaskIndex] = useState(null)
    const [editPriority, setEditPriority] = useState('')
    const [editStatus, setEditStatus] = useState('')
    const [editingField, setEditingField] = useState(null)
    const [editDueDate, setEditDueDate] = useState('')



    const today = new Date()
    const [month, setMonth] = useState(today.getMonth() + 1)
    const [year, setYear] = useState(today.getFullYear())

    // const { xxl } = useResponsive();

    // const [isEditing, setIsEditing] = useState(false)
    //  const [editInput, setEditInput] = useState(item.task)



    useEffect(() => {
        const getTaskByMonth = async () => {
            try {
                const response = await Axios.post('/tasks/get-tasks-by-month', {
                    month,
                    year,
                })
                console.log(response.data)
                setTasks(response.data.payload);

            } catch (error) {
                console.error("Error fetching tasks:", error)
            }
        }
        getTaskByMonth()
    }, [month, year])

    const addTask = async () => {
        if (newTask === '')
            return
        // const today = new Date()
        // const status = today.status()
        // const date= Date.now()
        // const dueDate = new Date()

        try {
            const response = await Axios.post('/tasks/create-task', {
                name: newTask,
                priority: priority,
                description: description,
                status: status,
                dueDate: dueDate || null

            })
            setTasks([...tasks, response.data.payload])
            setNewTask('')
            setPriority('low')
            setStatus('todo')
            setDueDate('')
        } catch (error) {
            console.log("Error adding task:", error)
        }
    }

    const taskDelete = async (id) => {
        try {
            await Axios.delete(`/tasks/delete-task-by-id/${id}`)
            const newList = tasks.filter(item => item._id !== id)
            setTasks(newList)
        } catch (error) {
            console.log(error)
        }
    }



    const handleEdit = (index) => {
        const task = tasks[index]
        setTaskIndex(index)
        setEditTask(task.name)
        setEditPriority(task.priority || 'low')
        setEditStatus(task.status || 'todo')
        setEditDueDate(task.dueDate || '')
    }


    const saveEdit = async (id) => {
        const updatedTasks = [...tasks]
        updatedTasks[taskIndex].name = editTask

        try {
            const response = await Axios.put(`/tasks/update-task-by-id/${id}`, {
                name: editTask,
                priority: editPriority,
                status: editStatus,
                dueDate: editDueDate || null
            })
            const newList = tasks.map((item) =>
                item._id === id ? response.data.payload : item
            )
            setTasks(newList)
            setTaskIndex(null)
            setEditTask('')
            setEditPriority('')
            setEditStatus('')
            setEditDueDate('')
            setEditingField(null)
        } catch (error) {
            console.log(error)
        }
    }

    const goToPreviousMonth = () => {
        try {
            if (month === 1) {
                setMonth(12)
                setYear(year - 1)
            } else {
                setMonth(month - 1)
            }
        } catch (error) {
            console.error('Error navigating to previous month:', error)

        }
    }

    const goToNextMonth = () => {
        try {
            if (month === 12) {
                setMonth(1)
                setYear(year + 1)
            } else {
                setMonth(month + 1)
            }
        } catch (error) {
            console.error('Error navigating to next month:', error)
        }
    }

    const goToCurrentMonth = () => {
        try {
            const today = new Date()
            setMonth(today.getMonth() + 1)
            setYear(today.getFullYear())
        } catch (error) {
            console.error('Error getting current month:', error)
        }
    }


    // async function completeTask(id) {
    //   try {
    //     const response = await Axios.post(`/tasks/complete-task/${id}`)
    //     setTasks(prev => prev.filter(task => task.id !== id))
    //     console.log(response.data.message);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    function getStatusColor(status) {
        switch (status) {
            case 'todo':
                return '#9e9e9e'; // gray
            case 'in progress':
                return '#2196f3'; // blue
            case 'on hold':
                return '#ff9800'; // orange
            case 'complete':
                return '#4caf50'; // green
            case 'stuck':
                return '#f44336'; // red
            default:
                return '#bdbdbd'; // fallback gray
        }
    }

    return (       
        <Box 
         className="task-manager-main-content"
         
            sx={{
                marginLeft: `${drawerWidth}px`,
                padding: 3,
                // backgroundColor: '#f4f6f8',
                backgroundColor: 'transparent',
                minHeight: '100vh',
            }}
        >
            
            <Typography  variant="h4"  align="center" gutterBottom>
                Task Manager
            </Typography>

            {/* <div className="task-page"> */}
                {/* <h1 className="page-title">📝✨ Task Manager ✨📝</h1> */}

                <div className="month-year-display">
                    <div className="month-navigation">
                        <button className="nav-btn" onClick={goToPreviousMonth}>
                            ← Previous
                        </button>

                        <h2 className="current-month">
                            📅 {new Date(year, month - 1).toLocaleString('default', {
                                month: 'long',
                                year: 'numeric',
                            })}
                        </h2>

                        <button className="nav-btn" onClick={goToNextMonth}>
                            Next →
                        </button>
                    </div>

                    <button className="current-btn" onClick={goToCurrentMonth}>
                        📍 Current Month
                    </button>
                </div>




            {/* <Box display="flex" flexDirection="row" alignItems="center" my={2}>
              
                <Button variant="outlined" onClick={() => goToPreviousMonth('prev')}>
                    ⬅️ Previous
                </Button>

                <Typography variant="h6" sx={{ mx: 2 }}>
                    📅 {new Date(year, month - 1).toLocaleString('default', {
                        month: 'long',
                        year: 'numeric',
                    })}
                </Typography>

                <Button variant="outlined" onClick={() => goToNextMonth('next')}>
                    Next ➡️
                </Button>
            </Box> */}




            {/* <Button
                onClick={goToCurrentMonth}
                variant="text"
                size="small"
                sx={{ mt: 1, fontStyle: 'italic' }}
            >
                📍 Current Month
            </Button> */}




            <Paper sx={{ padding: 3, marginBottom: 4 }}>
                <Typography variant="h6" gutterBottom>
                    ➕ Add / Edit Task
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>

                        <TextField
                            label="Task Title"
                            fullWidth
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            label="Description"
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>

                        <TextField
                            label="Due Date"
                            type="date"
                            fullWidth
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                        />

                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <FormControl fullWidth>
                            <InputLabel>Priority</InputLabel>

                            <Select
                                label="Priority"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <MenuItem value="high">
                                    <Chip label="High" sx={{ backgroundColor: 'red', color: 'white' }} />
                                </MenuItem>
                                <MenuItem value="medium">
                                    <Chip label="Medium" sx={{ backgroundColor: 'gold', color: 'black' }} />
                                </MenuItem>
                                <MenuItem value="low">
                                    <Chip label="Low" sx={{ backgroundColor: 'blue', color: 'white' }} />
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <FormControl fullWidth>
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                label="Status">
                                <MenuItem value="todo">📋 To Do</MenuItem>
                                <MenuItem value="in progress">▶️ In Progress</MenuItem>
                                <MenuItem value="on hold">⏸️ On Hold</MenuItem>
                                <MenuItem value="complete">✅ Complete</MenuItem>
                                <MenuItem value="stuck">⚠️ Stuck</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>

                        {/* <div className="add-task-form"> 
                         <input
                            type="text"
                            className="new-habit-input"
                            placeholder="Enter your new habit..."
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && addTask()}
                        /> */}

                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ height: '100%' }}
                            onClick={addTask}
                        >
                            Save Task
                        </Button>
                        {/* </div> */}

                    </Grid>
                </Grid>
            </Paper>

            {/* Task List */}
            <Typography variant="h6" gutterBottom>
                📋 Your Tasks
            </Typography>

            <Grid container spacing={2}>
                {tasks.map((task, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>


                        {/* Edit/Delete actions */}




                        <Paper sx={{ padding: 2, position: 'relative' }}>

                            {taskIndex === index ? (
                                <>
                                    {/* Editable Title */}
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={editTask}
                                        onChange={(e) => setEditTask(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && saveEdit(task._id)}
                                        autoFocus
                                    />

                                    {/* Editable Chips */}
                                    <Box mt={1} display="flex" gap={1} flexWrap="wrap" alignItems="center">
                                        {/* Due Date */}
                                        {editingField === 'dueDate' ? (
                                            <TextField
                                                type="date"
                                                size="small"
                                                value={editDueDate ? new Date(editDueDate).toISOString().split('T')[0] : ''}
                                                onChange={(e) => setEditDueDate(e.target.value)}
                                                onBlur={() => setEditingField(null)}
                                                InputLabelProps={{ shrink: true }}
                                                sx={{ minWidth: 130 }}
                                            />
                                        ) : (
                                            <Chip
                                                label={`Due: ${new Date(editDueDate).toLocaleDateString()}`}
                                                size="small"
                                                onClick={() => setEditingField('dueDate')}
                                                sx={{ cursor: 'pointer' }}
                                            />
                                        )}

                                        {/* Priority */}
                                        {editingField === 'priority' ? (
                                            <FormControl size="small">
                                                <Select
                                                    value={editPriority}
                                                    onChange={(e) => {
                                                        setEditPriority(e.target.value);
                                                        setEditingField(null);
                                                    }}
                                                    onBlur={() => setEditingField(null)}
                                                    autoFocus
                                                    sx={{
                                                        backgroundColor:
                                                            editPriority === 'high' ? 'red' :
                                                                editPriority === 'medium' ? 'gold' : 'blue',
                                                        color: editPriority === 'medium' ? 'black' : 'white',
                                                        height: 32,
                                                        fontSize: 12,
                                                        textTransform: 'capitalize',
                                                    }}
                                                >
                                                    <MenuItem value="high">High</MenuItem>
                                                    <MenuItem value="medium">Medium</MenuItem>
                                                    <MenuItem value="low">Low</MenuItem>
                                                </Select>
                                            </FormControl>
                                        ) : (
                                            <Chip
                                                size="small"
                                                label={`Priority: ${editPriority}`}
                                                onClick={() => setEditingField('priority')}
                                                sx={{
                                                    backgroundColor:
                                                        editPriority === 'high' ? 'red' :
                                                            editPriority === 'medium' ? 'gold' : 'blue',
                                                    color: editPriority === 'medium' ? 'black' : 'white',
                                                    textTransform: 'capitalize',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        )}

                                        {/* Status */}
                                        {editingField === 'status' ? (
                                            <FormControl size="small">
                                                <Select
                                                    value={editStatus}
                                                    onChange={(e) => {
                                                        setEditStatus(e.target.value);
                                                        setEditingField(null);
                                                    }}
                                                    onBlur={() => setEditingField(null)}
                                                    autoFocus
                                                    sx={{
                                                        backgroundColor: getStatusColor(editStatus),
                                                        color: 'white',
                                                        height: 32,
                                                        fontSize: 12,
                                                        textTransform: 'capitalize',
                                                    }}
                                                >
                                                    <MenuItem value="todo">To Do</MenuItem>
                                                    <MenuItem value="in progress">In Progress</MenuItem>
                                                    <MenuItem value="on hold">On Hold</MenuItem>
                                                    <MenuItem value="complete">Complete</MenuItem>
                                                    <MenuItem value="stuck">Stuck</MenuItem>
                                                </Select>
                                            </FormControl>
                                        ) : (
                                            <Chip
                                                size="small"
                                                label={`Status: ${editStatus}`}
                                                onClick={() => setEditingField('status')}
                                                sx={{
                                                    backgroundColor: getStatusColor(editStatus),
                                                    color: 'white',
                                                    textTransform: 'capitalize',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        )}
                                    </Box>

                                    {/* Save / Cancel */}
                                    <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
                                        <Button variant="contained" size="small" onClick={() => saveEdit(task._id)}>
                                            ✅ Save
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() => {
                                                setTaskIndex(null);
                                                setEditTask('');
                                                setEditPriority('');
                                                setEditStatus('');
                                                setEditDueDate('');
                                                setEditingField(null);
                                            }}
                                        >
                                            ❌ Cancel
                                        </Button>
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        {task.name}
                                    </Typography>

                                    {task.description && (
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            📝 {task.description}
                                        </Typography>
                                    )}

                                    <Typography variant="body2" color="text.secondary">
                                        Created: {new Date(task.date).toLocaleDateString()}
                                    </Typography>

                                    <Box mt={1} display="flex" gap={1} flexWrap="wrap" alignItems="center">
                                        <Chip
                                            label={`Due: ${new Date(task.dueDate).toLocaleDateString()}`}
                                            size="small"
                                        />
                                        <Chip
                                            label={`Priority: ${task.priority}`}
                                            size="small"
                                            sx={{
                                                backgroundColor:
                                                    task.priority === 'high' ? 'red' :
                                                        task.priority === 'medium' ? 'gold' : 'blue',
                                                color: task.priority === 'medium' ? 'black' : 'white',
                                                textTransform: 'capitalize',
                                            }}
                                        />
                                        <Chip
                                            label={`Status: ${task.status}`}
                                            size="small"
                                            sx={{
                                                backgroundColor: getStatusColor(task.status),
                                                color: 'white',
                                                textTransform: 'capitalize',
                                            }}
                                        />
                                    </Box>

                                    <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
                                        <IconButton
                                            size="small"
                                            color="primary"
                                            onClick={() => handleEdit(index)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            size="small"
                                            color="error"
                                            onClick={() => taskDelete(task._id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </>
                            )}
                        </Paper>
                    </Grid>
                ))}

                {/* Add more Task Cards here */}
            </Grid>


            {/* <Typography variant="subtitle1" fontWeight="bold">
                                {task.name}
                            </Typography> */}



        </Box >
    );
};




export default Task

