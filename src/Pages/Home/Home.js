import Button from "../../Components/button";
import "../../styles/Home.modulo.css";

function Home() {
  return (
    <div>
      <div className="firstPlace">
        <div className="Text" data-aos="fade-up" data-aos-duration="1500">
          <h3 className="h3 FirstText">LANÇAMENTO A CAMINHO</h3>

          <h1 className="h1">MISSÃO EQUIPE-3</h1>
          <Button />
        </div>
      </div>
      <div className="secondPlace">
        <div
          className="TextOther Text"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h3 className="h3 secondText">MISSÃO CONCLUÍDA</h3>

          <h1 className="h1">MISSÃO EQUIPE-2 RETORNOU PARA A TERRA</h1>
          <Button />
        </div>
      </div>
      <div className="thirdPlace">
        <div
          className="TextOther Text"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h3 className="h3 ThirdText">MISSÃO CONCLUÍDA</h3>

          <h1 className="h1">DRAGON RETORNOU PARA A TERRA</h1>
          <Button />
        </div>
      </div>
      <div className="fourthPlace">
        <div
          className="TextOther Text"
          data-aos="fade-down-right"
          data-aos-duration="1500"
        >
          <h1 className="h1">STARSHIP POUSA ASTRONAUTAS DA NASA NA LUA</h1>
          <Button />
        </div>
      </div>
    </div>
  );
}
export default Home;
