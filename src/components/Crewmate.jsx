import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";

const Crewmate = ({ id, name, speed, color }) => {
  return (
    <>
      <Link to={`/crewmate/${id}`} className="crewmate-card">
        <div className="card">
          <h1>Name: {name}</h1>
          <h3>Speed: {speed}mph</h3>
          <h3>Color: {color}</h3>
        </div>
      </Link>
      <Link to={`/edit-crewmate/${id}`} className="link">
        <p className="edit-link">Edit</p>
      </Link>
    </>
  );
};

export default Crewmate;
