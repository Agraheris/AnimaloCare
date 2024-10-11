import { useState, useEffect } from "react";

function Profil() {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        location: "",
      });
    
      const [petData, setPetData] = useState({
        petName: "",
        typeId: "",
        breed: "",
        age: "",
        information: "",
      });
    
      useEffect(() => {
        // Simuler la récupération des données utilisateur depuis une API ou base de données
        const fetchUserData = async () => {
          // Remplacer par un appel à votre API pour récupérer les données utilisateur
          const user = {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            phoneNumber: "123-456-7890",
            location: "Montpellier",
          };
          setUserData(user);
        };
    
        fetchUserData();
      }, []);
    
      // Gestion des changements dans le formulaire pour l'animal de compagnie
      const handlePetChange = (e) => {
        const { name, value } = e.target;
        setPetData({ ...petData, [name]: value });
      };
    
      // Gestion de la soumission du formulaire pour l'animal de compagnie
      const handlePetSubmit = (e) => {
        e.preventDefault();
      };

  return (
    <div>
    <h2>Profil de l'utilisateur</h2>
    <div>
      <p>Prénom: {userData.firstName}</p>
      <p>Nom: {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Téléphone: {userData.phoneNumber}</p>
      <p>Location: {userData.location}</p>
      <button type="button"> Modifier </button>
    </div>

    <h3>Ajouter un animal de compagnie</h3>
    <form onSubmit={handlePetSubmit}>
      <div>
        <label htmlFor="petName">Nom de l'animal :</label>
        <input
          type="text"
          id="petName"
          name="petName"
          value={petData.petName}
          onChange={handlePetChange}
          required
        />
      </div>
      <div>
        <label htmlFor="typeId">Type d'animal :</label>
        <input
          type="number"
          id="typeId"
          name="typeId"
          value={petData.typeId}
          onChange={handlePetChange}
          required
        />
      </div>
      <div>
        <label htmlFor="breed">Race :</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={petData.breed}
          onChange={handlePetChange}
        />
      </div>
      <div>
        <label htmlFor="age">Âge :</label>
        <input
          type="number"
          id="age"
          name="age"
          value={petData.age}
          onChange={handlePetChange}
        />
      </div>
      <div>
        <label htmlFor="information">Informations supplémentaires :</label>
        <textarea
          id="information"
          name="information"
          value={petData.information}
          onChange={handlePetChange}
        />
      </div>
      <button type="submit">Ajouter un animal</button>
    </form>
  </div>
);
}

export default Profil