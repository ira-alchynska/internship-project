import axios from "axios";

const BASE_URL = "https://internship-project-react.herokuapp.com";

export const getCountries = async (page, limit = 10) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/countries/?_page=${page}&_limit=${limit}`
  );

  return data;
};

export const putCountries = async (country, id) => {
  const { data } = await axios.put(`${BASE_URL}/countries/${id}/`, country);

  return data;
};
