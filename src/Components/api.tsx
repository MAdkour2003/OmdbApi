import axios from "axios";

export const instance = axios.create({
  baseURL: "http://www.omdbapi.com/",
    params: { apikey:"3092d3cb"}
});

export const fetchdata = async () => {
  try {
    const response = await instance.get("&i");
    return response.data;
  } catch {
    console.log("error found in fetchdata");
  }
};
