import React from 'react';
import Today from '../../Component/Today';
import Lists from '../../Component/Lists'

const TodoPresenter = ({
  todoLists,
  setTodoLists
}) => {
  return (
    <div className='todoList'>
        <div className='header'>To Do List</div>
        <Today />
        {todoLists.map((list, i)=>(
          <Lists
            list={list}
          />
        ))
      }
        <form className='addList' action="/add" method="POST">
            <input type="text" className='addListContents' name="todo" placeholder="오늘 할 일" />
            <button type="submit" className='addListBtn'>추가</button>
        </form>
    </div>
  )
}

export default TodoPresenter;