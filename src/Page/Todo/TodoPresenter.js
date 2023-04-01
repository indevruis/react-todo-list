import React from "react";
import Today from "./Component/Today";
import List from "./Component/List";

const TodoPresenter = ({
  todoList,
  onClickLikeButton,
  onClickDeleteButton,
  onChangeInputValue,
  onClickAddButton,
}) => {
  return (
    <div className="todoList">
      <div className="header">To Do List</div>
      <Today />
      {todoList.map((list, index) => (
        <List
          list={list}
          key={index}
          index={index}
          onClickLikeButton={onClickLikeButton}
          onClickDeleteButton={onClickDeleteButton}
        />
      ))}
      <form className="addList">  
      {/* action="/add" method="POST" */}
        <input
          type="text"
          className="addListContents"
          name="todo"
          placeholder="오늘 할 일"
          onChange={onChangeInputValue}
        />
        <button type="submit" className="addListBtn"
          onClick={onClickAddButton}
        >
          추가
        </button>
      </form>
    </div>
  );
};

export default TodoPresenter;
