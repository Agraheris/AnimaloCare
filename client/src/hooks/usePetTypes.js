import { useState, useEffect } from 'react'
import { getType } from "../services/request";

const usePetTypes = () => {
    const [petTypes, setPetTypes] = useState([]);

    useEffect(() => {
      async function fetchPetTypes() {
        const types = await getType();
        setPetTypes(types);
      }
      fetchPetTypes();
    }, []);

    return petTypes;
};

export default usePetTypes;
