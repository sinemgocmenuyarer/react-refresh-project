import { useContext } from "react";
import { ProjectContext } from "../store/context";
import { Button } from "./Button";

export const ProjectsSidebar = () => {
  const { handleAddProject, projectsState, handleSelectProject } =
    useContext(ProjectContext);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={handleAddProject}>+ Add a new project</Button>
      </div>
      <ul className="mt-8 ">
        {projectsState.projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-950 bg-stone-200 font-bold";

          if (project.id === projectsState.selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-200";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => handleSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
