import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <div className="header-nav">
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          {
            links.map((link) => (
              <li key={link.id}>
                <NavLink
                  exact="true"
                  to={link.path}
                  className={(navData) => (navData.isActive ? 'active-link' : '')}
                >
                  {link.text}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>

    </div>
  );
};

export default Header;
