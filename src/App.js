import "./styles.css";
import { useState } from "react";

var emojidic = {
  "😀": "smilling",
  "🥵": "hot",
  "👹": "devil",
  "😺": "cat",
  "💩": "turd"
};
export default function App() {
  var emojiarr = Object.keys(emojidic);

  const [emoji, setemoji] = useState("");

  function searchHandler(event) {
    var findEmoji = event.target.value;
    if (findEmoji in emojidic) {
      setemoji(emojidic[findEmoji]);
    } else {
      setemoji("We dont have that emoji in our database");
    }
  }
  function emojiClickHandler(emojis) {
    setemoji(emojidic[emojis]);
  }
  return (
    <div className="App">
      <h1>Emoji Pedia</h1>
      <p>Give us an emoji and we will find out waht it means</p>
      <input onChange={searchHandler} placeholder="Here"></input>
      <h2>{emoji}</h2>
      <h3>Emojis we know</h3>
      <span>
        <ul>
          {emojiarr.map((emojis) => {
            return (
              <span
                key={emojis}
                onClick={() => emojiClickHandler(emojis)}
                style={{ fontSize: "2rem", padding: "20px", cursor: "pointer" }}
              >
                {emojis}
              </span>
            );
          })}
        </ul>
      </span>
    </div>
  );
}
