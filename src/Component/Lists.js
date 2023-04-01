import React from 'react'

const Lists = (props) => {
  return (
    <div className="list">
          <div>
            <span>{props.list.check ? "❤️" : "🤍"}</span>
            <span>{props.list.todo}</span>
            <span className="deleteButton">❌</span>
          </div>
    </div>
  );
}

export default Lists;
