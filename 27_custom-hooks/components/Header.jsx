import { useTheme } from "../hook/useTheme.js";

const Header = () => {
  const [isDark, setIsDark] = useTheme();

  return (
    <>
      <header className={`header-container ${isDark ? "dark" : ""}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in world?</a>
          </h2>
          <p
            className="theme-changer"
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("isDarkMode", !isDark);
            }}
          >
            <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
            &nbsp;&nbsp;{isDark ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
