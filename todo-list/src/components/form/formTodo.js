import { useState } from "react";

export default function FormToDo(props) {
    const [inputValue, setInputValue] = useState('');

    const capitalLetter = (str) => {
        if (str) {
            return str[0].toUpperCase() + str.substring(1);
        } else {
            return;
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.addTask(capitalLetter(inputValue));
        setInputValue('');
    }

    const changeHandler = (event) => setInputValue(event.target.value);

    return (
        <form onSubmit={submitHandler}>
            <input 
                value={inputValue}
                type="text"
                onChange={changeHandler}
                placeholder="Enter your task...."  
            />
            <button>Save</button>
        </form>
    )
}