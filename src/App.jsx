import FlavanoidsStatistics from "./components/FlavanoidsStatistics";

import React, { useEffect, useState } from "react";
import GammaStatistics from "./components/GammaStatistics";

function App() {
  const [dataset, setDataset] = useState([]);
  useEffect(() => {
    fetch("/Wine-Data.json")
      .then((response) => response.json())
      .then((data) => {
        setDataset(data);
        // Calculate statistics here, inside the .then block
        // const statistics = calculateStatistics(data);
        // setStatistics(statistics);
      })
      .catch((error) => {
        console.error("Error loading dataset", error);
      });
  }, []);
  return (
    <div>
      <FlavanoidsStatistics />
      <GammaStatistics dataset = {dataset} />
    </div>
  );
}

export default App;
