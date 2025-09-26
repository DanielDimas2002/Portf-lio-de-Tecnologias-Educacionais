import React from "react";
import "./Card.css";

function Card({ projeto, onClick }) {
  const { apresentacao } = projeto;

  return (
    <div className="card" onClick={() => onClick(projeto.id)}>
      <div className="card-media">
        {apresentacao.tipo === "video" && (
          <video src={apresentacao.arquivo} controls className="card-video" />
        )}
        {apresentacao.tipo === "imagem" && (
          <img src={apresentacao.arquivo} alt={projeto.titulo} className="card-image" />
        )}
        {apresentacao.tipo === "youtube" && (
          <iframe
            src={apresentacao.url}
            title={projeto.titulo}
            className="card-video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{projeto.titulo}</h3>
        <p className="card-description">{projeto.descricao}</p>
        <div className="card-tags">
          {projeto.tags.map((tag, index) => (
            <span className="card-tag" key={index}>
              {`${tag} `} 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
