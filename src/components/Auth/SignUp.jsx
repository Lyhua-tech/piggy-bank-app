import {React, useState} from 'react'

const SignUp = ({ onClick }) => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  
  const handleChangeUserName = (event) => {
    let inputUsername = event.target.value;
    setUserName(inputUsername);
  }
  const handleChangePassWord = (event) => {
    let inputPassword = event.target.value;
    setPassWord(inputPassword);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onClick(userName);
    setUserName('');
    setPassWord('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username...' value={userName} onChange={handleChangeUserName}/>
        <input type="text" placeholder='Password...' value={passWord} onChange={handleChangePassWord}/>
        <button type='submit'>Sign Up</button>
    </form>
  )
}

export default SignUp