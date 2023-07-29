import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({}); // Initialize as an object

  // useEffect(() => {
  //   axios.get("https://node-demo-weld.vercel.app/").then((response) => {
  //     console.log("Server Response:", response.data);
  //     setUserData(response.data); // Set the JSON object in state
  //   });
  // }, []);

  return (
    <div className="App">
      <h1>{userData.name || "unknown"}</h1>
    </div>
  );
}

export default App;
