import userAccountContext from '../contexts/userAccount'
import { React, useContext } from 'react'

const useUserAccount = () => {
    return useContext(userAccountContext)
}

export default useUserAccount;