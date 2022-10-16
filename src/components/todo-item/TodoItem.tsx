import React, { FC } from 'react'
import { Todo } from '../../types/todos'
import './TodoItem.scss'

type TodoItemProps = {
    item: Todo
    deleteTodo: (item: number) => void
}

const TodoItem: FC<TodoItemProps> = ({ item, deleteTodo }) => {
    return (
        <div style={{display: item.title.length < 20 ? 'flex' : ''}} className='item'>
            <div className='item__top'>
                <div style={{marginBottom: item.title.length < 20 ? '0' : ''}} className='item__done'>
                    {item.active === 1 ?
                        <span className='item__done-active'></span>
                        :
                        null
                    }
                </div>
                <div className='item__delete-box'>
                    <span onClick={() => deleteTodo(item.id)} className='item__delete'>
                        x
                    </span>
                </div>
            </div>
            <p style={{ textDecoration: item.active === 1 ? 'line-through' : '' }} className='item__title'>
                {item.title}
            </p>

        </div>
    )
}

export default TodoItem