import React, { useState } from 'react'

const Today = () => {
  const [today, setToday] = useState(new Date());

  return (
    <div className='date'>{`${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`}</div>
  )
}

export default Today