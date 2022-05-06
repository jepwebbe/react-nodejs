import React from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

export const Header = () => {
    return (
    <header>
        <nav>
            <ul>
            <li><Link to="/frontpage">OM</Link></li>
            <li>forside</li>
            <li><Link to="/loginpage">KONTAKT</Link></li>
            </ul>
        </nav>
    </header>
    )
}