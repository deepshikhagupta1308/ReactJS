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
      <div className="card">
        {movies.map((obj) => {
          return (
            <>
              <div className="primary-element">
                <h4>{obj.Title}</h4>
              </div>
              <div className="secondary-element">
                <img src={obj.Poster} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
