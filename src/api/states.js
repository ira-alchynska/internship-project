import axios from "axios";

const BASE_URL = "https://internship-project-react.herokuapp.com";

export const getStates = async (page, limit = 10) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/states/?_page=${page}&_limit=${limit}`
  );

  return data;
};

export const putStates = async (state, id) => {
  const { data } = await axios.put(`${BASE_URL}/api/states/${id}`, state);

  return data;
};
