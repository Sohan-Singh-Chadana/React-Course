import React from "react";
import "./CountriesListShimmer.css";

const CountriesListShimmer = () => {
  // new Array(10).fill('')

  return (
    <div className="countries-container">
      {Array.from({ length: 20 }).map((elem, i) => {
        return (
          <div key={i} className="country-card shimmer-card">
            <div className="cover-img"></div>
            <div className="card-text">
              <h3 className="card-title">South Georgia</h3>
              <p>
                <b>Population: </b>30
              </p>
              <p>
                <b>Region: </b>Antarctic
              </p>
              <p>
                <b>Capital: </b>King Edward Point
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesListShimmer;
