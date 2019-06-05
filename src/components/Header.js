import React from 'react'

// stateless functional component displays header div
const Header = (props) => (
        <div>
        <h1> {props.title}</h1>
        {props.subtitle && <h2> {props.subtitle}</h2>}
        </div>
    )

//default properties for header compotnent
Header.defaultProps = {
    title: 'React Apps',
    subtitle: 'These are my React Apps!'
}

export default Header