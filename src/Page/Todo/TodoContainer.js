import React, { useState } from "react";
import TodoPresenter from "./TodoPresenter";

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
  const [newTodo, setNewTodo] = useState("");

  const handleClickLikeButton = (index) => () => {
    const copyTodoList = [...todoList];
    copyTodoList[index].check = !copyTodoList[index].check;
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
    copyTodoList.push({ todo: newTodo, check: false });
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
