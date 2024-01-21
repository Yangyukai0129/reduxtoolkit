import { configureStore } from '@reduxjs/toolkit'
import useSlice from '../slices/useSlice'

export const store = configureStore({
    // 如何操作state，如何去改state裡面的function，如何取得state裡面值的function
    reducer: {
        // key:value
        user: useSlice
    }
})