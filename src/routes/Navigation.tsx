import logo from '../logo.svg'
import { BrowserRouter } from 'react-router-dom'
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import {
    Navigate,
    NavLink,
    Route,
    Routes
    } from 'react-router-dom'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/lazyload1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazyload 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazyload2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazyload 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazyload3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazyload 3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazyload2" element={<LazyPage1 />} />
          <Route path="lazyload1" element={<LazyPage2 />} />
          <Route path="lazyload3" element={<LazyPage3 />} />

          <Route path="/*" element={<Navigate to="/lazyload1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
