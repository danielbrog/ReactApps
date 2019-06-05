import React from 'react'
import Option from './Option'


//stateless functional component calls option on all options in parent
const Options = (props) =>(
        <div>
        <button onClick={props.deleteOptions}>Remove All</button>
        {props.options.length===0 && <p>Please add an option to get started.</p>}
            <ol>
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    option={option}
                    deleteOption = {props.deleteOption}
                    />
                ))
            }
            </ol>
            
        </div>
    )

export default Options
