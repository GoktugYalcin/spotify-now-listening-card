import React from "react";
import '../styles/index.scss';
import { SpotifyCard } from "./SpotifyCard";

const App = () => {
  return (
      <div className="container">
        <div className="content__preview">
            <SpotifyCard />
        </div>
      </div>
  );
}

export default App;
