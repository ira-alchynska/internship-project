import axios from "axios";

const BASE_URL = "https://internship-project-react.herokuapp.com";

export const getCities = async (page, limit = 10) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/cities/?_page=${page}&_limit=${limit}`
  );

  return data;
};

export const putCities = async (city, id) => {
  const { data } = await axios.put(`${BASE_URL}/cities/${id}/`, city);

  return data;
};
