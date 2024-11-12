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
              <a href="/Azerbaijan">Azerbaijan</a>
              <a href="/Belarus">Belarus</a>
              <a href="/China">China</a>
              <a href="/Estonia">Estonia</a>
              <a href="/Finland">Finland</a>
              <a href="/Georgia">Georgia</a>
              <a href="/Kazakhstan">Kazakhstan</a>
              <a href="/North Korea">North Korea</a>
              <a href="/Latvia">Latvia</a>
              <a href="/Lithuania">Lithuania</a>
              <a href="/Mongolia">Mongolia</a>
              <a href="/Norway">Norway</a>
              <a href="/Poland">Poland</a>
              <a href="/Ukraine">Ukraine</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetailSimmer;
