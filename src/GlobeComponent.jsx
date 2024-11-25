import React, { useState, useRef, useEffect } from "react";
import "./GlobeComponent.css";
import Globe from "react-globe.gl";

import * as d3 from "d3-dsv";

function GlobeComponent() {
  const [count, setCount] = useState(0);

  //     "d3-dsv": "^3.0.1",
  // "@react-three/fiber": "^8.17.10",
  // "react": "^18.3.1",
  // "react-dom": "^18.3.1",
  // "react-globe.gl": "^2.27.4",
  // "three": "^0.170.0"

  /* BASIC */
  // const N = 300;
  // const gData = [...Array(N).keys()].map(() => ({
  //   lat: (Math.random() - 0.5) * 180,
  //   lng: (Math.random() - 0.5) * 360,
  //   size: Math.random() / 3,
  //   color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  // }));

  /* HTML MARKERS */
  //   const markerSvg = `<svg viewBox="-4 0 36 36">
  //   <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  //   <circle fill="black" cx="14" cy="14" r="7"></circle>
  // </svg>`;
  //   // Gen random data
  //   const N = 30;
  //   const gData = [...Array(N).keys()].map(() => ({
  //     lat: (Math.random() - 0.5) * 180,
  //     lng: (Math.random() - 0.5) * 360,
  //     size: 7 + Math.random() * 30,
  //     color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  //   }));

  /* CUSTOM GLOBAL STYLING */
  // // material
  // const globeMaterial = new THREE.MeshPhongMaterial();
  // globeMaterial.bumpScale = 10;
  // new THREE.TextureLoader().load(
  //   "//unpkg.com/three-globe/example/img/earth-water.png",
  //   (texture: any) => {
  //     globeMaterial.specularMap = texture;
  //     globeMaterial.specular = new THREE.Color("grey");
  //     globeMaterial.shininess = 15;
  //   }
  // );
  // const globeEl = useRef();
  // useEffect(() => {
  //   const directionalLight = globeEl.current
  //     .lights()
  //     .find((obj3d: any) => obj3d.type === "DirectionalLight");
  //   directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
  // }, []);

  /* CUSTOM GLOBAL LAYER */
  // const N = 300;
  // const randomData = [...Array(N).keys()].map(() => ({
  //   lat: (Math.random() - 0.5) * 180,
  //   lng: (Math.random() - 0.5) * 360,
  //   alt: Math.random() * 0.8 + 0.1,
  //   radius: Math.random() * 5,
  //   color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  // }));
  // const globeEl = useRef();
  // const [data, setData] = useState(randomData);

  // useEffect(() => {
  //   (function moveSpheres() {
  //     data.forEach((d) => (d.lat += 0.2));
  //     setData(data.slice());
  //     requestAnimationFrame(moveSpheres);
  //   })();
  // }, []);

  // useEffect(() => {
  //   globeEl.current.pointOfView({ altitude: 3.5 });
  // }, []);

  /* POPULATION HEAT MAP */
  // const [popData, setPopData] = useState([]);

  // useEffect(() => {
  //   // load data
  //     fetch("../datasets/world_population.csv")
  //     .then((res) => res.text())
  //     .then((csv) =>
  //       d3.csvParse(csv, ({ lat, lng, pop }) => ({
  //         lat: +lat,
  //         lng: +lng,
  //         pop: +pop,
  //       }))
  //     )
  //   .then(setPopData);
  // }, []);

  /* US INTERNATIONAL OUTBOUNDS */
  const COUNTRY = "United States";
  const OPACITY = 0.22;

  const airportParse = ([
    airportId,
    name,
    city,
    country,
    iata,
    icao,
    lat,
    lng,
    alt,
    timezone,
    dst,
    tz,
    type,
    source,
  ]) => ({
    airportId,
    name,
    city,
    country,
    iata,
    icao,
    lat,
    lng,
    alt,
    timezone,
    dst,
    tz,
    type,
    source,
  });
  const routeParse = ([
    airline,
    airlineId,
    srcIata,
    srcAirportId,
    dstIata,
    dstAirportId,
    codeshare,
    stops,
    equipment,
  ]) => ({
    airline,
    airlineId,
    srcIata,
    srcAirportId,
    dstIata,
    dstAirportId,
    codeshare,
    stops,
    equipment,
  });

  const globeEl = useRef();
  const [airports, setAirports] = useState([]);
  const [routes, setRoutes] = useState([]);

  const indexBy = (list, iteratee, context) => {
    return list.reduce((map, obj) => {
      const key =
        typeof iteratee === "string"
          ? obj[iteratee]
          : iteratee.call(context, obj);
      map[key] = obj;
      return map;
    }, {});
  };

  useEffect(() => {
    // load data
    Promise.all([
      fetch(
        "https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat"
      )
        .then((res) => res.text())
        .then((d) => d3.csvParseRows(d, airportParse)),
      fetch(
        "https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat"
      )
        .then((res) => res.text())
        .then((d) => d3.csvParseRows(d, routeParse)),
    ]).then(([airports, routes]) => {
      const byIata = indexBy(airports, "iata", false);

      const filteredRoutes = routes
        .filter(
          (d) =>
            byIata.hasOwnProperty(d.srcIata) && byIata.hasOwnProperty(d.dstIata)
        ) // exclude unknown airports
        .filter((d) => d.stops === "0") // non-stop flights only
        .map((d) =>
          Object.assign(d, {
            srcAirport: byIata[d.srcIata],
            dstAirport: byIata[d.dstIata],
          })
        )
        .filter(
          (d) =>
            d.srcAirport.country === COUNTRY && d.dstAirport.country !== COUNTRY
        ); // international routes from country

      setAirports(airports);
      setRoutes(filteredRoutes);
    });
  }, []);

  useEffect(() => {
    // aim at continental US centroid
    console.log('globeEl.current: ', globeEl )
    globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 });
  }, []);

  return (
    <>
    <div className="container">
      {/* US INTERNATIONAL OUTBOUNDS */}
      <Globe height="30vh" width={1300}
        options={{
          enableGlobeGlow: true,
          globeGlowCoefficient: 0.1,
          globeGlowColor: 'gold',
          globeGlowPower: 4,
          globeGlowRadiusScale: 0.5,
        }}
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        arcsData={routes}
        arcLabel={(d) => `${d.airline}: ${d.srcIata} &#8594; ${d.dstIata}`}
        arcStartLat={(d) => +d.srcAirport.lat}
        arcStartLng={(d) => +d.srcAirport.lng}
        arcEndLat={(d) => +d.dstAirport.lat}
        arcEndLng={(d) => +d.dstAirport.lng}
        arcDashLength={0.25}
        arcDashGap={1}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={4000}
        arcColor={(d) => [
          `rgba(0, 255, 0, ${OPACITY})`,
          `rgba(255, 0, 0, ${OPACITY})`,
        ]}
        arcsTransitionDuration={0}
        pointsData={airports}
        pointColor={() => "orange"}
        pointAltitude={0}
        pointRadius={0.02}
        pointsMerge={true}
      />

      {/* POPULATION HEAT MAP */}
      {/* <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        heatmapsData={[popData]}
        heatmapPointLat="lat"
        heatmapPointLng="lng"
        heatmapPointWeight="pop"
        heatmapBandwidth={0.9}
        heatmapColorSaturation={2.8}
        enablePointerInteraction={false}
      /> */}

      {/* CUSTOM GLOBAL LAYER */}
      {/* <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        customLayerData={data}
        customThreeObject={(d) =>
          new THREE.Mesh(
            new THREE.SphereGeometry(d.radius),
            new THREE.MeshLambertMaterial({ color: d.color })
          )
        }
        customThreeObjectUpdate={(obj, d) => {
          Object.assign(
            obj.position,
            globeEl.current.getCoords(d.lat, d.lng, d.alt)
          );
        }}
      /> */}

      {/* CUSTOM GLOBAL STYLING */}
      {/* <Globe
        ref={globeEl}
        globeMaterial={globeMaterial}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      /> */}

      {/* HTML MARKERS */}
      {/* <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        htmlElementsData={gData}
        htmlElement={(d) => {
          const el = document.createElement("div");
          el.innerHTML = markerSvg;
          el.style.color = ["red", "white", "blue", "green"][
            Math.round(Math.random() * 3)
          ];
          el.style.width = `${7 + Math.random() * 30}px`;
          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => console.info(d);
          return el;
        }}
      /> */}

      {/* Basic */}
      {/* <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={gData}
        pointAltitude="size"
        pointColor="color"
      /> */}
      </div>
    </>
  );
}

export default GlobeComponent;
