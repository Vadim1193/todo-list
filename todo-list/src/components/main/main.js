import { useState } from 'react';
import ToDo from '../toDo/toDo';
import FormToDo from '../form/formTodo';
import { myTask } from './my-task';

export default function Main() {
    const [listTodo, setListTodo] = useState(myTask);

    let maxId = Math.max(...listTodo.map(item => item.id));
    
    const sortedTask = [...listTodo].sort((a, b) => {
        if (a.done === b.done) {
            return a.id - b.id;
        }
        return a.done ? -1 : 1;
    })

    const addTask = (inputValue) => {
        if (inputValue) {
            const newItem = {
                id: maxId + 1,
                task: inputValue,
                done: false,
            }

            setListTodo([...listTodo, newItem])
        }
    }

    const removeTask = (id) => setListTodo([...listTodo.filter((todo) => todo.id !== id)]);
    
    const isDone = (id) => setListTodo([...listTodo.map((todo) => todo.id === id ? {...todo, done: !todo.done} : {...todo})]);

    return (
        <main>
            <div className='container-todo'>
                {sortedTask.map((toDo) => {
                    return (
                        <ToDo 
                            key={toDo.id}
                            todo={toDo}
                            isDone={isDone}
                            removeTask={removeTask}
                        />
                    )
                })}
                <div className='wrapper-form'>
                    <FormToDo addTask={addTask}/>
                </div>
            </div>
        </main>
    )
}



