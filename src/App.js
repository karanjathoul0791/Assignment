import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
const userData = [{ name: 'Chennai' }, { name: 'Banglore' }, { name: 'Mumbai' }, { name: 'Delhi' }]
function App() {
   const [users, setUsers] = useState([])
   useEffect(() => {
      setUsers(userData)
   }, [])
   const handleChange = (e) => {
      const { name, checked } = e.target
      if (name === 'allSelect') {
         let tempUser = users.map((user) => {
            return { ...user, isChecked: checked }
         })
         setUsers(tempUser)
      } else {
         let tempUser = users.map((user) =>
            user.name === name ? { ...user, isChecked: checked } : user
         )
         setUsers(tempUser)
      }
   }
   return (
      <div>
         <form>
            <h3>Select User</h3>
            <div>
               <input
                  type='checkbox'
                  name='allSelect'
                  onChange={handleChange}
                  checked={users.filter((user) => user?.isChecked !== true).length < 1}
               />
               <label>All Select</label>
            </div>
            {users.map((user) => (
               <div>
                  <input
                     type='checkbox'
                     name={user.name}
                     onChange={handleChange}
                     checked={user?.isChecked || false}
                  />
                  <label>{user.name}</label>
               </div>
            ))}
         </form>
      </div>
   )
}

export default App
