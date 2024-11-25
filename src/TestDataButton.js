import React, { useState } from "react";

function TestDataButton() {
  let [testData, setTestData] = useState([]);

  const getTestData = () => {
    fetch("/flights")
      .then((response) => response.json())
      .then((response) => setTestData(response))
      .then(() => console.log(testData))
      .then(() => {
        return testData;
      })
      .catch((error) => console.error("error: ", error));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let createData = {
      currencyCode: "USD",
      originDestinations: [
        {
          id: "1",
          originLocationCode: originLocationCode,
          destinationLocationCode: destinationLocationCode,
          departureDateTimeRange: {
            date: departureDate,
            time: departureTime,
          },
          //   originLocationCode: "SYD",
          //   destinationLocationCode: "BKK",
          //   departureDateTimeRange: {
          //     date: "2025-08-01",
          //     time: "10:00:00",
          //   },
        },
        {
          id: "2",
          originLocationCode: originLocationCode,
          destinationLocationCode: destinationLocationCode,
          departureDateTimeRange: {
            date: departureDate,
            time: departureTime,
          },
          //       id: "2",
          //       originLocationCode: "BKK",
          //       destinationLocationCode: "SYD",
          //       departureDateTimeRange: {
          //         date: "2025-08-05",
          //         time: "17:00:00",
          //       },
        },
      ],
      travelers: [
        {
          id: "1",
          travelerType: travelerType,
          fareOptions: [fareOptions],
          //       id: "1",
          //       travelerType: "ADULT",
          //       fareOptions: ["STANDARD"],
        },
        {
          id: "2",
          travelerType: travelerType,
          fareOptions: [fareOptions],
          //       id: "2",
          //       travelerType: "CHILD",
          //       fareOptions: ["STANDARD"],
        },
      ],
      sources: ["GDS"],
      searchCriteria: {
        maxFlightOffers: 50,
        flightFilters: {
          cabinRestrictions: [
            {
              cabin: "BUSINESS",
              coverage: "MOST_SEGMENTS",
              originDestinationIds: ["1"],
            },
          ],
          carrierRestrictions: {
            excludedCarrierCodes: ["AA", "TP", "AZ"],
          },
        },
      },
    };
    //   sources: ["GDS"],
    //   searchCriteria: {
    //     maxFlightOffers: 50,
    //     flightFilters: {
    //       cabinRestrictions: [
    //         {
    //           cabin: "BUSINESS",
    //           coverage: "MOST_SEGMENTS",
    //           originDestinationIds: ["1"],
    //         },
    //       ],
    //       carrierRestrictions: {
    //         excludedCarrierCodes: ["AA", "TP", "AZ"],
    //       },
    //     },
    //   },
    // };

    fetch("flights/create", {
      method: "POST",
      body: JSON.stringify(createData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("error: ", error));
  };

  // originLocationCode, destinationLocationCode, date, time
  // travelers, travelerType, fareOptions
  let [originLocationCode, setOriginLocationCode] = useState("");
  let [destinationLocationCode, setDestinationLocationCode] = useState("");
  let [departureDate, setDepartureDate] = useState("");
  let [departureTime, setDepartureTime] = useState("");
  let [travelers, setTravelers] = useState("");
  let [travelerType, setTravelerType] = useState("");
  let [fareOptions, setFareOptions] = useState("");

  return (
    <>
      <select
        name="originLocationCode"
        value={originLocationCode}
        onChange={(e) => setOriginLocationCode(e.target.value)}
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="SYD">SYD</option>
        <option value="BKK">BKK</option>
      </select>
      <select
        name="destinationLocationCode"
        value={destinationLocationCode}
        onChange={(e) => setDestinationLocationCode(e.target.value)}
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="BKK">BKK</option>
        <option value="SYD">SYD</option>
      </select>
      <input
        type="date"
        name="departureDate"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
        required
      />
      <input
        type="time"
        name="departureTime"
        value={departureTime}
        onChange={(e) => setDepartureTime((e.target.value += ":00"))}
        required
      />
      <input
        type="number"
        name="travelers"
        value={travelers}
        onChange={(e) => setTravelers(e.target.value)}
        required
      />
      <select
        name="travelerType"
        value={travelerType}
        onChange={(e) => setTravelerType(e.target.value)}
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="ADULT">Adult</option>
        <option value="CHILD">Child</option>
      </select>
      <select
        name="fareOptions"
        value={fareOptions}
        onChange={(e) => setFareOptions(e.target.value)}
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="STANDARD">Standard</option>
        <option value="First Class">First Class</option>
      </select>

      <button onClick={handleSubmit}>flightOffersSearch</button>

      {/*       
        originLocationCode: "SYD",
        destinationLocationCode: "BKK",
        departureDate: "2025-06-01",
        adults: "2",
        */}
      <button onClick={getTestData}>Get Test Data</button>

      {testData.length === 0 ? (
        <div>no data</div>
      ) : (
        <div>
          Data:
          {Object.keys(testData).map((i, item) => (
            <div key={i}>
              <hr />
              <strong>id: {JSON.stringify(testData[item]["id"])}</strong>
              <hr />
              type: {JSON.stringify(testData[item]["type"])}
              <hr />
              instantTicketingRequired:{" "}
              {JSON.stringify(testData[item]["instantTicketingRequired"])}
              <hr />
              nonHomogeneous: {JSON.stringify(testData[item]["nonHomogeneous"])}
              <hr />
              oneWay: {JSON.stringify(testData[item]["oneWay"])}
              <hr />
              isUpsellOffer: {JSON.stringify(testData[item]["isUpsellOffer"])}
              <hr />
              lastTicketingDate:{" "}
              {JSON.stringify(testData[item]["lastTicketingDate"])}
              <hr />
              lastTicketingDateTime:{" "}
              {JSON.stringify(testData[item]["lastTicketingDateTime"])}
              <hr />
              numberOfBookableSeats:{" "}
              {JSON.stringify(testData[item]["numberOfBookableSeats"])}
              <hr />
              itineraries: {JSON.stringify(testData[item]["itineraries"])}
              <hr />
              price: {JSON.stringify(testData[item]["price"])}
              <hr />
              pricingOptions: {JSON.stringify(testData[item]["pricingOptions"])}
              <hr />
              validatingAirlineCodes:{" "}
              {JSON.stringify(testData[item]["validatingAirlineCodes"])}
              <hr />
              travelerPricings:{" "}
              {JSON.stringify(testData[item]["travelerPricings"])}
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
// {/* {JSON.stringify(data)} */}
// {/* {Object.entries(data).length} */}

export default TestDataButton;
