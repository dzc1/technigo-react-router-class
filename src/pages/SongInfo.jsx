// SongInfo.jsx - This component displays information about a specific song based on the URL parameter `songTitle`.
// It searches a JSON file for the song data, which includes title, artist, album name, and year, and renders the details.

import { useParams } from "react-router-dom"; // Hook to retrieve route parameters
import songsData from "../data/songs.json"; // Import JSON file containing song data

export const SongInfo = () => {
  // Extract the songTitle parameter from the URL
  const { songTitle } = useParams();
  console.log(songTitle);

  // Find the song object in the songs data based on the songTitle parameter
  const song = songsData.songs.find(
    (s) => s.title.toLowerCase().replace(/ /g, "-") === songTitle
  );

  // If no matching song is found, display a "Song not found" message
  if (!song) return <p>Song not found!</p>;

  return (
    <div>
      {/* Display song information if a match is found */}
      <h2>Song Information</h2>
      <h5>Title</h5>
      <p>{song.title}</p>
      <h5>Artist</h5>
      <p>{song.artist}</p>
      <h5>Album Name</h5>
      <p>{song.album}</p>
      <h5>Year</h5>
      <p>{song.year}</p>
    </div>
  );
};

// Summary:
// The SongInfo component retrieves a song title from the URL, searches the JSON data for a match, and displays
// the song's details if found. If the song does not exist in the data, it shows a "Song not found" message.
// This dynamic component enhances the user experience by allowing song data to be displayed based on URL input.
