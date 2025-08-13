import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-amber-400 py-7">
      <ul className="flex gap-x-3">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/about'}>
          <li>About</li>
        </Link>

        <Link to={'/service'}>
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header