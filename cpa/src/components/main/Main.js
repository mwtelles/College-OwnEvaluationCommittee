import "./Main.css";
import hello from "../../assets/student.png";
import professor from "../../assets/professor.png";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Olá Matheus Telles!</h1>
            <p>Seja muito bem vindo ao novo ambiente de avaliação do curso de Engenharia de Software</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-book fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Disciplinas</p>
              <span className="font-bold text-title">7</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-user-o fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Professores</p>
              <span className="font-bold text-title">7</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Realizadas</p>
              <span className="font-bold text-title">3</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-calendar fa-2x text-red"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Aguardando Realização</p>
              <span className="font-bold text-title">11</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__main">
            <div className="charts__main__title">
              <div>
                <h1>Suas Avaliações</h1>
                <p>Engenharia de Software, Campus de Vassouras, Rio de Janeiro - 6° Período</p>
              </div>
            </div>
            <div className="charts__evaluation">
              <a href="#">
                <div className="charts__evaluation__image">
                <img src={professor} alt="professor"/>
                </div>
                <div className="charts__evaluation__title">
                <h1>Laboratório de Programação de Interfaces Web</h1>
                <div className="charts__evaluation__subtitle">
                <p>Realizar avaliação até 18 de novembro de 2021</p>
                </div>
              </div>
              </a>
            </div>
            <div className="charts__evaluation">
              <a href="#">
                <div className="charts__evaluation__image">
                <img src={professor} alt="professor"/>
                </div>
                <div className="charts__evaluation__title">
                <h1>Laboratório de Programação de Interfaces Web</h1>
                <div className="charts__evaluation__subtitle">
                <p>Realizar avaliação até 18 de novembro de 2021</p>
                </div>
              </div>
              </a>
            </div>
            <div className="charts__evaluation">
              <a href="#">
                <div className="charts__evaluation__image">
                <img src={professor} alt="professor"/>
                </div>
                <div className="charts__evaluation__title">
                <h1>Laboratório de Programação de Interfaces Web</h1>
                <div className="charts__evaluation__subtitle">
                <p>Realizar avaliação até 18 de novembro de 2021</p>
                </div>
              </div>
              </a>
            </div>
            <div className="charts__evaluation">
              <a href="#">
                <div className="charts__evaluation__image">
                <img src={professor} alt="professor"/>
                </div>
                <div className="charts__evaluation__title">
                <h1>Laboratório de Programação de Interfaces Web</h1>
                <div className="charts__evaluation__subtitle">
                <p>Realizar avaliação até 18 de novembro de 2021</p>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
