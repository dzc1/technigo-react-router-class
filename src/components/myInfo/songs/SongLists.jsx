// SongLists.jsx - This component displays a list of songs, each linking to a detailed song information page.
// It uses data from a JSON file and allows navigation to individual song details via React Router.

import Songs from "../../../data/songs.json"; // Import song data from a JSON file
import { Link } from "react-router-dom"; // Import Link for navigation to individual song pages

export const SongLists = ({ title }) => {
  // Access the array of songs from the imported JSON file
  const songs = Songs.songs;
  console.log(songs);

  return (
    <div>
      {/* Display the title passed as a prop */}
      <h1>{title}</h1>

      {/* Render a list of songs, each as a clickable link */}
      <ul className="songCard">
        {songs.map((song) => (
          <li key={song.rank}>
            {/* Link to the SongInfo page for each song, using a URL-friendly version of the title */}
            <Link to={`/song/${song.title.toLowerCase().replace(/ /g, "-")}`}>
              {song.title.toLowerCase().replace(/ /g, "-")}
              {/* {song.title} - {song.artist} */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Summary:
// The SongLists component displays a title and a list of songs as links. Each song is dynamically routed
// based on its title, allowing the user to view more information by navigating to the SongInfo page.
// This component enhances navigation and provides quick access to song details.
