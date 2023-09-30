import { useEffect, useState } from "react";
import "./styles.css";
const FlavanoidsStatistics = () => {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    fetch("/Wine-Data.json")
      .then((response) => response.json())
      .then((data) => {
        setDataset(data);
        // Calculate statistics here, inside the .then block
        const statistics = calculateStatistics(data);
        setStatistics(statistics);
      })
      .catch((error) => {
        console.error("Error loading dataset", error);
      });
  }, []);

  const calculateMode = (data) => {
    const frequencyMap = {};
    data.forEach((value) => {
      if (frequencyMap[value]) {
        frequencyMap[value]++;
      } else {
        frequencyMap[value] = 1;
      }
    });
    let maxFrequency = 0;
    let mode = null;
    for (const value in frequencyMap) {
      if (frequencyMap[value] > maxFrequency) {
        maxFrequency = frequencyMap[value];
        mode = value;
      }
    }
    return mode;
  };

  const calculateStatistics = (data) => {
    // console.log("checking data", data);
    const classes = [...new Set(data.map((item) => item.Alcohol))];
    //console.log("Classes:", classes); // Debug output

    const statistics = {};
    classes.forEach((cls) => {
      const classData = data
        .filter((item) => item.Alcohol === cls)
        .map((item) => item.Flavanoids);

      //console.log(`Class ${cls} Data:`, classData); // Debug output

      // Mean calculation
      const mean =
        classData.reduce((acc, value) => acc + value, 0) / classData.length;
      // Median calculation
      const sortedData = [...classData].sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
      const median =
        sortedData.length % 2 === 0
          ? (sortedData[mid - 1] + sortedData[mid]) / 2
          : sortedData[mid];

      // Calculate mode
      const mode = calculateMode(classData);
      statistics[cls] = {
        Mean: mean,
        Median: median,
        Mode: mode,
      };
    });

    return statistics;
  };

  const [statistics, setStatistics] = useState({});

  const classes = Object.keys(statistics);

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Measure</th>
            {classes.map((cls) => (
              <th key={cls}>Class {cls}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="boldtext">Flavanoids Mean</td>
            {classes.map((cls) => (
              <td key={cls}>{statistics[cls].Mean.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td id="boldtext">Flavanoids Median</td>
            {classes.map((cls) => (
              <td key={cls}>{statistics[cls].Median.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td id="boldtext">Flavanoids Mode</td>
            {classes.map((cls) => (
              <td key={cls}>{statistics[cls].Mode}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlavanoidsStatistics;
