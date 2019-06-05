import React from 'react'

//displays an option as a list item
const Option = (props) =>(
        <p className="option">
            <p className="option__text">{props.count}. {props.option}</p>
            <button 
            className="button button--link"
            onClick={(e) => {
                props.deleteOption(props.option)
            }}
            
            >Remove</button>
        </p>
    )

export default Option