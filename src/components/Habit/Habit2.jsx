
import React, { useEffect, useState } from 'react'
import Axios from '../../utils/Axios'
import './Habit.css'
import { Button, ConfigProvider, Flex } from 'antd'
// import { useResponsive } from 'antd-style'

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

    const [habits, setHabits] = useState(mockData)
    const [newHabit, setNewHabit] = useState('')
    const [editHabit, setEditHabit] = useState('')
    const [habitIndex, setHabitIndex] = useState(null)

    // const { xxl } = useResponsive();

    const today = new Date()
    const [month, setMonth] = useState(today.getMonth() + 1)
    const [year, setYear] = useState(today.getFullYear())


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
        try {
            await Axios.delete(`/habits/delete-habit-by-id/${id}`)
            const newList = habits.filter(item => item._id !== id)
            setHabits(newList)
        } catch (error) {
            console.log(error)
        }
    }

    const addHabit = async () => {
        if (newHabit === '')
            return
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1

        try {
            const response = await Axios.post('/habits/create-habit', {
                name: newHabit,
                year,
                month,
            })
            setHabits([...habits, response.data.payload])
            setNewHabit('')
        } catch (error) {
            console.log("Error adding habit:", error)
        }
    }

    const handleEdit = (id) => {
        setHabitIndex(id)
        setEditHabit(habits[id].name)
    }

    const saveEdit = async (id) => {
        const updatedHabits = [...habits]
        updatedHabits[habitIndex].name = editHabit

        try {
            const response = await Axios.put(`/habits/update-habit-by-id/${id}`, {
                name: editHabit,
            })
            const newList = habits.map((item) =>
                item._id === id ? response.data.payload : item
            )
            setHabits(newList)
            setHabitIndex(null)
            setEditHabit('')
        } catch (error) {
            console.log(error)
        }
    }

    const toggleDay = async (habitId, day) => {
        const updatedHabits = habits.map(habit => {
            if (habit._id === habitId) {
                const alreadyCompleted = habit.daysCompleted.includes(day);
                const updatedDays = alreadyCompleted
                    ? habit.daysCompleted.filter(d => d !== day)
                    : [...habit.daysCompleted, day];
         console.log(habit)
                return { ...habit, daysCompleted: updatedDays }
            }
            return habit
        })
        setHabits(updatedHabits)
        // try {
        //     await Axios.put(`/habits/toggle-day`, { habitId, day, })

        // } catch (error) {
        //     console.log("Error toggling day:", error)
        //     setHabits(habits)
        // }
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
        // const today = new Date()
        // setMonth(today.getMonth() + 1)
        // setYear(today.getFullYear())

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



    return (
        <div className="habit-page-container">
            <div className="background-animation"></div>

            <div className="habit-content">
                <div className='form-div'>
                    <h1 className="main-title">🎯 Habit Tracker</h1>
                    <p className="subtitle">Build consistency, one day at a time</p>
                    <div className="month-year-display">
                        <div className="month-navigation">
                            <button className="nav-btn" onClick={goToPreviousMonth}>
                                ← Previous
                            </button>
                            <h2 className="current-month">
                                📅 {new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })}
                            </h2>
                            <button className="nav-btn" onClick={goToNextMonth}>
                                Next →
                            </button>
                        </div>
                        <button className="current-btn" onClick={goToCurrentMonth}>
                            📍 Current Month
                        </button>
                    </div>
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

                                                style={{
                                                    // backgroundColor: isCompleted ? '#28a745' : '#f0f0f0', 
                                                    // backgroundColor: isCompleted ? '#ed17c9ff' : '#d7f114ff',


                                                    backgroundColor: isCompleted ? '#04ecb2' : '#c9f409',
                                                    // ,135deg,
                                                    // color: isCompleted ? 'white' : '#666',
                                                    color: isCompleted ? 'white' : '#666',

                                                    // borderColor: isCompleted ? '#28a745' : '#ddd',
                                                    borderColor: isCompleted ? '#f50cd6ff' : '#09d1f9ff',

                                                    transform: isCompleted ? 'scale(1.05)' : 'scale(1)'

                                                }}
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
    )
}

export default Habit


























































