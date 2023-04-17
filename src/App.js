import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("Runs all the time");
  useEffect(() => {
    console.log("Runs only once");
  }, []);
  useEffect(() => {
    console.log("Runs when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("Runs when 'counter' changes");
  }, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>CLick Me!</button>
    </div>
  );
}

export default App;
