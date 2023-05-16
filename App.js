import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!!"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * <div id="parent">
 * <div id="children1">
 * <h1>This is tag1</h1>
 * <h2>This is tag2</h2>
 * </div>
 * <div id="children2">
 * <h1>This is tag1</h1>
 * <h2>This is tag2</h2>
 * </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children1" }, [
    React.createElement("h1", {}, "This is tag12"),
    React.createElement("h2", {}, "This is tag2"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", {}, "This is tag1"),
    React.createElement("h2", {}, "This is tag2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
