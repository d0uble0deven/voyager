import React, { useState } from "react";

function PerplexityComponent() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const completion = await fetch("/perplexity");
  //   setResult(completion);
  // };

  return (
    <div>
      {/* <form onSubmit={handleSubmit} className="perplexity-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit">Submit</button>
      </form>
      <div>{result}</div> */}
    </div>
  );
}

export default PerplexityComponent;
