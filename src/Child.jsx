import React from 'react'
import Grandchild from './Grandchild';

function Child(props) {
    const age = 50;
    return (
        <div>
            <Grandchild name={props.name} />
            <div>My name is {props.name} age {age}</div>
            <button onClick={ () => {props.getCity("Islamabad") } }>get city from child</button>
            
        </div>
    )
}

export default Child