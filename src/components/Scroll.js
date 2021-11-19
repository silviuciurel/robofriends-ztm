import React from 'react';

const Scroll = (props) => {
    const style = { overflowY: 'scroll', border: '1px solid black', height: '600px' };
    return (
        <div style={style}>
            {props.children};
        </div>
    )
}

export default Scroll;