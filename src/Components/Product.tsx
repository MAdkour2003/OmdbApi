import { useState } from "react";
import { instance } from "./api";

export function Product() {
  const [name, setName] = useState("");
  const [allList, setlist] = useState("");
  const [data, setdata] = useState<any>("");
  const [singledata, setsingledata] = useState<any>("");

  const getInfo = () => {
    instance
      .get("", {
        params: { s: name, type: "movie", page: 1 },
      })
      .then((res) => {
        if (res) {
          setdata(res.data.Search);
          console.log(res.data);
        }
      });
  };

  const getall = () => {
    instance
      .get("", {
        params: { t: allList, type: "movie", polt: "full", r: "json" },
      })
      .then((res) => {
        if (res) {
          setsingledata(res.data);
          console.log(res.data);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getInfo();
  };
  const handleSubmitallList = (e) => {
    e.preventDefault();
    getall();
  };

  return (
    <div>
      <form>
        <div className="flex p-6 m-2 text-teal-300 bg-blue-600">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            placeholder="movie name"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Search
          </button>

          <input
            type="text"
            name="name"
            placeholder="All movie"
            onChange={(event) => setlist(event.target.value)}
          />
          <button type="submit" onClick={(e) => handleSubmitallList(e)}>
            Find List
          </button>
        </div>
      </form>

      {singledata && (
        <div className="bg-amber-700 p-4 m-2 text-white rounded">
          <h2 className="text-xl font-bold">{singledata.Title}</h2>
          <p>Year: {singledata.Year}</p>
          <p>Rated: {singledata.Rated}</p>
          <p>Runtime: {singledata.Runtime}</p>
          <p>Genre: {singledata.Genre}</p>
          <p>Director: {singledata.Director}</p>
          <p>Plot: {singledata.Plot}</p>
          {singledata.Poster !== "N/A" && (
            <img
              src={singledata.Poster}
              alt={singledata.Title}
              className="w-32 mt-2"
            />
          )}
        </div>
      )}

      {data &&
        data.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-amber-700 p-4 m-2 text-white rounded"
          >
            <h2 className="text-xl font-bold">{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
            {movie.Poster !== "N/A" && (
              <img src={movie.Poster} alt={movie.Title} className="w-32 mt-2" />
            )}
          </div>
        ))}
    </div>
  );
}
