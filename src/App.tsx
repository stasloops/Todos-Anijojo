import React, { useEffect, useState } from 'react';
import './App.scss';
import AddTodo from './components/add-todo/AddTodo';
import Filters from './components/filters/Filters';
import TodoList from './components/todo-list/TodoList';
import { Todo } from './types/todos';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
      const saved: any = localStorage.getItem("todos");
      const initialValue = JSON.parse(saved);
      return initialValue || [];
  })
  const [newTodos, setNewTodos] = useState<Todo[]>([])
  const [activeFilter, setActiveFilter] = useState<number>(0)

  useEffect(() => {
    setNewTodos(todos.filter((item) => item.active === activeFilter))
  }, [activeFilter, todos])

  const activeChanger = (id: number) => {
    setTodos(state => {
      return state.map(item => {
        return item.id === id ? { ...item, active: item.active === 1 ? 2 : 1 } : item
      })
    })
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id))
  }
  
  
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])

  return (
    <div className='app'>
      <h1 className='title'>AniJoJo Todos</h1>
      <div className='container'>
        <AddTodo
          todos={todos}
          setTodos={setTodos}
        />
        <Filters setActiveFilter={setActiveFilter} />
        <TodoList
          activeChanger={activeChanger}
          todos={activeFilter === 0 ? todos : newTodos}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
