import "../../styles/Humanspace.modulo.css";
import Servicos from "../../Components/Servicos";
import Usuario from "../../Components/Usuario";

export default function Footer() {
  return (
    <div className="SixthPlace">
      <div className="Sexthparagrafo">
        <p data-aos="fade-right" data-aos-duration="1500">
          Para mais informações sobre os serviçoes entre em contato com
          onebitcode@gmail.com
        </p>
      </div>
      <div className="ButtonsEndPage">
        <Usuario />
        <Servicos />
      </div>
    </div>
  );
}
