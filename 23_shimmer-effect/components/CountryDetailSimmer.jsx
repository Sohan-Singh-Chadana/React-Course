import React from "react";
import "./CountryDetailSimmer.css";

const CountryDetailSimmer = () => {
  return (
    <main>
      <div className="country-details-container">
        <div className="country-details ">
          <div className="flag-img simmer-img"></div>
          <div className="details-text-container shimmer-container">
            <h1>Greenland</h1>
            <div className="details-text shimmer-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">Kalaallit Nunaat</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">56,367</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">Americas</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">North America</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">Nuuk</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">.gl</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">krone</span>
              </p>
              <p>
                <b>Language: </b>
                <span className="language">Greenlandic</span>
              </p>
            </div>
            <div className="border-countries shimmer-border">
              <b>Border Countries:</b>&nbsp;
              <a href="/Bangladesh">Bangladesh</a>
              <a href="/Bhutan">Bhutan</a>
              <a href="/Myanmar">Myanmar</a>
              <a href="/China">China</a>
              <a href="/Nepal">Nepal</a>
              <a href="/Pakistan">Pakistan</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetailSimmer;
