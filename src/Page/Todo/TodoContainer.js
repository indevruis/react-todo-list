import React, { useState, useEffect } from "react";
import TodoPresenter from "./TodoPresenter";

function TodoContainer() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getTodoList()
  }, []);
  
  const getTodoList = () => {
    fetch('/TodoList').then(res=>res.json()).then(res=>{
      setTodoList(res)
    })
}

  const handleClickLikeButton = (index) => () => {
    const copyTodoList = [...todoList];
    copyTodoList[index].like = !copyTodoList[index].like;
    setTodoList(copyTodoList);
  };
  const handleClickDeleteButton = (deleteIndex) => () => {
    const deletedList = todoList.filter((_, index) => deleteIndex !== index);
    setTodoList(deletedList);
  };
  const handleChangeInputValue = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSaveTodo = () => {
    const copyTodoList = [...todoList];
    copyTodoList.push({ todo: newTodo, like: false });
    fetch('/TodoList',{
      method:'POST',
      body:JSON.stringify({ todo: newTodo , isChecked:false}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setTodoList(copyTodoList);
  };
  const handleClickAddButton = (e) => {
    e.preventDefault();
    handleSaveTodo();
  };
  return (
    <TodoPresenter
      todoList={todoList}
      onClickLikeButton={handleClickLikeButton}
      onClickDeleteButton={handleClickDeleteButton}
      onChangeInputValue={handleChangeInputValue}
      onClickAddButton={handleClickAddButton}
    />
  );
}

export default TodoContainer;
