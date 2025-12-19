import { useContext } from "react";
import { Tasks } from "./Tasks";
import { ProjectContext } from "../store/context";

export const SelectedProject = () => {
  const {
    projectsState,
    handleDeleteProject,
    handleDeleteTask,
    handleAddTask,
  } = useContext(ProjectContext);

  console.log("rendering SelectedProject component", projectsState);

  let project = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const formattedDate = new Date(project.dueDate).toLocaleDateString({
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between items-center ">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={handleDeleteProject}
            className="text-stone-600 hover:text-stone-950"
          >
            DELETE
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        tasks={projectsState.tasks}
        onDelete={handleDeleteTask}
        onAdd={handleAddTask}
      />
    </div>
  );
};
