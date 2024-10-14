import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAnnoncement } from "../services/request";
import AnnoncementCard from "../components/AnnoncementCard";
import usePetTypes from "../hooks/usePetTypes";

function CreationAnnonce() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    petType: -1,
    content: "",
    location: "",
    price: "",
    startDate: "",
    endDate: "",
  });

  const handleChangeTitle = (event) => {
    setFormData({ ...formData, title: event.target.value });
  };

  const handleChangePetType = (event) => {
    setFormData({ ...formData, petType: parseInt(event.target.value, 10) });
  };

  const handleChangeContent = (event) => {
    setFormData({ ...formData, content: event.target.value });
  };

  const handleChangeLocation = (event) => {
    setFormData({ ...formData, location: event.target.value });
  };

  const handleChangePrice = (event) => {
    setFormData({ ...formData, price: event.target.value });
  };

  const handleChangeStartDate = (event) => {
    setFormData({ ...formData, startDate: event.target.value });
  };

  const handleChangeEndDate = (event) => {
    setFormData({ ...formData, endDate: event.target.value });
  };

  const petTypes = usePetTypes();

  const handleSubmit = async () => {
    const result = await addAnnoncement(formData);
    navigate(`/annonce/${result.annoncementId}`);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="Title">
          <Form.Label>Titre de l'annonce</Form.Label>
          <Form.Control
            type="text"
            placeholder="Garde de chat"
            value={formData.title}
            onChange={handleChangeTitle}
          />
        </Form.Group>

        <Form.Select
          className="mb-3"
          value={formData.petType}
          onChange={handleChangePetType}
        >
          <option value="-1">Sélectionnez une espèce</option>
          {petTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </Form.Select>

        <Form.Group className="mb-3" controlId="Content">
          <Form.Label>Contenu de l'annonce</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={5}
            placeholder="Contenu de l'annonce"
            value={formData.content}
            onChange={handleChangeContent}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Location">
          <Form.Label>Ville</Form.Label>
          <Form.Control
            type="text"
            placeholder="Paris"
            value={formData.location}
            onChange={handleChangeLocation}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Price">
          <Form.Label>Tarif horaire</Form.Label>
          <Form.Control
            type="number"
            placeholder="10"
            value={formData.price}
            onChange={handleChangePrice}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="StartDate">
          <Form.Label>Début de la garde</Form.Label>
          <Form.Control
            type="date"
            value={formData.startDate}
            onChange={handleChangeStartDate}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="EndDate">
          <Form.Label>Fin de la garde</Form.Label>
          <Form.Control
            type="date"
            value={formData.endDate}
            onChange={handleChangeEndDate}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSubmit}>
          Publier
        </Button>
      </Form>

      <AnnoncementCard annoncement={formData} />
    </>
  );
}

export default CreationAnnonce;
