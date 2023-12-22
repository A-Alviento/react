import { configureStore } from '@reduxjs/toolkit' // configureStore function does all the hard work; it creates the store which holds our state, combines our reducers and has some nice built in middleware

export default configureStore({
    reducer: {}
})