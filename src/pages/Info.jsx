import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getInfoPokemons } from "../Api/Api";
import { GrLinkPrevious } from "react-icons/gr";
import "./Info.css";

const Info = () => {
  const params = useParams();
  const [infos, setInfos] = useState([]);

  const fetchInfoPokemons = async (params) => {
    getInfoPokemons(params).then((response) => {
      setInfos(response);
    });
  };

  useEffect(() => {
    fetchInfoPokemons(params.id);
  }, []);

  const infosList = [];
  infosList.push(infos);

  const renderInfos =
    infosList &&
    infosList.map((item, index) => {
      const infoTypes = item?.types;
      const rederInfoTypes =
        infoTypes &&
        infoTypes.map((type, index) => {
          return <div key={index}>{type.type.name}</div>;
        });

      const infoAbilities = item?.abilities;
      const rederAbilities =
        infoAbilities &&
        infoAbilities.map((ability, index) => {
          return <div key={index}>{ability.ability.name}</div>;
        });

      return (
        <div key={index} className="info-wrapper">
          <div className="info-header">
            <h1>{item.name}</h1>
            <h1>#{item.id}</h1>
          </div>
          <div className="info-container">
            <div className="stats">
              <h2 className="stats-title">Status</h2>
              <div className="stats-attribut">
                <h4>HP</h4>
                <div className="stats-number">
                  <div
                    className="value"
                    style={{ width: `${item?.stats?.[0].base_stat * 2}px` }}
                  ></div>
                </div>
              </div>
              <div className="stats-attribut">
                <h4>Ataque</h4>
                <div className="stats-number">
                  <div
                    className="value"
                    style={{ width: `${item?.stats?.[1].base_stat * 2}px` }}
                  ></div>
                </div>
              </div>
              <div className="stats-attribut">
                <h4>Defesa</h4>
                <div className="stats-number">
                  <div
                    className="value"
                    style={{ width: `${item?.stats?.[2].base_stat * 2}px` }}
                  ></div>
                </div>
              </div>
              <div className="stats-attribut">
                <h4>Ataque Especial</h4>
                <div className="stats-number">
                  <div
                    className="value"
                    style={{ width: `${item?.stats?.[3].base_stat * 2}px` }}
                  ></div>
                </div>
              </div>
              <div className="stats-attribut">
                <h4>Defesa Especial</h4>
                <div className="stats-number">
                  <div
                    className="value"
                    style={{ width: `${item?.stats?.[4].base_stat * 2}px` }}
                  ></div>
                </div>
              </div>
              <div className="stats-attribut">
                <h4>Velocidade</h4>
                <div className="stats-number">
                  <div
                    className="value"
                    style={{ width: `${item?.stats?.[5].base_stat * 2}px` }}
                  ></div>
                </div>
              </div>
              <Link to="/">
                <GrLinkPrevious className="stats-icon"></GrLinkPrevious>
              </Link>
            </div>
            <div className="info-image">
              <img
                src={item?.sprites?.other["official-artwork"].front_default}
                alt={item?.name}
              />
              <div className="details">
                <div className="details-item">Tipos: {rederInfoTypes}</div>
                <div className="details-item">Abilidades: {rederAbilities}</div>
                <div className="details-item">
                  Peso: <div>{item?.weight}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  return <>{renderInfos}</>;
};

export default Info;
