import React, { useState } from "react";
import Card from "../components/Card";
import Menu from "../components/Menu";
import projetosData from "../data/projetosGerais.json";

function Inicial() {


    const handleCardClick = (id) => {
        console.log("Projeto clicado:", id)
    }

    const [filtro, setFiltro] = useState("todos");

    function filtrarProjetos() {
        if (filtro === "todos") {
            return projetosData;
        }
        if (filtro === "destaque") {
            return projetosData.filter((proj) => proj.destaque === true)
        }
        return projetosData.filter((proj) => proj.tags.includes(filtro));
    }

    return (
        <div>
            <h1>Portfólio de Tecnologias Educacionais</h1>
            
            <Menu aoSelecionarFiltro={setFiltro} />

            <div className="cards-container">
                {filtrarProjetos().map((projeto) => (
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