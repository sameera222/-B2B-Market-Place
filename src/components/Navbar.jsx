import React from 'react';

const Navbar = () => (
  <nav className="p-4 bg-blue-600 text-white">
    <ul className="flex justify-around">
      {['Home', 'Categories', 'Cart', 'Profile'].map((item) => (
        <li key={item} className="cursor-pointer">{item}</li>
      ))}
    </ul>
  </nav>
);
export default Navbar;