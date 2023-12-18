import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="flex items-center justify-center p-5 mb-5 gap-x-40  text-md  ">
        <li className="hover:scale-105 hover:text-blue-600 hover:underline hover:decoration-blue-600 duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:scale-105 hover:text-blue-600 hover:underline hover:decoration-blue-600 duration-300">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:scale-105 hover:text-blue-600 hover:underline hover:decoration-blue-600 duration-300">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:scale-105 hover:text-blue-600 hover:underline hover:decoration-blue-600 duration-300">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header