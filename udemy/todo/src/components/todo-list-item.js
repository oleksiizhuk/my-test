import React from 'react';

const todoListItem = (props) => {
    const {label, important = false} = props;

    const style = {
        color: important ? 'tomato' : 'black'
};
    return <span style={style}>{label}</span>;
};

export default todoListItem;