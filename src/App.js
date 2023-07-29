import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({}); // Initialize as an object

  useEffect(() => {
    axios.get("http://localhost:5555/").then((response) => {
      console.log("Server Response:", response.data);
      setUserData(response.data); // Set the JSON object in state
    });
  }, []);

  return (
    <div className="App">
      <h1>{userData.name}</h1>
    </div>
  );
}

export default App;
