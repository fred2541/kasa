import '../style/main.scss';
import Banner from 'src/components/banner';
import Collaps from 'src/components/collaps';

const APropos = () => {
    return (
      <div>
        <div>
          <Banner imgSource="./images/banner/banner2.jpg" about={true} />
        </div>
        <div>
          <Collaps />
        </div>
      </div>
    );
  }
  
  export default APropos