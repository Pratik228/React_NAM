import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const data = api.getData();
const Title = () => <h1>Welcome to the fabulous landing page</h1>;
const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <h1>Hello there</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
