import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";

const EditCrewmate = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", speed: "", color: "" });

  useEffect(() => {
    const getCrewmateInfo = async () => {
      const { data, error } = await supabase.from("Crew").select().eq("id", id);
      const mate = data[0];
      //   console.log(mate);
      setFormData({ name: mate.name, speed: mate.speed, color: mate.color });
    };

    getCrewmateInfo();
  }, []);
  const handleNameChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSpeedChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleColorChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData);

    const res = await supabase
      .from("Crew")
      .update({
        name: formData.name,
        color: formData.color,
        speed: formData.speed,
      })
      .eq("id", id);
    //   .select();
    // console.log(res);
    window.location = "/";
  };

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("Crew")
      .delete()
      .eq("id", Number(id))
      .select();
    // console.log(data);
    window.location = "/";
  };
  return (
    <>
    <h1>Edit Your Crewmate!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={formData.name}
        />
        <label htmlFor="name">Speed: </label>
        <input
          type="text"
          name="speed"
          onChange={handleSpeedChange}
          value={formData.speed}
        />
        Select Color:
        <div>
          <input
            type="radio"
            name="color"
            id="red"
            value="red"
            onChange={handleColorChange}
            checked={formData.color === "red"}
          />
          <label htmlFor="red">Red</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="orange"
            value="orange"
            onChange={handleColorChange}
            checked={formData.color === "orange"}
          />
          <label htmlFor="orange">Orange</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="yellow"
            value="yellow"
            onChange={handleColorChange}
            checked={formData.color === "yellow"}
          />
          <label htmlFor="yellow">Yellow</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="green"
            value="green"
            onChange={handleColorChange}
            checked={formData.color === "green"}
          />
          <label htmlFor="green">Green</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="blue"
            value="blue"
            onChange={handleColorChange}
            checked={formData.color === "blue"}
          />
          <label htmlFor="blue">Blue</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="indigo"
            value="indigo"
            onChange={handleColorChange}
            checked={formData.color === "indigo"}
          />
          <label htmlFor="indigo">Indigo</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="violet"
            value="violet"
            onChange={handleColorChange}
            checked={formData.color === "violet"}
          />
          <label htmlFor="violet">Violet</label>
        </div>
        <button type="submit">Edit</button>
      </form>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </>
  );
};
export default EditCrewmate;
