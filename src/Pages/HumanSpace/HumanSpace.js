import ButtonExplore from "../../Components/Explore";

import "../../styles/Humanspace.modulo.css";
import Footer from "../Footer/Footer";

function HumanSpace() {
  return (
    <div className="HumanDiv">
      <div className="FirstPlace">
        <div data-aos="fade-down" className="FirstOne" data-aos-duration="3000">
          <h1 className="BigestTitle">HUMAN SPACEFLIGHT</h1>
          <p className="MinText">FAZENDO A VIDA MULTIPLANETÁRIA</p>
        </div>
      </div>
      <div className="Spacex">
        <p className="Conteudo" data-aos="flip-right" data-aos-duration="1500">
          SpaceX também oferece voos cormeciais para orbita terrestre e lunar.
          Para começar a planejar a sua jornada, por favor contate-nos por
          onebitcode@gmail.com
        </p>
      </div>
      <div className="SecondPlace">
        <div
          className="ConteudoDireita"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p>MISSÃO</p>
          <h1 className="SecondTitle">ORBITA DA TERRA</h1>
          <p>EXPERIMENTE O PLANETA AZUL A 300KM DE ALTURA</p>
          <ButtonExplore />
        </div>
      </div>
      <div className="TerceiroPlace">
        <div
          className="ConteudoEsquerda satelite"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p>MISSÃO</p>
          <h1 className="SecondTitle">ESTAÇÃO ESPACIAL</h1>
          <p>TRANSPORTANTO HUMANOS PARA O LABORATÓRIO VOADOR NO CÉU</p>
          <ButtonExplore />
        </div>
      </div>
      <div className="FourthPlace">
        <div
          className="ConteudoDireita"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <p>MISSÃO</p>
          <h1 className="SecondTitle">LUA</h1>
          <p>RETORNANDO HUMANOS PARA A NOSSA LUA VIZINHA</p>
          <ButtonExplore />
        </div>
      </div>
      <div className="FifthPlace">
        <div
          className="ConteudoEsquerda"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <p>MISSÃO</p>
          <h1 className="SecondTitle">MARTE E ALÉM</h1>
          <p>O CAMINHO PARA TORNAR A HUMANIDADE MULTIPLANETÁRIA</p>
          <ButtonExplore />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default HumanSpace;
