import React, { useState, useEffect } from "react";

function GammaStatistics({ dataset }) {
  const calculateGamma = (dataPoint) => {
    return (dataPoint.Ash * dataPoint.Hue) / dataPoint.Magnesium;
  };

  const groupDataByClass = () => {
    const groupedData = {};
    dataset.forEach((dataPoint) => {
      const cls = dataPoint.Alcohol;
      if (!groupedData[cls]) {
        groupedData[cls] = [];
      }
      groupedData[cls].push(calculateGamma(dataPoint));
    });
    return groupedData;
  };

  const calculateMean = (data) => {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  };

  const calculateMedian = (data) => {
    const sortedData = data.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    return sortedData.length % 2 === 0
      ? (sortedData[mid - 1] + sortedData[mid]) / 2
      : sortedData[mid];
  };

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

  const groupedData = groupDataByClass();

  const classes = Object.keys(groupedData);

  const statistics = {};
  classes.forEach((cls) => {
    const data = groupedData[cls];
    statistics[cls] = {
      Mean: calculateMean(data).toFixed(3),
      Median: calculateMedian(data).toFixed(3),
      Mode: calculateMode(data),
    };
  });

  return (
    <div>
      <table>
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
            <td>Gamma Mean</td>
            {classes.map((cls) => (
              <td key={cls}>{statistics[cls].Mean}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Median</td>
            {classes.map((cls) => (
              <td key={cls}>{statistics[cls].Median}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            {classes.map((cls) => (
              <td key={cls}>{statistics[cls].Mode}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GammaStatistics;
