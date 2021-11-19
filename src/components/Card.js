import React from 'react';

const Card = ({ name, email }) => {
    return (
        <div className='bg-light-blue ba br3 dib pa3 ma2 grow shadow-7'>
            <img alt='' src={`https://robohash.org/${name}?200x200`} />
            <h1 className='tc'>{name}</h1>
            <p className='tc'>{email}</p>
        </div>
    )
}

export default Card;