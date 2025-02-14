import React from 'react'
import Styles from "./Navbar.module.css";

const Menu = () => {
  return (
    <div className={Styles.menyBlock}>
        <ul>
            <li><a href="Dashboard"></a></li>
            <li><a href="ClassRooms"></a></li>
            <li><a href="Assessment"></a></li>
            <li><a href="Store"></a></li>
            <li><a href="Calender"></a></li>
            <li><a href="News"></a></li>
            <li><a href="Blog"></a></li>
        </ul>
    </div>
  )
}

export default Menu