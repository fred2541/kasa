import React from "react";
import { useState, useEffect } from "react";
import Cards from "./cards";

const Gallery = () => {
    const [apparts, setApparts] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reponse = await fetch("/API/logements.json");
                const jsonData = await reponse.json();
                await delay(500); // remove this on Production !!
                setApparts(jsonData);
                setIsLoading(false);
            } catch (err){
                setIsLoading(false);
                setError(err);
            }
        }
        fetchData() // Call fectData
    }, []);

    if (error) {
        return (
            <div className="error">
                <p>Erreur: {error.message}</p>
            </div>
        )
      }

    return !isLoading ? (
        <div className="gallery">
            {
            apparts.map((appart) => 
            <Cards
            key={appart.id}
          dataAppart={appart}
        />
            )
            }
        </div>
    ) : (
        <div className="gallery">Chargement des data en cours ...</div>
    );
}
export default Gallery