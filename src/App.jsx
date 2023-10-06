import './App.css'
import husky from "./assets/img/husky.jpg"
import bobtail from "./assets/img/bobtail.jpg"
import sharpei from "./assets/img/sharpei.jpg"
import beagle from "./assets/img/beagle.jpg"
import DogsCard from './components/Card'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <Header title="Adopta un Perrito"/>
    <div className="container">
      <DogsCard src={husky} name="Bartolo" description="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!" colorTags="success" textTags="Husky"/>
      <DogsCard src={bobtail} name="Messi" description="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!" colorTags="primary" textTags="Bobtail"/>
      <DogsCard src={sharpei} name="Gohan" description="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!" colorTags="danger" textTags="Shar Pei"/>
      <DogsCard src={beagle} name="Princesa" description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final felíz!" colorTags="warning" textTags="Beagle" />    
    </div>
    <Footer/>
    </>
  )
} 

export default App