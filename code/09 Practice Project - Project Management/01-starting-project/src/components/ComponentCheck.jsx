import React from "react";
import { useContext } from "react";
import { ProjectContext } from "../store/context";
import { NewProject } from "./NewProject";
import { NoProjectSelected } from "./NoProjectSelected";
import { SelectedProject } from "./SelectedProject";

export const ComponentCheck = () => {
  const { projectsState } = useContext(ProjectContext);

  let content;

  if (projectsState?.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState?.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else {
    content = <SelectedProject />;
  }

  return <div>{content}</div>;
};
