import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export default function getAnnoncements() {
    return axios
    .get(`${url}/api/annoncement`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return null;
    });
}