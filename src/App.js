import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";

import GlobeComponent from "./GlobeComponent";
import NavBar from "./Navbar";
import DealsSection from "./DealsSection";
import DrawerComponent from "./DrawerComponent";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <GlobeComponent /> */}
      <DrawerComponent />
      {/* <DealsSection /> */}
    </>
  );
}

export default App;
