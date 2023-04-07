import Carrossel from "../../Components/Carrossel";
import "../../styles/Falcon9.modulo.css";
import Footer from "../Footer/Footer";

function Falcon9() {
  return (
    <div className="AllFalcon9">
      <div className="FirstPlaceFalcon">
        <div data-aos="fade-up" data-aos-duration="1500">
          <div className="titleFalcon9">
            <h1 className="Title">Falcon 9</h1>
            <p className="paragrafo1">
              PRIMEIRA CLASSE DE FOGUETES DE ORBITA CAPAZ DE VOLTAR
            </p>
          </div>
        </div>
      </div>
      <div className="Numbers">
        <div className="minSectionNumbers" data-aos="flip-up">
          <h1 className="Title">126</h1>
          <div>
            <p className="paragrafo1">LANÇAMENTOS TOTAIS</p>
          </div>
        </div>
        <div className="minSectionNumbers" data-aos="flip-left">
          <h1 className="Title">86</h1>
          <p className="paragrafo1">DESEMBARQUES TOTAIS</p>
        </div>
        <div className="minSectionNumbers" data-aos="flip-right">
          <h1 className="Title">68</h1>
          <p className="paragrafo1">FIGUETES RECUPERADOS</p>
        </div>
      </div>
      <div className="SecondPlaceFalcon textDetalhes">
        <p
          className="paragrafo2"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          O Falcon 9 é um foguete reutilizável de dois estágios projetado e
          fabricado pela SpaceX para o transporte confiável e seguro de pessoas
          e cargas úteis para a órbita da Terra e além. Falcon 9 é o primeiro
          foguete reutilizável de classe orbital do mundo. A capacidade de
          reutilização permite que a SpaceX refile as partes mais caras do
          foguete, o que, por sua vez, reduz o custo do acesso ao espaço.
        </p>
      </div>
      <div
        id="carouselExampleInterval"
        className="carousel slide BigCarrossel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carrossel01 textDetalhes">
              <div className="SectionDetalhes  ">
                <p>FALCON 9</p>
                <h3>VISÃO GERAL</h3>

                <div
                  className="conteudoText"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <p>ALTURA</p>
                  <p className="NumerosConteudo1">70 m/ 229.6 f</p>
                </div>
                <hr />
                <div
                  className="conteudoText"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <p>DIAMENTRO</p>
                  <p className="NumerosConteudo2">3.7 m / 12 ft</p>
                </div>
                <hr />
                <div
                  className="conteudoText"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <p>MASSA</p>
                  <p className="NumerosConteudo3">549,054 kg / 1,207,920 lb</p>
                </div>
                <hr />
                <div
                  className="conteudoText"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <p>CARGA MÁXIMA PARA LEO</p>
                  <p className="NumerosConteudo4">22,800 kg / 50,265 lb</p>
                </div>
                <hr />
                <div
                  className="conteudoText"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <p>CARGA MÁXIMA PARA GTO</p>
                  <p className="NumerosConteudo5">8,300 kg / 18,300 lb</p>
                </div>
                <hr />
                <div
                  className="conteudoText"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <p>CARGA MÁXIMA PARA MARTE</p>
                  <p className="NumerosConteudo6">4,020 kg / 8,860 lb</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carrossel02 textDetalhes">
              <div className="SectionDetalhes ">
                <p>FALCON 9</p>
                <h3>PRIMEIRO ESTÁGIO</h3>
                <p>
                  Falcon 9’s O primeiro estágio do Falcon 9 incorpora nove
                  motores Merlin e tanques de liga de alumínio-lítio contendo
                  oxigênio líquido e propelente de querosene de grau de foguete
                  (RP-1).
                </p>
                <p>
                  O Falcon 9 gera mais de 1,7 milhão de libras de empuxo ao
                  nível do mar.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carrossel03 textDetalhes">
              <div className="SectionDetalhes 1">
                <p>FALCON 9</p>
                <h3>SEGUNDO ESTÁGIO</h3>
                <p>
                  O segundo estágio, alimentado por um único motor a vácuo
                  Merlin, entrega a carga útil do Falcon 9 à órbita desejada. O
                  motor do segundo estágio acende alguns segundos após a
                  separação do estágio e pode ser reiniciado várias vezes para
                  colocar várias cargas em diferentes órbitas.
                </p>
                <div className="conteudoText">
                  <p>NÚMERO DE MOTORES</p>
                  <p>1 VACCUM</p>
                </div>
                <hr />
                <div className="conteudoText">
                  <p>TEMPO DE QUEIMA</p>
                  <p>397seg</p>
                </div>
                <hr />
                <div className="conteudoText">
                  <p>IMPULSO</p>
                  <p>981 kN / 220.500 lbf</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carrossel04 textDetalhes">
              <div className="SectionDetalhes ">
                <p>FALCON 9</p>
                <h3>INTERESTADUAL</h3>
                <p>
                  A interestadual é uma estrutura composta que conecta o
                  primeiro e o segundo estágios e abriga os empurradores
                  pneumáticos que permitem que o primeiro e o segundo estágios
                  se separem durante o vôo.
                </p>

                <p>ALETAS DE GRADE</p>

                <p>
                  O Falcon 9 está equipado com quatro aletas de grade
                  hipersônicas posicionadas na base da interestadual. Eles
                  orientam o foguete durante a reentrada, movendo o centro de
                  pressão.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carrossel05 textDetalhes">
              <div className="SectionDetalhes ">
                <p>FALCON 9</p>
                <h3>CARGA ÚTIL</h3>
                <p>
                  A interestadual é uma estrutura composta que conecta o
                  primeiro e o segundo estágios e abriga os empurradores
                  pneumáticos que permitem que o primeiro e o segundo estágios
                  se separem durante o vôo.
                </p>

                <p>ALETAS DE GRADE</p>

                <p>
                  O Falcon 9 está equipado com quatro aletas de grade
                  hipersônicas posicionadas na base da interestadual. Eles
                  orientam o foguete durante a reentrada, movendo o centro de
                  pressão.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">Next </span>
        </button>
      </div>
      <div className="Merlim ">
        <div
          className="SectionDetalhes "
          id="MerlimSection"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p>FALCON 9</p>
          <h3>MERLIN</h3>
          <p>
            Merlin é uma família de motores de foguete desenvolvidos pela SpaceX
            para uso em seus veículos de lançamento Falcon 1, Falcon 9 e Falcon
            Heavy. Os motores Merlin usam querosene de grau de foguete (RP-1) e
            oxigênio líquido como propelentes de foguete em um ciclo de energia
            de gerador a gás. O motor Merlin foi originalmente projetado para
            recuperação e reutilização.
          </p>

          <div className="conteudoText">
            <p>PROPULSOR</p>
            <p>LOX / RP-1</p>
          </div>
          <hr />
          <div className="conteudoText">
            <p>IMPULSO </p>
            <p>845 kN / 190.000 lbf</p>
          </div>
          <hr />
        </div>
      </div>
      <Carrossel />
      <Footer />
    </div>
  );
}
export default Falcon9;
