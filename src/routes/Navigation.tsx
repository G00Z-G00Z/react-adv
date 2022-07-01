import logo from '../logo.svg'
import { BrowserRouter } from 'react-router-dom'
import {
  Navigate,
  NavLink,
  Route,
  Routes
  } from 'react-router-dom'
import { routes } from './routes'
import { Suspense } from 'react'

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, to, name }) => (
                <li key={path}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
