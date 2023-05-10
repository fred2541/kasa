import '../style/main.scss';
import Banner from 'src/components/banner';
import Collaps from 'src/components/collaps';

const APropos = () => {
    return (
      <div>
        <div>
          <Banner imgSource="./images/banner/banner2.jpg" about={true} />
        </div>
        <div className='about'>
          <Collaps title="Fiabilité"/>
          <Collaps title="Respect" collapsed="true" contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
          <Collaps title="Service"/>
          <Collaps title="Sécurité"/>
        </div>
      </div>
    );
  }
  
  export default APropos