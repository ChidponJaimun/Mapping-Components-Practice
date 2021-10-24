import React from "react";
import Entry from "../components/Entry";
import Emoji from "../emojipedia";

function createEntry(Emoji) {
  return (
    <Entry
      id={Emoji.id}
      name={Emoji.name}
      emoji={Emoji.emoji}
      meaning={Emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emoji.map(createEntry)}</dl>
    </div>
  );
}

export default App;
