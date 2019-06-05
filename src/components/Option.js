import React from 'react'

//displays an option as a list item
const Option = (props) =>(
        <li>
            {props.option}
            <button onClick={(e) => {
                props.deleteOption(props.option)
            }}
            
            >Remove</button>
        </li>
    )

export default Option