import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const CrewmateDetails = () => {
  const { id } = useParams();
  const [mate, setMate] = useState();
  useEffect(() => {
    const getCrewmateInfo = async () => {
      const { data, error } = await supabase.from("Crew").select().eq("id", id);
      const crewmate = data[0];
      //   console.log(mate);
      setMate({
        name: crewmate.name,
        speed: crewmate.speed,
        color: crewmate.color,
      });
    };

    getCrewmateInfo();
  }, []);
  return (
    <div className="details">
      {mate && (
        <>
          <h1>{mate.name}</h1>
          <h4>
            Hi my name is {mate.name} and I can run at {mate.speed} mph. My
            favorite color is {mate.color}. Nice to meet you😊!
          </h4>
        </>
      )}
      {!mate && <h1>Nothing to see here yet...</h1>}
    </div>
  );
};

export default CrewmateDetails;
