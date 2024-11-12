// Routes.jsx - This file defines and exports the main routing structure for the application using React Router.
// It maps specific paths to the corresponding components, enabling navigation within the app.
// Each route specifies a path and the component to render for that path.

import { Route } from "react-router-dom";
import { Home } from "../pages/Home"; // Home page component
import { MyInfo } from "../pages/MyInfo"; // Component for displaying user information
import { NotFoundPage } from "../pages/NotFoundPage"; // Component displayed for unmatched routes
import { SongInfo } from "../pages/SongInfo"; // Component for displaying song information dynamically
import { Movies } from "../pages/Movies"; // Component displaying a list or gallery of movies
import { MovieInfo } from "../pages/MovieInfo"; // Component for displaying detailed movie information

export const routes = (
  <>
    {/* Route for the home page */}
    <Route path="/" element={<Home />} />

    {/* Route for a user info page */}
    <Route path="/my-info" element={<MyInfo />} />

    {/* Wildcard route for handling 404 errors or unmatched paths */}
    <Route path="*" element={<NotFoundPage />} />

    {/* Dynamic route for displaying information about a specific song.
        `:songTitle` is a route parameter representing the song title */}
    <Route path="/song/:songTitle" element={<SongInfo />} />

    {/* Movie-related routes */}
    {/* Dynamic route for displaying detailed information about a specific movie by ID */}
    <Route path="/movie/:id" element={<MovieInfo />} />

    {/* Route for the main movies page, showing a list or gallery of movies */}
    <Route path="/movies" element={<Movies />} />
  </>
);

// Summary:
// This Routes.jsx file provides the primary routing configuration for the app. It connects URL paths to specific components,
// allowing users to navigate between different sections of the application. Dynamic routes with parameters, such as ":songTitle"
// and ":id", enable the display of content based on the input in the URL, creating a more interactive user experience.
