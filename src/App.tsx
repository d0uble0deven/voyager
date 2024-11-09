import { useState, useRef, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

// import { GridHelper } from "three";
// import { extend } from "@react-three/fiber";

import GlobeComponent from "./GlobeComponent";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  // const meshRef = useRef<any>(null!);

  // useEffect(() => {
  //   console.log(Boolean(meshRef.current));
  // }, []);

  // // Create our custom element
  // class CustomElement extends GridHelper {}

  // // Extend so the reconciler will learn about it
  // extend({ CustomElement });

  return (
    <>
      hello
      {/* <Canvas> */}
      {/* <ambientLight />
        <Suspense fallback={"Loading....."}> */}
      {/* <div ref={meshRef}> */}
      {/* <GlobeComponent /> */}
      {/* </div> */}
      {/* </Suspense> */}
      {/* </Canvas> */}
      bye
    </>
  );
}

export default App;
