import React, { useState } from "react";

function FlightInspoComponent() {
  let [inspoData, setInspoData] = useState([]);
  let [origin, setOrigin] = useState({ origin: "DFW" });

  const getTestData = () => {
    fetch(`flights/inspo?origin=${encodeURIComponent(origin.origin)}`)
      .then((response) => response.json())
      .then((response) => setInspoData(response))
      .then(() => console.log(inspoData))
      .then(() => {
        return inspoData;
      })
      .catch((error) => console.error("error: ", error));
  };

  return (
    <>
      <select
        name="origin"
        value={origin.origin}
        onChange={(e) => setOrigin({ origin: e.target.value })}
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="SYD">SYD</option>
        <option value="BKK">BKK</option>
        <option value="DFW">DFW</option>
      </select>

      <button onClick={getTestData}>flightInspo</button>

      {inspoData.length === 0 ? (
        <div>no data</div>
      ) : (
        <div>
          Data: type: {JSON.stringify(inspoData[0])}
          {Object.keys(inspoData).map((i, item) => (
            <div key={i}>
              <hr />
              type: {JSON.stringify(inspoData[item]["type"])}
              <hr />
              origin:
              {JSON.stringify(inspoData[item]["origin"])}
              <hr />
              destination: {JSON.stringify(inspoData[item]["destination"])}
              <hr />
              departureDate: {JSON.stringify(inspoData[item]["departureDate"])}
              <hr />
              returnDate: {JSON.stringify(inspoData[item]["returnDate"])}
              <hr />
              price: {JSON.stringify(inspoData[item]["price"])}
              <hr />
              links: {JSON.stringify(inspoData[item]["links"])}
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default FlightInspoComponent;
