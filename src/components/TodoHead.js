import React from 'react';
import styled from 'styled-components';
import { MdOutlineApps, MdCheck, MdInvertColors } from 'react-icons/md';
import { useTodoState } from '../TodoContext';

const Menu = styled.div`
  display: flex;
  justify-content: right;
  font-size: 40px;
  color: black;
  .calendar {
    &:hover {
    color: #6B50F3;
  }
}
  .check {
    &:hover {
    color: #6B50F3;
  }
}
  .paint {
    &:hover {
    color: #6B50F3;
  }
}
`;


const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 25px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 20px;
  }
`;

function TodoHead() {
  const todos = useTodoState();

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR');
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <Menu>
        <MdOutlineApps className='calendar'/>
        <MdCheck className='check'/>
        <MdInvertColors className='paint' />
      </Menu>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;