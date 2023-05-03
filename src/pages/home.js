import { useEffect, useState } from 'react';
import '../style/main.scss';
import Banner from '../components/banner';
import Gallery from '../components/gallery';


const Home = () => {
  const [title, setTitle] = useState('')
  const [imgSource, setimgSource] = useState('')
  const [backgroundImage, setbackgroundImage] = useState('')

  useEffect(() => {
    setimgSource('./images/banner/banner1.jpg')
    setTitle('Chez vous, partout et ailleurs')
    setbackgroundImage('./images/banner/Background.jpg')
  },[])


    return (
      <div>
        <Banner
          imgSource={imgSource}
          title={title}
          background={backgroundImage}
        />
        <Gallery />
      </div>
    );
  }
  
  export default Home