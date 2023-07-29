import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userData, setData] = useState([]);

  useEffect(() => {
    axios.get("https://node-demo-weld.vercel.app/").then((response) => {
      console.log(response);
      setData(response.data);
    });
  });

  return (
    <div className="App">
      {userData.map((data) => {
        return <div>{data.type}</div>;
      })}
    </div>
  );
}

export default App;
