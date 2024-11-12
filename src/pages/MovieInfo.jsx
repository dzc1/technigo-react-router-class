// MovieInfo.jsx - This component displays detailed information about a specific movie.
// It fetches movie data from an external API based on the movie ID provided in the URL.
// The component includes a loading spinner and a back link to the main movies page.

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Hourglass } from "react-loader-spinner"; // Loading spinner component
import { MovieDetails } from "../components/movies/MovieDetails"; // Component for displaying detailed movie information

export const MovieInfo = () => {
  // State for storing fetched movie data, initialized as null
  const [movie, setMovie] = useState(null);

  // State to track loading status, initially set to true
  const [isLoading, setIsLoading] = useState(true);

  // Extract the `id` parameter from the URL (movie ID)
  const { id } = useParams();

  // useEffect hook to fetch movie data when the component mounts or `id` changes
  useEffect(() => {
    //const api = "b8b70837ecdf33d41538d9964f7c8a97";
    // Retrieve the API key from environment variables
    const apiEnv = import.meta.env.VITE_OPENDB_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`;

    // Function to fetch movie data
    const fetchMovies = async () => {
      try {
        const response = await fetch(url);

        // Check for successful response, otherwise throw an error
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse JSON data from the response and update the movie state
        const json = await response.json();
        setMovie(json);

        // Set loading state to false once data is fetched
        setIsLoading(false);

        // Scroll to the top of the page after data is loaded
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        // Log any errors encountered during the fetch
        console.error("Error fetching data:", error);
      }
    };

    // Delay fetch by 2 seconds to simulate a loading effect
    const delay = setTimeout(() => {
      fetchMovies();
    }, 2000);

    // Clean up timeout if the component unmounts before the delay completes
    return () => clearTimeout(delay);
  }, [id]);

  return (
    <>
      {/* Display loading spinner while data is loading */}
      {isLoading && (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      )}

      {/* Display 'Back' link and movie details once data is loaded */}
      {!isLoading && movie && <Link to="/movies">Back</Link>}
      {!isLoading && movie && <MovieDetails movie={movie} />}
    </>
  );
};

// Summary:
// The MovieInfo component fetches and displays details for a specific movie based on the `id` route parameter.
// While data is loading, a spinner is shown. Once data is fetched, the component displays a "Back" link and renders
// the MovieDetails component with the fetched movie data. The fetch operation includes a simulated delay and scrolls
// to the top when data is loaded for improved user experience.
