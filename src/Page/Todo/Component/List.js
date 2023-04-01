import React from 'react'

const List = ({list,index, onClickLikeButton, onClickDeleteButton}) => {
  return (
    <div className="list">
          <div>
            <span onClick={onClickLikeButton(index)}>
              {list.check ? "❤️" : "🤍"}
            </span>
            <span>{list.todo}</span>
            <span className="deleteButton" onClick={onClickDeleteButton(index)}>❌</span>
          </div>
    </div>
  );
}

export default List;
