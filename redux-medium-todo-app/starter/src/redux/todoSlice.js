import { createSlice } from '@reduxjs/toolkit' // createSlice function allows us to create a slice of our state and the actions that can update that state

/**
 * createSlice function takes an object as an argument with 3 properties: name, initialState, reducers
 * name: the name of the slice
 * initialState: the initial state of the slice
 * reducers: an object that contains reducer functions that can update the state
 * 
 * a slice is a piece of the state
 */
export const todoSlice = createSlice({ 
    name: 'todos', // name of the slice

    // initial state of the slice
    initialState: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: true },
        { id: 4, title: 'todo4', completed: false },
        { id: 5, title: 'todo5', completed: false },
    ],

    // reducers are functions that can update the state
    reducers: {
        // addTodo is a reducer function that can update the state
        addTodo: (state, action) => { 
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
        },
    },
});

export const { addTodo } = todoSlice.actions; // todoSlice.actions is an object that contains all the reducer functions

export default todoSlice.reducer; // export the todoSlice reducer function