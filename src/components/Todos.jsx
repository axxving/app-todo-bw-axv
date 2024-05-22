import { Todo } from './Todo';

export const Todos = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div className="mt-5">
            <h1 className="text-center mb-5">TODOS</h1>
            <ul className='list-group'>
                {
                    todos.map(todo => (
                        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                    ))
                }
                {
                    todos.length === 0 && <li className='list-group-item text-center'>Sin TODOS</li>
                }
            </ul>
        </div>
    )
}
