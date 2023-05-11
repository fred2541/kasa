import { useParams, Navigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Slider from "src/components/Logement/slider";
import Error404 from "./404";
import Detail from "src/components/Logement/detail";

function FicheLogement() {
    const {id} = useParams();
    const [logement, setLogement] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { title, location, pictures, tags, host, rating, equipments, description} = logement;
    const data = {title: title, location: location, tags: tags, host: host, rating: rating, equipments: equipments, description: description};

    useEffect(() => {
    const fetchData = async () => {
      try {
          const reponse = await fetch("/API/logements.json");
          const jsonData = await reponse.json();
          // return only the ID to find
          const data = jsonData.find((logement) => logement.id === id);
          if (!data) { // if ID dont exist => error
            throw new SyntaxError(); // (*)
          }
          setLogement(data);
      } catch (err){ // error on fetch or ID dont exist on json file
          setError(true);
      } finally {
        setIsLoading(false);
      }
  }
  fetchData() // Call fecthData
}, [id]);

if (error) { // on error, redirect to 404
  return (
      <div className="error">
          <Navigate to="/erreur" replace={<Error404 />} />
      </div>
  )
}

return !isLoading ? (
      <div className="logement">
        <Slider pictures={pictures}/>
        <Detail data={data}/>
      </div>
    ) : (
      <div>Chargement des data en cours ...</div>
  );
  }
  
  export default FicheLogement