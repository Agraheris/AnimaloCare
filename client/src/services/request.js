import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export function getAnnoncements() {
    return axios
    .get(`${url}/api/annoncement`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function getAnnoncement(id) {
  return axios
  .get(`${url}/api/annoncement/${id}`)
  .then((response) => response.data.annoncement)
  .catch((error) => {
    console.error(error);
    return null;
  });
}