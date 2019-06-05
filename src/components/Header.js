import React from 'react'

// stateless functional component displays header div
const Header = (props) => (
        <div className="header">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    )

//default properties for header compotnent
Header.defaultProps = {
    title: 'React Apps',
    subtitle: 'These are my React Apps!'
}

export default Header