import React from 'react'
import "./Header.css"
import HeaderLeft from './HeaderLeft'
import HeaderMiddle from './HeaderMiddle'
import HeaderRight from './HeaderRight'
function Header() {
    return (
        <div className="headerContainer">
            <HeaderLeft />
            <HeaderMiddle />
            <HeaderRight />
        </div>
    )
}

export default Header
