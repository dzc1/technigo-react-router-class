// Home.jsx - This component serves as the main landing page of the application.
// It displays a curated list of songs, specifically "Rolling Stones 500 Greatest Songs of All Time."

import { SongLists } from "../components/myInfo/songs/SongLists"; // Imports the SongLists component to display the song list

export const Home = () => {
  // Title of the song list section
  let title = "Rolling Stones 500 Greatest songs of All Time";

  return (
    <>
      {/* SongLists component displays the list of songs with the provided title */}
      <SongLists title={title} />
    </>
  );
};

// Summary:
// The Home component is a simple functional component that renders the `SongLists` component,
// passing in a title to specify the content it displays. This component acts as the main
// entry point for users visiting the homepage, providing them with an overview of the
// Rolling Stones' top 500 songs list.
