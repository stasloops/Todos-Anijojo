import React, { FC } from 'react'
import { Todo } from '../../types/todos'
import TodoItem from '../todo-item/TodoItem'
import './TodoList.scss'

type TodoListProps = {
  todos: Todo[]
  activeChanger: (item: number) => void
  deleteTodo: (item: number) => void
}

const TodoList: FC<TodoListProps> = ({ todos, activeChanger, deleteTodo }) => {
  return (
    <main className='list'>
      {
        todos.length ?
          todos.map((item) => (
            <div className='list__item' key={item.id} onClick={() => activeChanger(item.id)}>
              <TodoItem item={item} deleteTodo={deleteTodo}/>
            </div>
          ))
          :
          <h2 className='list__warning'>Таких задач нет</h2>
      }
    </main>
  )
}

export default TodoList