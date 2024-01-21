import React from 'react'
import NotLogin from './NotLogin'
import Login from './Login'
// useDispatch使用redux定義的function
// useSelector取得redux定義的state
import { useSelector } from 'react-redux'

const Profile = () => {
    // user:在store定義的名稱
    const state = useSelector(state => state.user)
    // console.log(state)
    return (
        <div style={{ marginTop: "50px" }}>
            {state.profile.login ? <Login /> : <NotLogin />}
        </div>
    )
}

export default Profile