import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

function FicheLogement() {
    const {id} = useParams();
    const [logement, setLogement] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { title, location, pictures, tags, host, rating, equipments, description} = logement;

    useEffect(() => {
    const fetchData = async () => {
      try {
          const reponse = await fetch("/API/logements.json");
          const jsonData = await reponse.json();
          // return only the ID to find
          const data = jsonData.find((logement) => logement.id === id);
          if (!data) {
            throw new SyntaxError("id incorrect!"); // (*)
          }
          setLogement(data);
          setIsLoading(false);
      } catch (err){
          setIsLoading(false);
          setError(err);
      }
  }
  fetchData() // Call fecthData
}, [id]);

if (error) { // gerer l'erreur fait redirection 404 !!!!!
  return (
      <div className="error">
          <p>Erreur: {error.message}</p>
      </div>
  )
}

return !isLoading ? (
      <div>fiche logement {location}</div>
    ) : (
      <div>Chargement des data en cours ...</div>
  );
  }
  
  export default FicheLogement