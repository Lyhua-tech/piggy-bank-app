import {React, useState} from 'react'
import SignUp from './components/Auth/SignUp'

const App = () => {
  const [users, setUsers] = useState([]);

  const handleClick = (username) => {
    const newUser = [...users, username];
    setUsers(newUser);
    console.log(users)
    console.log(newUser)
  }

  return (
    <div>
      <SignUp onClick={handleClick}/>
    </div>
  )
}

export default App