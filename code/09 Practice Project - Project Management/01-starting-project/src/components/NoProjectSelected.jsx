import React from "react";
import { Button } from "./Button";
import noProjectImage from "../assets/no-projects.png";
import { useContext } from "react";
import { ProjectContext } from "../store/context";

export const NoProjectSelected = () => {
  const { handleAddProject } = useContext(ProjectContext);
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2>No Projected selected</h2>
      <p>Select a project or get starte with a new one</p>
      <div className="text-stone-400 mb-4">
        <p className="mt-8">
          <Button onClick={handleAddProject}>+ Create a new project</Button>
        </p>
      </div>
    </div>
  );
};
