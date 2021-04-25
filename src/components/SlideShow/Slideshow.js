import { useEffect, useState } from 'react';
import './Slideshow.css';

export default function Slideshow ({images}){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    let timer = null;

    const changeImageIndex = () => {
        timer = setTimeout(() => {
            setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
        },3000);     
    }

    useEffect(() => {
        changeImageIndex();

        return () => clearTimeout(timer);
    }, [ currentImageIndex ]);


    return (
        <div className="slideshow">
            <img src={require(`../../images/${images[currentImageIndex]}.jpg`).default} alt={images[currentImageIndex]} />


        </div>
    );
}