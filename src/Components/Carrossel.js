import "../styles/Carrossel.modulo.css";

export default function Carrossel() {
  return (
    <div className="geral">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 1"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="Container ContainerCarrossel1">
              <p className="miniTexto">
                O Falcon 9 lança o Dragon para a Estação Espacial Internacional
                do Complexo de Lançamento 39A
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="Container ContainerCarrossel2">
              <p className="miniTexto">
                Primeiro e segundo estágio após a separação de voo
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="Container ContainerCarrossel3">
              <p className="miniTexto">
                Falcon 9 decola com sua carga útil Iridium-5
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="Container ContainerCarrossel4">
              <p className="miniTexto">
                Falcon 9 pousando no droneship para ler as instruções
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="Container ContainerCarrossel5">
              <p className="miniTexto">
                Clone dos motores Merlin do Falcon 9 durante a decolagem
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="Container ContainerCarrossel6">
              <p className="miniTexto">
                O falcon 9 deixa um rastro de luz ao decolar da Base Aérea de
                Vandenberg
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
