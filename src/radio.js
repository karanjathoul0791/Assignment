import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
function App() {
   const [formData, setFormData] = useState({
      isAgree: false,
      gender: 'female',
   })
   const handleChange = (e) => {
      const target = e.target
      const name = target.name
      const value = target.type === 'checkbox' ? target.checked : target.value
      // alert(`${name} ${value}`)
      setFormData({ ...formData, [name]: value })
   }
   return (
      <form>
         <div>
            <lable>Male</lable>
            <input
               type='radio'
               name='gender'
               value='male'
               onChange={handleChange}
               checked={formData.gender === 'male'}
            />
            <br />
            <lable>Female</lable>
            <input
               type='radio'
               name='gender'
               value='female'
               onChange={handleChange}
               checked={formData.gender === 'female'}
            />
         </div>
         <div>
            <input
               type='checkbox'
               name='isAgree'
               checked={formData.isAgree}
               onChange={handleChange}
            />
            <label> Do you agree</label>
         </div>
         <p>Gender: {formData.gender}</p>
         <p>is Agree: {formData.isAgree ? 'yes' : 'no'} </p>
      </form>
   )
}

export default App
