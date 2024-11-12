// App.jsx - Entry-level file for the React application.
// It sets up the routing context using `BrowserRouter` and defines the main navigation links.
// This file includes the navigation bar and loads all routes defined in `Routes.jsx`.

import { BrowserRouter, Link, Routes, NavLink } from "react-router-dom";
import { routes } from "./routes/routes"; // Importing the routes configuration

export const App = () => {
  return (
    <>
      {/* `BrowserRouter` provides the routing context for the entire app, enabling navigation */}
      <BrowserRouter>
        {/* Navigation bar with links to various pages in the app */}
        <nav>
          <ul className="app-ul">
            {/* Link to the home page */}
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>

            {/* Incorrect usage: This link to 'Movies' uses an <a> tag, causing a full page reload. 
                Instead, `Link` or `NavLink` from `react-router-dom` should be used for client-side navigation. */}
            <li className="app-li">
              <a href="/movies">Movies using a tag</a>
            </li>

            {/* Correct usage: NavLink for the 'Movies' page, allowing client-side routing without a reload */}
            <li className="app-li">
              <NavLink to="/movies">Movies</NavLink>
            </li>

            {/* Link to the 'My Info' page */}
            <li className="app-li">
              <Link to="/my-info">My Info</Link>
            </li>
          </ul>
        </nav>

        {/* Main content area where the routed components are rendered */}
        <main>
          <Routes>{routes}</Routes>{" "}
          {/* Loads the routes defined in `routes/routes.js` */}
        </main>
      </BrowserRouter>
    </>
  );
};

// Summary:
// This App.jsx file sets up the root component of the app with routing and navigation.
// `BrowserRouter` enables React Router's client-side routing, while `Routes` loads all route components defined in `Routes.jsx`.
// The navigation bar contains links to different sections of the app, showcasing correct and incorrect approaches to linking (e.g., `<a>` vs. `Link`).
// This file serves as the entry point and primary layout for rendering different pages based on the URL path.
