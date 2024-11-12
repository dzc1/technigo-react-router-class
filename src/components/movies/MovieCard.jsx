// MovieCard.jsx - This component represents a single movie card for use in a movie list or gallery.
// It displays the movie's poster, title, and release date, with a link to a detailed movie information page.

import { Link } from "react-router-dom"; // Import Link for navigation to movie detail page
import "./MovieCard.css"; // Import CSS file for styling the card

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    // Link to navigate to the movie's detail page using the movie ID
    <Link to={`/movie/${id}`}>
      <article className="movie-card">
        {/* Display the movie's poster image */}
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />

        {/* Container for the movie's title and release date */}
        <div className="">
          <p>Released {release_date}</p> {/* Display the release date */}
          <h2>{title}</h2> {/* Display the movie title */}
        </div>
      </article>
    </Link>
  );
};

// Summary:
// The MovieCard component is designed to render a clickable card displaying a movie's poster, title, and release date.
// Each card links to the movie's detail page, making it ideal for use in a movie list or gallery component.
