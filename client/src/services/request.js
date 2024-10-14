import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export function getAnnoncements() {
  return axios
    .get(`${url}/api/annoncement`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function getAnnoncement(id) {
  return axios
    .get(`${url}/api/annoncement/${id}`, {
      withCredentials: true,
    })
    .then((response) => response.data.annoncement)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function getUser(id) {
  return axios
    .get(`${url}/api/user/${id}`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function addPet(petData) {
  return axios
    .post(`${url}/api/pet`, petData, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erreur lors de l'ajout de l'animal :", error);
      return [];
    });
}

export function getType() {
  return axios
    .get(`${url}/api/types`, {
      withCredentials: true,
    })
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

export function addUser(userData) {
  return axios
    .post(`${url}/api/user`, userData, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erreur lors de la création d'utilisateur :", error);
      return [];
    });
}

export function login(userData) {
  return axios
    .post(`${url}/api/login`, userData, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erreur lors de la connexion", error);
      return [];
    });
}

export function addAnnoncement(formData) {
  return axios
    .post(`${url}/api/annoncement`, formData, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erreur lors de la publication :", error);
      return [];
    });
}
