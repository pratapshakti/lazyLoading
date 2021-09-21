import React, { lazy, Suspense } from "react";
import "./App.css";
import Loader from "./Loader";
const Tag = lazy(() => import("./Tag"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* while the Tag is loading show this Loader component. so idea is while loading the bigger 
        element show the loader */}
        <Suspense fallback={<Loader />}>
          <Tag val="hello" />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
