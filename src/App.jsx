import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Heading from "./components/Heading";
import Common from "./components/Common.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

function App() {
  //const [cityval, setCityval] = setState("Bengaluru");
  const [sharedData, setSharedData] = useState("Bengaluru");

  const handleStateData = (data) => {
    setSharedData(data);
  };

  return (
    <>
      <Navbar sendData={handleStateData} />
      <div className="container">
        <Heading />
        <main>
          <WeatherCard city={sharedData} />
          <Common />
        </main>
      </div>
    </>
  );
}

export default App;
