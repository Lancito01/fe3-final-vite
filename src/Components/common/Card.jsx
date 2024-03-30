/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ dentist, inFavsList = false, removeFunc }) => {

    const addFav = () => {
        let favs = JSON.parse(localStorage.getItem("favs")) || [];

        if (favs.some((favDentist) => favDentist.id === dentist.id)) return;

        favs.push(dentist);
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
                </Link >

                {!inFavsList && <button onClick={addFav} className="favButton">Add fav</button>}
                {inFavsList && <button onClick={removeFunc} className="favButton">Remove from favs</button>}
            </div>

        </>
    );
};

export default Card;
