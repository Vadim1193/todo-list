
export default function ToDo(props) {
    return (
        <div key={props.todo.id} className="item-todo">
            <p  
                className={props.todo.done ? "done" : ""}
                onClick={()=> props.isDone(props.todo.id)}
                >
                {props.todo.task}
            </p>
            <div className="item-delete" onClick={() => props.removeTask(props.todo.id)}>
                &times;
            </div>
        </div>
    )
}