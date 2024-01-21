import { createSlice } from '@reduxjs/toolkit';

// initialState :初始化的 state，在該部分需要定義初始的 state
const initialState = {
    profile: {
        name: "",
        age: 0,
        email: "",
        login: false
    }
}

const userSlice = createSlice({
    // name:這個 Slice 的名稱，建議取跟檔名有關係的
    name: "user",
    initialState: initialState,
    // reducers :最重要的部分，在裡面我們可以定義改變 state 的 function，而 function 內預設會帶入兩個參數，分別是 state 和 action
    reducers: {
        setLogin(state, action) {
            //state:state 為我們在 initialState 內定義的變數，我們可以直接透過物件訪問的方式來修改 state，像是 state.name="wei" 。
            // action:如果有外部參數傳進來的話，我們可以利用 action 來取得，在 action 物件裡面還會有個 payload，所以記得取得外部參數的時候要使用action.payload，也可以使用解構的方式。
            const { name, age, email } = action.payload
            state.profile = {
                name,
                age,
                email,
                login: true
            }
            // console.log(action.payload)
        },
        setLogout(state) {
            state.profile = { ...initialState.profile }
        }
    }
})

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;