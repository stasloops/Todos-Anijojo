import React, { FC, useState } from 'react'
import { Todo } from '../../types/todos'
import './AddTodo.scss'

type AddTodoProps = {
  setTodos: (newTodo: Todo[]) => void
  todos: Todo[]
}

const AddTodo: FC<AddTodoProps> = ({ setTodos, todos }) => {
  const [value, setValue] = useState<string>('')

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const createTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (value.length > 0) {
      const newTodo = {
        title: value,
        id: Date.now(),
        active: 2
      }
      setTodos([...todos, newTodo])
      setValue('')
    }
  }

  return (
    <form className='form'>
      <input value={value} onChange={e => changeValue(e)} className='form__input' placeholder='Новый чек-лист' />
      <button onClick={e => createTodo(e)} className='form__button'>+</button>
    </form>
  )
}

export default AddTodo