import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { addPet, getType, updateUser } from "../services/request";
import CardPet from "../components/CardPet";

function Profil() {
  const { user } = useLoaderData();

  const [showModals, setShowModals] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    location: false,
  });

  const [showEditButtons, setShowEditButtons] = useState(false);

  const handleClose = (field) =>
    setShowModals({ ...showModals, [field]: false });
  const handleShow = (field) => setShowModals({ ...showModals, [field]: true });

  const [userData, setUserData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    location: user.location,
    id: user.id,
  });

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

  const handleUpdateField = async (field) => {
    const updatedData = { ...userData };
    console.info(updatedData);

    try {
      if (updatedData.id) {
        await updateUser(updatedData);
      } else {
        console.error("L'ID de l'utilisateur n'est pas défini.");
      }
      handleClose(field);
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour des informations utilisateur :",
        error
      );
    }
  };
  return (
    <div>
      <h2>Profil de l'utilisateur</h2>
      <Button
        variant="secondary"
        onClick={() => setShowEditButtons(!showEditButtons)}
      >
        Modifier le Profil
      </Button>

      <div>
        <p>Prénom: {userData.firstName}</p>
        {showEditButtons && (
          <Button variant="secondary" onClick={() => handleShow("firstName")}>
            Modifier
          </Button>
        )}
        <Modal
          show={showModals.firstName}
          onHide={() => handleClose("firstName")}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modifier le Prénom</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="text"
                value={userData.firstName}
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => handleClose("firstName")}
            >
              Fermer
            </Button>
            <Button
              variant="primary"
              onClick={() => handleUpdateField("firstName")}
            >
              Sauvegarder
            </Button>
          </Modal.Footer>
        </Modal>

        <p>Nom: {userData.lastName}</p>
        {showEditButtons && (
          <Button variant="secondary" onClick={() => handleShow("lastName")}>
            Modifier
          </Button>
        )}
        <Modal
          show={showModals.lastName}
          onHide={() => handleClose("lastName")}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modifier le Nom</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="text"
                value={userData.lastName}
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose("lastName")}>
              Fermer
            </Button>
            <Button
              variant="primary"
              onClick={() => handleUpdateField("lastName")}
            >
              Sauvegarder
            </Button>
          </Modal.Footer>
        </Modal>

        <p>Email: {userData.email}</p>
        {showEditButtons && (
          <Button variant="secondary" onClick={() => handleShow("email")}>
            Modifier
          </Button>
        )}
        <Modal show={showModals.email} onHide={() => handleClose("email")}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier l'Email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose("email")}>
              Fermer
            </Button>
            <Button
              variant="primary"
              onClick={() => handleUpdateField("email")}
            >
              Sauvegarder
            </Button>
          </Modal.Footer>
        </Modal>

        <p>Téléphone: {userData.phoneNumber}</p>
        {showEditButtons && (
          <Button variant="secondary" onClick={() => handleShow("phoneNumber")}>
            Modifier
          </Button>
        )}
        <Modal
          show={showModals.phoneNumber}
          onHide={() => handleClose("phoneNumber")}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modifier le Téléphone</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="text"
                value={userData.phoneNumber}
                onChange={(e) =>
                  setUserData({ ...userData, phoneNumber: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => handleClose("phoneNumber")}
            >
              Fermer
            </Button>
            <Button
              variant="primary"
              onClick={() => handleUpdateField("phoneNumber")}
            >
              Sauvegarder
            </Button>
          </Modal.Footer>
        </Modal>

        <p>Location: {userData.location}</p>
        {showEditButtons && (
          <Button variant="secondary" onClick={() => handleShow("location")}>
            Modifier
          </Button>
        )}
        <Modal
          show={showModals.location}
          onHide={() => handleClose("location")}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modifier la Ville</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="text"
                value={userData.location}
                onChange={(e) =>
                  setUserData({ ...userData, location: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose("location")}>
              Fermer
            </Button>
            <Button
              variant="primary"
              onClick={() => handleUpdateField("location")}
            >
              Sauvegarder
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
              onChange={(e) =>
                setPetData({ ...petData, type_id: e.target.value })
              }
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
              onChange={(e) =>
                setPetData({ ...petData, breed: e.target.value })
              }
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
              onChange={(e) =>
                setPetData({ ...petData, additionalInfo: e.target.value })
              }
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
