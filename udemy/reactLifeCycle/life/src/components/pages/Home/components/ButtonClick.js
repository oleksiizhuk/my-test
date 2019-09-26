import React from 'react';

const ButtonClick = ({
  onHandleClickButton, currentValue
}) => {
  return (
    <div>
      <p>
Current value:
        {currentValue}
      </p>
      <button
        onClick={onHandleClickButton}
        type="button"
      >
        Add for current value + 1
      </button>
    </div>
  );
};

export default ButtonClick;
