/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import { tvShows } from "./shows/data";
import EpisodeList from "./episodes/EpisodeList";
import ShowSelection from "./shows/ShowSelection";
import EpisodeDetails from "./episodes/EpisodeDetails";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection showData={tvShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails key={selectedShow?.name} show={selectedShow} />
      </main>
    </>
  );
}
