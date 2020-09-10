import React from "react";
import emojipedia from "../emojipedia";
import Detail from "./Detail";

function createDetail(detail) {
  return (
    <Detail
      //id and key plays different role
      id={detail.id}
      //key is must as Each child in a list should have a unique "key" prop
      key={detail.id}
      emoji={detail.emoji}
      name={detail.name}
      meaning={detail.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createDetail)}</dl>
    </div>
  );
}

export default App;
