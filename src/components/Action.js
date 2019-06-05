import React from 'react'

//picks an element from main app state array
const Action = (props) => (
    <div>
        <h1> Indecision App</h1>
            <button
            className="big-button"
                onClick={props.makeDecision}
                disabled={!props.hasOptions}
                >
                Pick a thing to do
            </button>
    </div>
)

export default Action