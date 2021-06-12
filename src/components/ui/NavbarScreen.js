import React from 'react';
import { NavLink, Link, useLocation, useHistory } from 'react-router-dom';
import { FaPaypal, FaPlus, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/authActions';
export const NavbarScreen = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleNewPost = () => {
    history.push('/blog/new-post');
  };
  return (
    <nav className='navbar navbar-expand-md navbar-light container-fluid '>
      <Link className='navbar-brand' to='/'>
        BLOG
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarhome'
        aria-controls='navbarhome'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarhome'>
        <ul className='navbar-nav m-auto'>
          <li className='nav-item '>
            <NavLink
              activeClassName='activee'
              className='nav-link'
              style={{ fontSize: '15px' }}
              to='/home'
            >
              <span className='font-weight-bold'>Home</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              activeClassName='activee'
              className='nav-link'
              style={{ fontSize: '15px' }}
              to='/about'
            >
              <span className='font-weight-bold'>About</span>
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              activeClassName='activee'
              className='nav-link'
              style={{ fontzzfontSize: '15px' }}
              to='/blog'
              tabIndex='-1'
              aria-disabled='true'
            >
              <span className='font-weight-bold'> Blog</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              activeClassName='activee'
              className={`nav-link `}
              to='/contact'
              tabIndex='-1'
              aria-disabled='true'
            >
              <span className='font-weight-bold'>Contact</span>
            </NavLink>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto'>
          {name ? (
            <li className='nav-item dropdown'>
              <span
                className='btn btn-link dropdown-toggle'
                style={{ color: '#ff3500' }}
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <FaUserCircle />
                <span>{name}</span>
              </span>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                {location.pathname.includes('/blog') && (
                  <span
                    className='dropdown-item text__color'
                    onClick={handleNewPost}
                  >
                    New Post <FaPlus />
                  </span>
                )}
                <span
                  className='dropdown-item text__color'
                  onClick={handleLogout}
                >
                  Logout <FaSignOutAlt />
                </span>
              </div>
            </li>
          ) : (
            <li className='nav-item'>
              <Link to='/auth/' className=' btn primary btn-lg'>
                <FaUserCircle />
                <span> Login</span>
              </Link>
            </li>
          )}
          <li className='nav-item'>
            <Link className=' btn secondary btn-lg' to=''>
              <FaPaypal /> <span> Donate</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
