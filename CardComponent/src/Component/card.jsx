import { useEffect, useState } from "react";

const Card = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=23b1be9f&s=Batman")
      .then((response) => response.json())
      .then((data) => {
        const { Search } = data;
        setMovies(Search);
      });
  }, []);
  //   console.log(movies);
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
                  <img src={obj.Poster} alt="" />
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
