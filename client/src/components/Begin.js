import React from 'react';

const Begin = ({ userName, changeInputUserName, onClickChat }) => {
  return (
    <div>
      <p>Choose username</p>
      <input type="text" value={userName} onChange={changeInputUserName} />
      <button onClick={onClickChat}>Chat !</button>
    </div>
  );
};

export default Begin;
