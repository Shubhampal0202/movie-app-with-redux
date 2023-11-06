import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
      <div>
        <Link to={"/"}> All Movies</Link>
      </div>
      <div>
        <Link to={"/favourites"}>My Fav Movies</Link>
      </div>
    </div>
  );
}

export default Navbar