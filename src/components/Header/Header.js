import { Link } from "react-router-dom";

function Header({ selectedGenre, onGenreChange }) {
  const allGenres = ["All", "Novel", "Roman", "Sci-Fi"];

  return (
    <header className="header">
      <div className="header-buttons">
        <Link to="/rented" className="header-rented-button">
          Rented
        </Link>
        <Link to="/contactUs" className="header-contactus-button">
          Contact us
        </Link>
      </div>
      <div className="header-shelfs">
        <Link to="/">
          <h1>Our shelfs</h1>
        </Link>
      </div>
      <div className="genre-filter">
        <label htmlFor="genre-select">Filter by Genre: </label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
          className="genre-select"
        >
          {allGenres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        {selectedGenre !== "All" && (
          <button
            className="clear-filter-btn"
            onClick={() => onGenreChange("All")}
          >
            Show All Books
          </button>
        )}

      </div>

    </header>
  );
}

export default Header;
