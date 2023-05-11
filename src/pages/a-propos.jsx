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
          <Collaps title="Fiabilité" contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
          <Collaps title="Respect" collapsed="true" contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
          <Collaps title="Service" contenu="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
          <Collaps title="Sécurité" contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
      </div>
    );
  }
  
  export default APropos