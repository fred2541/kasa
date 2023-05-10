import { useState, useCallback } from "react";

const Slider = ({pictures}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const srcImage = pictures[currentImageIndex];

    const back = useCallback(() => {
            currentImageIndex === 0 ? setCurrentImageIndex(pictures.length - 1) : setCurrentImageIndex(currentImageIndex - 1);
    }, [currentImageIndex, pictures]);

    const next = useCallback(() => {
        currentImageIndex >= (pictures.length - 1) ? setCurrentImageIndex(0) : setCurrentImageIndex(currentImageIndex + 1);
}, [currentImageIndex, pictures]);

    return (
        <div className="slide">
            <img className="left" onClick={back} alt="Back"/>
            <img className="image" src={srcImage} alt=""/>
            <img className="right" onClick={next} alt="Next"/>
            <span className="number" >{(currentImageIndex + 1)}/{(pictures.length)}</span>
        </div>
    )
}
export default Slider