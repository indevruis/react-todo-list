import React from 'react';

function TodoPresenter() {
  return (
    <div className='todoList'>
        <div className='header'>To Do List</div>
        <div className='date'></div>
        <div className='list'></div>
        <form className='addList' action="/add" method="POST">
            <input type="text" className='addListContents' name="todo" placeholder="오늘 할 일" />
            <button type="submit" className='addListBtn'>추가</button>
        </form>
    </div> 
  )
}

export default TodoPresenter;