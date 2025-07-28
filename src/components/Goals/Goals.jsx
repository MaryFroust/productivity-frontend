
import { useState } from "react"
import Button from '../common/Button'

function Goals({ item, handleEdit, goalDelete, }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editInput, setEditInput] = useState(item.goal)





  return (

    <div className='goallist-div'>
      {!isEditing ? (<li
        className={`li-style ${item.isDone ? "li-style-isDone" : ""}`}
        onClick={() => handleEdit(item._id, { isDone: !item.isDone })}>
        {item.name}
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
              handleEdit(item._id, { goal: editInput })
              setIsEditing(false)
            }}
            buttonName={'Submit'}
          />
        )}

      <Button
        cssid={'completed-button'}
        clickFunc={() => {
          handleEdit(item._id, { isDone: !item.isDone })
          console.log("completed button")
        }}
        buttonName={'Completed'}
      />

      <Button
        cssid={'delete-button'}
        clickFunc={() => {
          console.log('deleting')
          goalDelete(item._id, editInput)
        }}
        buttonName={'Delete'}
      />

    </div>


  )
}

export default Goals

