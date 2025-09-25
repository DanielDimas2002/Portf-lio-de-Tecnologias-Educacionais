import React, { useState } from "react";
import Card from "../components/Card";
import projetosData from "../data/projetosData.json";

function Inicial() {


    const handleCardClick = (id) => {
        console.log("Projeto clicado:", id)
    }

    return (
        <div>
            <h1>Portfólio de Tecnologias Educacionais</h1>
            <div className="cards-container">
                {projetosData.map((projeto) => (
                    <Card
                        key={projeto.id}
                        projeto={projeto}
                        onClick={handleCardClick} />
                ))}
            </div>
        </div>
    );
}

export default Inicial;