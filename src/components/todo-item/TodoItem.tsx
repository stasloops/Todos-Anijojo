import React, { FC } from 'react'
import { Todo } from '../../types/todos'
import './TodoItem.scss'

type TodoItemProps = {
    item: Todo
    deleteTodo: (item: number) => void
}

const TodoItem: FC<TodoItemProps> = ({ item, deleteTodo }) => {
    return (
        <div className='item'>
            <div className='item__done'>
                {item.active === 1 ?
                    <span className='item__done-active'></span>
                    :
                    null
                }
            </div>
            <h3 style={{ textDecoration: item.active === 1 ? 'line-through' : '' }} className='item__title'>
                {item.title}
            </h3>
            <span onClick={() => deleteTodo(item.id)} className='item__delete'>
                x
            </span>
        </div>
    )
}

export default TodoItem