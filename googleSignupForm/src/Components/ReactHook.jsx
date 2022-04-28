import React, { useEffect, useState } from "react";

const ReactHook = () => {
  const [movies, setMovies] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(search);
    setIsLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=23b1be9f&s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        const { Search, totalResults, Response } = data;
        setIsLoading(false);
        if (Response === "False") {
          setMovies(null);
          setTotalRecords(0);
          return;
        }
        setMovies(Search);
        setTotalRecords(totalResults);
      });
  }, [search]);

  // console.log(movies);

  const _renderMovies = () => {
    console.log("is Loading :", isLoading);
    if (isLoading) {
      console.log("loading");
      return <p>Movies Loading</p>;
    }
    if (movies === null) {
      return <p>No Movies Found</p>;
    }
    return movies.map((obj) => {
      console.log(obj);
      return <h4 key={obj.imdbID}>{obj.Title}</h4>;
    });
  };

  return (
    <>
      <div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {_renderMovies()}
    </>
  );
};

export default ReactHook;
