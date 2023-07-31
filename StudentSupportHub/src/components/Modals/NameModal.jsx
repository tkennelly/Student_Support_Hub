import { useState } from 'react'

const NameModal = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null;

    const [newName, setNewName] = useState('')
    const [error, setError] = useState('')
  
    const handleInputChange = (event) => {
        setNewName(event.target.value)
        setError('')
    }

    const handleConfirm = () => {
      if(newName === '') {
        setError('You must input an updated name.')
      } else{
        onConfirm(newName)
        setNewName('')
        setError('')
      }
    }

    console.log(newName)


    return (
      <div>
        <div>
          <h3>Please input updated name:</h3>
          <p>Note: Due to legal reasons, only first name can be changed.</p>
          <input 
            type="text" 
            placeholder="Update Student's First Name..." 
            value={newName}
            onChange={handleInputChange}
          />
          {error && <p>{error}</p>}

          <div>
            <button onClick={onCancel}>
              Cancel
            </button>
            <button onClick={handleConfirm}>
              Update
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default NameModal