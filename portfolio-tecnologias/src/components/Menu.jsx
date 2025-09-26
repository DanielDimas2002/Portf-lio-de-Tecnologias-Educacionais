import React from "react";

function Menu ({aoSelecionarFiltro}){

    return(
        <nav className="menu">
            <ul>
                <li>
                    <button onClick={() => aoSelecionarFiltro("todos")}>Todos</button>
                </li>
                <li>
                    <button onClick={() => aoSelecionarFiltro("VR")}>
                        Realidade Virtual (RV)
                    </button>
                </li>
                <li>
                    <button onClick={() => aoSelecionarFiltro("Edificações")}>
                        Edificações
                    </button>
                </li>
                <li>
                    <button onClick={() => aoSelecionarFiltro("destaque")}>
                        Destaques
                    </button>
                </li>
            </ul>
        </nav>
    )

}

export default  Menu