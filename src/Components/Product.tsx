import { useState } from "react";
import { instance } from "./api";

export function Product() {
  const [name, setName] = useState("");
  const [allList, setlist] = useState("");
  const [data, setdata] = useState();

  const getInfo = () => {
    instance
      .get("", {
        params: { s: name, type: "movie", page: 1 },
      })
      .then((res) => {
        if (res) {
          setdata(res.data);
          console.log(res.data);
        }
      });
  };

  const getall = () => {
    instance.get("", {
      params: { t: allList, type: "movie", polt: "full", r: "json" },
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
          <div className=" bg-amber-700 gap-3.5 ">
            <p className="font-black font-bold">{data}</p>
          </div>
        </div>
      </form>
    </div>
  );
}
