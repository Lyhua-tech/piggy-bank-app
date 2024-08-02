import {React, useState} from 'react';
import useUserAccount from '../../hooks/useUserAccount';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Route from '../Route';
import Link from "../Link"
import { Button } from '@mui/material';

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
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField id="outlined-basic" label="Username..." variant="outlined" value={userName} onChange={handleChangeUserName}/>
          <TextField id="outlined-basic" label="Password..." variant="outlined" value={passWord} onChange={handleChangePassWord}/>
        </div>
        <Link to='/'>
          <Button type='submit' variant="contained" color="success" >Sign Up</Button>
        </Link>
      </Box>
      <Route path="/">
        HomePage
      </Route>
    </div>

  )
}

export default SignUp