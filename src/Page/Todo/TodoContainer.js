import React, { useState } from 'react';
import TodoPresenter from './TodoPresenter'

function TodoContainer() {
  const [todoList, setTodoList] = useState([
    {
      todo: "리액트로 투두리스트 수정",
      check: false,
    },
    {
      todo: "리액트 part1 끝내기",
      check: true,
    },
  ]);
  const handleClickLikeButton = (index) => () => {
    let copyTodoList = [...todoList]
    copyTodoList[index].check = !copyTodoList[index].check;
    setTodoList(copyTodoList);            
  }
  const handleClickDeleteButton = (deleteIndex)=> () => {
    const deletedList = todoList.filter((todo,index)=>deleteIndex !== index)
    setTodoList(deletedList)
  }
  return (
    <TodoPresenter 
      todoList={todoList}
      onClickLikeButton={handleClickLikeButton}
      onClickDeleteButton={handleClickDeleteButton}
    />
  )
}

export default TodoContainer