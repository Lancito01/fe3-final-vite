import { useState, useEffect } from "react";
import Card from "../Components/common/Card";

const Favs = () => {
  const [favs, setFavs] = useState([])

  useEffect(() => {
    updateFavsList();
  }, [])

  function updateFavsList() {
    let favsStorage = JSON.parse(localStorage.getItem('favs'));
    setFavs(favsStorage);
  }

  function clearFavs() {
    localStorage.setItem('favs', JSON.stringify([]));
    updateFavsList();
  }

  return (
    <>
      <h1>Dentistas marcados como favoritos</h1>
      <button className="clearFavsButton" onClick={clearFavs}>Limiar lista de Favs</button>
      <div className="card-grid">
        {favs && favs.map((dentista) => {
          function removeFav() {
            setFavs(favs.filter((favDentist) => favDentist.id !== dentista.id))
            updateFavsList()
          }
          return (
            <Card dentist={dentista} inFavsList={true} key={dentista.id} removeFunc={removeFav} />
          )
        })}
      </div>
    </>
  );
};

export default Favs;
