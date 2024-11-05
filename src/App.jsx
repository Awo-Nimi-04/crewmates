import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Create from "./components/Create";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import EditCrewmate from "./components/EditCrewmate";
import CrewmateDetails from "./components/CrewmateDetails";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <SideBar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        { path: "/crewmate/:id", element: <CrewmateDetails /> },
        {
          path: "/edit-crewmate/:id",
          element: <EditCrewmate />,
        },
      ],
    },
  ]);

  return <div>{routes}</div>;
}

export default App;
