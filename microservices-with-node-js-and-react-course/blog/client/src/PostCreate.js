import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP request

export default () => {
    const[title, setTitle] = useState(''); 

    /**
     * this is an async function that handles the form's `onSubmit` event
     * `event.preventDefault();` prevents the default form submission behaviour which typically causes a page reload 
     * `await axios.post('http://localhost:4000/posts', { title });` uses axios to make a POST request to the specified HTTP, sending title as the request body
     * `setTitle('')` resets `title` state to an empty string after submitting the form
     */ 
    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    };

    /**
     * `div` wraps the entire form
     * `form` element has `onSubmit` handler
     * inside the form, there is a `div` 
     * a `label` displays the text "Title"
     * `input` field lets the user enter the post's title; it has the following properties:
        *  `value={title}` binds the input's value to the `title` state
        * `onChange={e => setTitle(e.target.value)}` updates `title` state whenever the input changes
     */
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        value={title} 
                        onChange={e => setTitle(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};