import { useState } from "react";
import { supabase } from "../client";

const Create = () => {
  const [formData, setFormData] = useState({ name: "", speed: "", color: "" });

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
      .insert({
        name: formData.name,
        color: formData.color,
        speed: formData.speed,
      })
      .select();
    // console.log(res);
    window.location = "/";
  };

  return (
    <>
      <h1>Create Your Crewmate!</h1>
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
          />
          <label htmlFor="violet">Violet</label>
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
};
export default Create;
