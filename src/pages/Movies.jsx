// Movies.jsx - This component fetches and displays a list of popular movies from an external API.
// It renders individual movie cards, each with a link to a detailed movie page.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../components/movies/MovieCard"; // Component for rendering individual movie details in card format

export const Movies = () => {
  // State to store the list of fetched movies
  const [movies, setMovies] = useState([]);

  // useEffect hook to fetch popular movies when the component mounts
  useEffect(() => {
    const apiEnv = import.meta.env.VITE_OPENDB_KEY; // Retrieve API key from environment variables

    // Function to fetch movies
    const fetchMovies = async () => {
      try {
        // API call to fetch popular movies data
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`
        );

        // Check if response is successful; throw an error if not
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse JSON data and set it to the movies state
        const json = await response.json();
        setMovies(json.results);
      } catch (error) {
        // Log any errors encountered during fetching
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies(); // Trigger the fetch operation on component mount
  }, []);

  return (
    <>
      <div>
        {/* Header for the movies list */}
        <h1>List of Movies fetched from an API</h1>
        {/* {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))} */}
        {/* Mapping over movies array to render each movie as a MovieCard component */}
        {movies.map((movie) => (
          <MovieCard
            key={movie.id} // Unique key for each movie
            id={movie.id} // Movie ID used for linking to individual details
            title={
              movie.title.length > 20
                ? `${movie.title.slice(0, 20)}...` // Truncate title if it's longer than 20 characters
                : movie.title
            }
            release_date={movie.release_date} // Release date of the movie
            poster_path={movie.poster_path} // Poster image path for the movie
          />
        ))}
      </div>
    </>
  );
};

// Summary:
// The Movies component fetches a list of popular movies from an external API and displays them as individual movie cards.
// It leverages the MovieCard component to format each movie's details. The useEffect hook ensures data fetching occurs
// when the component mounts. Titles longer than 20 characters are truncated for consistent presentation.
