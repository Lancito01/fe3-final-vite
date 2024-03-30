import { useState, useEffect } from "react";
import Card from "../Components/common/Card";

//! LIGHT & DARK THEME!!
const Favs = () => {
  const [favs, setFavs] = useState([])

  useEffect(() => {
    updateFavsList();
  }, [favs])

  function updateFavsList() {
    let favsStorage = JSON.parse(localStorage.getItem('favs'));
    setFavs(favsStorage);
  }

  const clearFavs = () => {
    localStorage.setItem('favs', JSON.stringify([]));
    updateFavsList();
  }

  return (
    <>
      <h1>Dentistas marcados como favoritos</h1>
      <button className="clearFavsButton" onClick={clearFavs}>Limiar lista de Favs</button>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favs.map((dentista) => {
          return (
            <Card dentist={dentista} inFavsList={true} key={dentista.id} />
          )
        })}

      </div>
    </>
  );
};

export default Favs;
