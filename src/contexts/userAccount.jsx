import {React, createContext, useState} from 'react';

const userAccountContext = createContext();

const UserAccountProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const createAccount = (username, password) => {
        const newUser = [...users,  {username, password} ];
        setUsers(newUser);
        console.log(newUser)
    }
    
    const valueShare = {
        createAccount,
        users
    }
    return (
        <userAccountContext.Provider value={valueShare}>
            {children}
        </userAccountContext.Provider>
    )
}

export { UserAccountProvider }
export default userAccountContext;