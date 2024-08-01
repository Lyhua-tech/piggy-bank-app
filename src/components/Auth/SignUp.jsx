import {React, useState} from 'react';
import useUserAccount from '../../hooks/useUserAccount';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  const { createAccount } = useUserAccount()
  
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
    createAccount(userName, passWord);
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