import "./index.css";
import ThemeSwitcher from "./ThemeSwitcher";
function Header() {
  return (
    <header className="navbar bg-base-200">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">My Website</a>
      </div>
      <div className="navbar-end p-2">
        <div id="theme-switcher">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
