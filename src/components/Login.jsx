import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogout } from '../slices/useSlice'

const Login = () => {
    const state = useSelector(state => state.user)
    const dispatch = useDispatch()
    const { name, age, email } = state.profile
    const handleLogout = () => { dispatch(setLogout()) }
    return (
        <div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Email:{email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Login