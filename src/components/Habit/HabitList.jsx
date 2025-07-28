  import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Habit from './Habit'
import axios from 'axios'



const HabitList = () => {

    const [habitList, setHabitList] = useState([])
    const [habitInput, setHabitInput] = useState("")

    
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
    //     async function fetchHabits() {
    //         try {
    //             const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
    //             setHabitList(response.data.payload)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchHabits()
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


    // async function oldestFirst() {
    //     try {
    //         const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
    //         console.log(response)
    //         const sortedItems = response.data.payload.sort((o, n) => new Date(o.date) - new Date(n.date))
    //         setHabitList(sortedItems)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // async function allPurchasedItems() {
    //     try {
    //         const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
    //         const purchasedItems = response.data.payload.filter(item => item.isDone === true)
    //         setHabitList(purchasedItems)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // async function newestFirst() {
    //     try {
    //         const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
    //         console.log(response)
    //         const sortedItems = response.data.payload.sort((o, n) => new Date(n.date) - new Date(o.date))
    //         setHabitList(sortedItems)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    // async function nonPurchasedItems() {
    //     try {
    //         const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
    //         const notDone = response.data.payload.filter(item => item.isDone === false)
    //         setHabitList(notDone)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    // useEffect(() => {
    //     async function getAllHabits() {
    //         try {
    //             const response = await axios.get('http://localhost:3000/api/habits/get-all-habits')
    //             setHabitList(response.data.payload)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getAllHabits()
    // }, [])

    // async function handleEdit(id, updateObj) {
    //     try {
    //         const response = await axios.put(`http://localhost:3000/api/habits/update-habit-by-id/${id}`, updateObj)
    //         console.log(response.data.payload)
    //         const newList = habitList.map(item => {
    //             if (item._id === id) {
    //                 item = response.data.payload
    //             }
    //             return item
    //         })
    //         setHabitList(newList)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // async function habitDelete(id, deleteObj) {
    //     try {
    //         await axios.delete(`http://localhost:3000/api/habits/delete-habit-by-id/${id}`, deleteObj)
    //         const newList = habitList.filter(item => item._id !== id)
    //         setHabitList(newList)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    // async function addHabit(event) {
    //     try {
    //         event.preventDefault()
    //         if (habitInput === '') {
    //             return
    //         }
    //         const response = await axios.post('http://localhost:3000/api/habits/create-habit', { habit: habitInput })
    //         setHabitList([...habitList, response.data.payload])
    //         setHabitInput('')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // return (
    //     <div>
    //         <div className='form-div'>
    //             <form onSubmit={e => addHabit(e)}>
    //                 <input
    //                     type="text"
    //                     name="habit"
    //                     value={habitInput}
    //                     onChange={e => setHabitInput(e.target.value)}
    //                 />
    //                 <button type='add'>Add Item</button>
    //             </form>
    //         </div>
    //         <div className='habit-div'>
    //             <ul>

    //                 <div className='sorted-options'>
    //                     <button onClick={oldestFirst}>Sort Oldest to Newest</button>
    //                     <button onClick={newestFirst}>Sort Newest to Oldest</button>
    //                     <button onClick={allPurchasedItems}>Purchased Items</button>
    //                     <button onClick={nonPurchasedItems}>Not yet Purchased</button>

    //                 </div>
    //                 {
    //                     habitList.map((item) => {
    //                         return <Habit

    //                             key={item._id}
    //                             item={item}
    //                             oldestFirst={oldestFirst}
    //                             groceryPurchased={groceryPurchased}
    //                             handleEdit={handleEdit}
    //                             habitDelete={habitDelete} />
    //                     })
    //                 }
    //             </ul>
    //         </div>
    //     </div>
    )
}

export default HabitList