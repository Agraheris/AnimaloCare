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

export function getUser(id) {
  return axios
    .get(`${url}/api/user/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function addPet(petData) {
  return axios
    .post(`${url}/api/pet`, petData)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erreur lors de l'ajout de l'animal :", error);
      return [];
    });
}

export function getType() {
  return axios
    .get(`${url}/api/types`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export async function updateUser(userData) {
  try {
    const response = await axios.put(
      `${url}/api/user/${userData.id}`,
      userData,
      {
        withCredentials: true,
      }
    );
    console.info(response);
    return response;
  } catch (error) {
    console.error("Erreur lors de la mise à jour des infos utilisateur", error);
    throw error;
  }
}
