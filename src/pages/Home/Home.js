import './Home.css';

import Slideshow from '../../components/SlideShow/Slideshow';

const Home = () => (
    <div className="container-full">
        <Slideshow images={["wine","wines","grapes"]} />

    </div>
);

export default Home;