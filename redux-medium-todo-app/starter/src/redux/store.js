import { configureStore } from '@reduxjs/toolkit' // configureStore function does all the hard work; it creates the store which holds our state, combines our reducers and has some nice built in middleware
import todoReducer from './todoSlice'; // import the todoSlice reducer function

export default configureStore({
    reducer: {
        todos: todoReducer, // add the todoSlice reducer function to the store
    }
})