import '../style/main.scss';
import Banner from '../components/banner';

const APropos = () => {
    return (
      <div>
        <Banner
          imgSource='./images/banner/banner2.jpg'
          about={true}
        />
      </div>
    )
  }
  
  export default APropos