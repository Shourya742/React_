import React from "react";
import ReactDOM from "react-dom/client";

//Functional Component

const Title = () => <h1 className="head">Hello, Breaking down react</h1>;
const title = <h1 className="head">Hello, Breaking down react</h1>;

// React Fragments;
const HeadingComponent = () => (
  <>
    <div id="container1">
      {title}
      <h1 className="heading">React functional Component</h1>
    </div>
    <div id="container2"></div>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
