import React, { useContext } from "react";
import "./CountryDetailSimmer.css";
import { ThemeContext } from "../contexts/ThemeContext";

const CountryDetailSimmer = () => {
  const [isDark] = useContext(ThemeContext);
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <div className="country-details ">
          <div className="flag-img simmer-img"></div>
          <div className="details-text-container shimmer-container">
            <h1></h1>
            <div className="details-text shimmer-text">
              <p>
                <b> </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b> </b>
                <span className="population"></span>
              </p>
              <p>
                <b> </b>
                <span className="region"></span>
              </p>
              <p>
                <b> </b>
                <span className="sub-region"> </span>
              </p>
              <p>
                <b> </b>
                <span className="capital"></span>
              </p>
            </div>
            <div className="border-countries shimmer-border">
              <b></b>&nbsp;
              <a href="/Azerbaijan"></a>
              <a href="/Belarus"></a>
              <a href="/China"></a>
              <a href="/Estonia"></a>
              <a href="/Finland"></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetailSimmer;
