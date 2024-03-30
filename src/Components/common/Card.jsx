/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

//! LIGHT & DARK THEME!!
const Card = ({ dentist, inFavsList = false }) => {

    const addFav = () => {
        let favs = JSON.parse(localStorage.getItem("favs")) || [];

        if (favs.some( // Check if the dentist already exists in favorites (localStorage)
            (favDentist) => favDentist.id === dentist.id
        )) return;

        favs.push(dentist);
        localStorage.setItem("favs", JSON.stringify(favs));
    }

    const removeFromFav = () => {
        let favs = JSON.parse(localStorage.getItem("favs")) || [];

        favs = favs.filter((favDentist) => favDentist.id !== dentist.id);
        localStorage.setItem("favs", JSON.stringify(favs));
    }

    return (
        <>
            <div className="dentist-card">
                <Link to={`/dentist/${dentist.id}`}>

                    <img src="../../../public/images/doctor.jpg" className="imgDoc" />
                    <h2>{dentist.name}</h2>
                    <p>{dentist.username}</p>
                    <p>{dentist.id}</p>

                    {/*! Ademas deberan integrar la logica para guardar cada Card en el localStorage*/}

                </Link >
                {!inFavsList && <button onClick={addFav} className="favButton">Add fav</button>}
                {inFavsList && <button onClick={removeFromFav} className="favButton">Remove from favs</button>}
            </div>

        </>
    );
};

export default Card;
