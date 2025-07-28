import Goal from './components/Goals/Goals'
import Habit from './components/Habit/Habit'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import SignUp from './components/SignUp/SignUp'
import Task from './components/Tasks/Task'
import Home from './components/Home'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'

// import HabitList from './components/Habit/HabitList'

function MainRouter({ user, handleLogout, handleLogin }) {

    const [goalInput, setGoalInput] = useState('')
    const [habitInput, setHabitInput] = useState('')
    const [taskInput, setTaskInput] = useState('')

    return (

        //  <div>MainRouter</div>

        <BrowserRouter>
            <Nav user={user} handleLogout={handleLogout}
                goalInput={goalInput} setGoalInput={setGoalInput}
                habitInput={habitInput} setHabitInput={setHabitInput}
                taskInput={taskInput} setTaskInput={setTaskInput}
            />

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/login' element={user ? <Navigate to='/' /> : <Login handleLogin={handleLogin} />} />

       
                <Route path='/goals' element={<PrivateRoute><Goal /></PrivateRoute>} />
                <Route path='/habits' element={<Habit />} />
                <Route path='/tasks' element={<PrivateRoute><Task /></PrivateRoute>} />
                <Route path='/about-us' element={<PrivateRoute><About-Us /></PrivateRoute>} />
                <Route path='/profile' element={
                    <PrivateRoute>
                        <Profile user={user} />
                    </PrivateRoute>
                } />


            </Routes>
        </BrowserRouter>

    )
}

export default MainRouter



 {/* <Route path="/goal-detail/:id" element={<GoalDetail />} />
                <Route path="/habit-detail/:id" element={<HabitDetail />} />
                <Route path="/task-detail/:id" element={<TaskDetail />} /> */}