import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Styles from './navbar.module.css'

const Navbar = () => {
  return (
    <section>
        <article>
            <Logo/>
            <Menu/>
        </article>
    </section>
  )
}

export default Navbar