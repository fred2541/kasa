import React from "react";
import { useState, useEffect } from "react";

const Gallery = () => {
    const [apparts, setApparts] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reponse = await fetch("/API/logements.json");
                const jsonData = await reponse.json();
                setApparts(jsonData)
                setIsLoading(false)
                console.log(jsonData)
            } catch (error){
                setIsLoading(false)
                setError(error)
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
            <div>appart</div>
            )
            }
        </div>
    ) : (
        <div className="gallery">erreur</div>
    );
}
export default Gallery