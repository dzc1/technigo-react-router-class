// MovieDetails.jsx - This component displays detailed information for a specific movie, including its title, backdrop image, and overview.

export const MovieDetails = ({ movie }) => {
  console.log(movie); // Log movie data for debugging purposes

  // Destructure relevant fields from the movie object
  const { title, backdrop_path, overview } = movie;

  // Construct the URL for the movie's backdrop image
  const backgroundImage = `https://image.tmdb.org/t/p/w342/${backdrop_path}`;

  return (
    <div>
      {/* Display the movie's backdrop image */}
      <img src={backgroundImage} alt={overview} />

      {/* Display the movie title */}
      <h1>{title}</h1>

      {/* Display the movie overview/description */}
      <p>{overview}</p>
    </div>
  );
};

// Summary:
// The MovieDetails component receives a movie object as a prop and displays its title, overview, and backdrop image.
// This component is designed to be used within a page where detailed information about a single movie is shown.
