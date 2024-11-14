import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      {/* Navigation bar with links to various pages in the app */}
      <nav>
        <ul className="app-ul">
          {/* Link to the home page */}
          <li className="app-li">
            <Link to="/">Home</Link>
          </li>

          {/* Incorrect usage: This link to 'Movies' uses an <a> tag, causing a full page reload. 
                Instead, `Link` or `NavLink` from `react-router-dom` should be used for client-side navigation. */}
          <li className="app-li">
            <a href="/movies">Movies using a tag</a>
          </li>

          {/* Correct usage: NavLink for the 'Movies' page, allowing client-side routing without a reload */}
          <li className="app-li">
            <NavLink to="/movies">Movies</NavLink>
          </li>

          {/* Link to the 'My Info' page */}
          <li className="app-li"></li>
          <Link to="/my-info">My Info</Link>
        </ul>
      </nav>
    </>
  );
};
