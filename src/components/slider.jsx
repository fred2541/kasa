import { useEffect, useState } from "react";

const Slider = ({pictures}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [backActive, setBackActive] = useState(true);
    const [nextActive, setNextActive] = useState(true);
    const srcImage = pictures[currentImageIndex];

    useEffect(() => {
        currentImageIndex === 0 ? setBackActive(false) : setBackActive(true);
        currentImageIndex >= (pictures.length - 1) ? setNextActive(false) : setNextActive(true);
    }, [currentImageIndex, pictures]);

    const back = () => {
            currentImageIndex === 0 ? setCurrentImageIndex(pictures.length - 1) : setCurrentImageIndex(currentImageIndex - 1);
    }

    const next = () => {
        currentImageIndex >= (pictures.length - 1) ? setCurrentImageIndex(0) : setCurrentImageIndex(currentImageIndex + 1);
}

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