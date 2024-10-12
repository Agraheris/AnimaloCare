import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import CardPet from "../components/CardPet";
import { addPet, getType } from "../services/request";

function Profil() {
  const { user } = useLoaderData();

  const [showInformation, setShowInformation] = useState(false);
  const handleCloseInformation = () => setShowInformation(false);
  const handleShowInformation = () => setShowInformation(true);

  const [showPet, setShowPet] = useState(false);
  const handleClosePet = () => setShowPet(false);
  const handleShowPet = () => setShowPet(true);

  const [petData, setPetData] = useState({
    name: "",
    type_id: "",
    breed: "",
    age: "",
    additionalInfo: "",
  });

  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function fetchPetTypes() {
      const types = await getType(); 
      setPetTypes(types); 
    }
    fetchPetTypes();
  }, []);

  const handleCreatePet = () => {
    const petToAdd = {
      petName: petData.name,
      type_id: petData.type_id,
      breed: petData.breed,
      age: petData.age,
      information: petData.additionalInfo, 
      user_id: user.id, 
    };
  
    console.info(petToAdd);
    
    addPet(petToAdd);
  };

  const handleValidationPet = () => {
    handleClosePet();
    handleCreatePet();
  };

  const [userData, setUserData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    location: user.location,
  });

  return (
    <div>
      <h2>Profil de l'utilisateur</h2>
      <div>
        <p>Prénom: {userData.firstName}</p>
        <p>Nom: {userData.lastName}</p>
        <p>Email: {userData.email}</p>
        <p>Téléphone: {userData.phoneNumber}</p>
        <p>Location: {userData.location}</p>
        <Button variant="primary" onClick={handleShowInformation}>
          Modifier
        </Button>

        <Modal show={showInformation} onHide={handleCloseInformation}>
          <Modal.Header closeButton>
            <Modal.Title>Information Personnelle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Prénom"
                value={userData.firstName}
                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              />
              <Form.Control
                type="text"
                placeholder="Nom"
                value={userData.lastName}
                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
              />
              <Form.Control
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              <Form.Control
                type="text"
                placeholder="Numéro de téléphone"
                value={userData.phoneNumber}
                onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
              />
              <Form.Control
                type="text"
                placeholder="Ville"
                value={userData.location}
                onChange={(e) => setUserData({ ...userData, location: e.target.value })}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseInformation}>
              Fermer
            </Button>
            <Button variant="primary" onClick={handleCloseInformation}>
              Sauvegarder les changements
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <h3>Ajouter un animal de compagnie</h3>
      <Button variant="primary" onClick={handleShowPet}>
        Ajouter un animal de compagnie
      </Button>
      <Modal show={showPet} onHide={handleClosePet}>
        <Modal.Header closeButton>
          <Modal.Title>Animal de compagnie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Nom de l'animal"
              value={petData.name}
              onChange={(e) => setPetData({ ...petData, name: e.target.value })}
            />
            <Form.Select
              value={petData.type_id}
              onChange={(e) => setPetData({ ...petData, type_id: e.target.value })}
            >
              <option value="">Sélectionnez une espèce</option>
              {petTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </Form.Select>
            <Form.Control
              type="text"
              placeholder="Race de l'animal"
              value={petData.breed}
              onChange={(e) => setPetData({ ...petData, breed: e.target.value })}
            />
            <Form.Control
              type="text"
              placeholder="Âge de l'animal"
              value={petData.age}
              onChange={(e) => setPetData({ ...petData, age: e.target.value })}
            />
            <Form.Control
              type="text"
              placeholder="Informations supplémentaires"
              value={petData.additionalInfo}
              onChange={(e) => setPetData({ ...petData, additionalInfo: e.target.value })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePet}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleValidationPet}>
            Ajouter l'animal
          </Button>
        </Modal.Footer>
      </Modal>

      {user.pets && user.pets.length > 0 ? (
        <div>
          <h3>Vos animaux de compagnie</h3>
          <div>
            {user.pets.map((pet) => (
              <CardPet key={pet.id} pet={pet} user={user} />
            ))}
          </div>
        </div>
      ) : (
        <p>Aucun animal de compagnie enregistré.</p>
      )}
    </div>
  );
}

export default Profil;
