import React from 'react'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to='/' activeClassName="nav-active"> {/*activeclassname permet d'appliquer ce qui existe dans le css du nav-active seulementlorsqu'on appuie sur ce button ou link. */}
                Acceuil
            </NavLink>
            <NavLink exact to='/a-propos' activeClassName="nav-active">
                About
            </NavLink>
            
        </div>
    )
}

export default Navigation
