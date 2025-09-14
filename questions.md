// frontend
What is Call, bind, apply? explain with example.
Write an custom hook to replicate useState hook?
How React render works?
What is batching ?
ES6 features
Hoisting
Closure with example
This keyword
how arrow function different from regular other than syntax
Redux
Let var const
Typescript vs javascript
Middleware
Api- to call and show data in react
Rest apis
Jest test
How to mock functions
Bootstrap, why its is effective or useful
Mongo db different from traditional
HTML semantic elements
Type interference
Map vs filter
lazy loading with implementation
performance check in raect which tools
react queery vs redux toolkit querry

// Node js

What is memory leak and how you handle it?
What is middleware and how its work?
Structure of node folders
Express
How to implement express
Replica Set
Sharding
create a server with http

import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Provider from "react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export const userContext = createContext(null);
root.render(
<StrictMode>
<userContext.Provider value={10}>
<App />
</userContext.Provider>
</StrictMode>
);
import { useContext } from "react";
import { userContext } from "./index.js";
import "./styles.css";

export default function App() {
const user = useContext(userContext);
return (

<div className="App">
<h1>{user}</h1>
<h2>Start editing to see some magic happen!</h2>
</div>
);
}
