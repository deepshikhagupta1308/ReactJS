import { useEffect, useState, useContext } from "react";
import { themeContext } from "../context/Theme";
import { Link } from "react-router-dom";

const Card = () => {
  const [movies, setMovies] = useState([]);

  const context = useContext(themeContext);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=23b1be9f&s=Batman")
      .then((response) => response.json())
      .then((data) => {
        const { Search } = data;
        setMovies(Search);
      });
  }, []);
  console.log(context.theme.backgroundColor);
  return (
    <>
      <div id="parent">
        {movies.map((obj) => {
          return (
            <>
              <div id="child" key={obj.imdbID}>
                <div>
                  <h4>{obj.Title}</h4>
                </div>
                <div>
                  <Link to={`/details/${obj.imdbID}`}>
                    <img src={obj.Poster} alt="" />
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
