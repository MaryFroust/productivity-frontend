import React, { useState } from 'react'
import Button from '../common/Button'


const Task = ({item, handleEdit, taskDelete,}) => {

const [isEditing, setIsEditing] = useState(false)
 const [editInput, setEditInput] = useState(item.task)


  return (

  <div className='tasklist-div'>
            {!isEditing ? (<li
                className={`li-style ${item.isDone? "li-style-isDone" : ""}`}
                onClick={() => handleEdit(item._id, { isDone: !item.isDone})}>
                {item.task}
            </li>) : (
                <input
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)} />

            )}

  {!isEditing ?
                (<Button
                    cssid={'edit-button'}
                    clickFunc={() => {
                        setIsEditing(true)
                        console.log("handle edit")
                    }}
                    buttonName={'Edit'}
                />) : (

                    <Button
                        cssid={'submit-button'}
                        clickFunc={() => {
                            handleEdit(item._id, { task: editInput })
                            setIsEditing(false)
                        }}
                        buttonName={'Submit'}
                    />
                )}

            <Button
                cssid={'completed-button'}
                clickFunc={() => {
                    handleEdit(item._id, { isDone: !item.isDone})
                    console.log("completed button")
                }}
                buttonName={'Completed'}
            />

            <Button
                cssid={'delete-button'}
                clickFunc={() => {
                    console.log('deleting')
                    taskDelete(item._id, editInput)
                }}
                buttonName={'Delete'}
            />

        </div>



  )
}

export default Task

//   name:{
//         type: String
//     },
//     year:{
//         type: Number
//     },
//     month:{
//         type: Number
//     },