import React, { useState } from 'react';
import TodoPresenter from './TodoPresenter'

function TodoContainer() {
  const [todoLists, setTodoLists] = useState([
    {
      todo: "리액트로 투두리스트 수정",
      check: false,
    },
    {
      todo: "리액트 part1 끝내기",
      check: true,
    },
  ]);
  return (
    <TodoPresenter 
      todoLists={todoLists}
      setTodoLists={setTodoLists}
    />
  )
}

export default TodoContainer