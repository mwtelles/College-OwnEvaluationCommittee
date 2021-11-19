import React from 'react';
import "../main/Main.css";
import professor from "../../assets/professor.png";

const Chart = ({title, items}) => {
    return (
        <div className="charts__evaluation">
            {items.length > 0 && items.map((item, key) => (
                <a href="#">
                <div className="charts__evaluation__image">
                <img src={professor} alt="professor"/>
                </div>
                <div className="charts__evaluation__title">
                <h1>{item.nome}</h1>
                <div className="charts__evaluation__subtitle">
                <p>Realizar avaliação até {item.dataLimite}</p>
                </div>
              </div>
              </a>
            ))}
        </div>
    )
}

export default Chart;