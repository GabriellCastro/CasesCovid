import React, { memo, useContext } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { CasesContex } from "../context/CasesProvider";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = ({ setTooltipContent }) => {
  const { covidData, variantCurrent } = useContext(CasesContex);
  console.log(covidData);

  function getTotalCasesByCountryName(coutryName) {
    const covidDataTemp = covidData.filter(
      (coutry) => coutry.location === coutryName
    );

    const totalCases = covidDataTemp.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.num_sequences_total,
      0
    );

    return totalCases;
  }

  return (
    <div className="mx-1">
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  let data = [];
                  const totalCases = getTotalCasesByCountryName(
                    geo.properties.NAME
                  );
                  covidData.forEach((availableVariant) => {
                    if (availableVariant.location === geo.properties.NAME) {
                      data = availableVariant;
                    }
                  });
                  setTooltipContent(`
                      ${data.location || geo.properties.NAME} |
                      ${data.date} |
                      ${variantCurrent ?? ""} 
                      ${variantCurrent && "|"} 
                      ${totalCases} 
                    `);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#ECEFF1",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                  hover: {
                    fill: "#607D8B",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#FF5722",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
