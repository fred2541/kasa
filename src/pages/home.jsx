import '../style/main.scss';
import Banner from '../components/banner';
import Gallery from '../components/Cards/gallery';


const Home = () => {

    return (
      <div>
        <Banner
          title='Chez vous, partout et ailleurs'
          imgSource='./images/banner/banner1.jpg'
        />
        <Gallery />
      </div>
    );
  }
  
  export default Home