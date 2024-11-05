import { useEffect, useState } from "react";
import { supabase } from "../client";
import Crewmate from "./Crewmate";

const Gallery = () => {
  const [crewmates, setCrewmates] = useState();

  useEffect(() => {
    const getCrewMates = async () => {
      const { data, error } = await supabase.from("Crew").select();
    //   console.log(data);
      setCrewmates(data);
    };

    getCrewMates();
  }, []);

  return (
    <div>
      {crewmates?.map((mate) => (
        <Crewmate
          key={mate.id}
          id={mate.id}
          name={mate.name}
          speed={mate.speed}
          color={mate.color}
        />
      ))}
      {!crewmates || crewmates.length === 0 && <h1>Nothing to see here yet ... 👀</h1>}
    </div>
  );
};
export default Gallery;
