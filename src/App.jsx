// App.jsx - Entry-level file for the React application.
// It sets up the routing context using `BrowserRouter` and defines the main navigation links.
// This file includes the navigation bar and loads all routes defined in `Routes.jsx`.

import { BrowserRouter, Link, Routes, NavLink } from "react-router-dom";
import { routes } from "./routes/routes"; // Importing the routes configuration
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      {/* `BrowserRouter` provides the routing context for the entire app, enabling navigation */}
      <BrowserRouter>
        <Navbar />

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
