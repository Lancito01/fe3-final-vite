import { useEffect, useState } from "react";
import Card from "../Components/common/Card";

const Home = () => {
  const [dentistsArr, setDentists] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dentistsData) => {
        setDentists(dentistsData)
      });
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentistsArr.map((dentist) => {
          return <Card dentist={dentist} key={dentist.id} />;
        })}
      </div>
    </main>
  );
};

export default Home;
