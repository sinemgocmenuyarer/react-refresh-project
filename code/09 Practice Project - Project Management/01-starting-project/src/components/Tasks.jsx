import { useContext } from "react";
import { NewTask } from "./NewTask";
import { ProjectContext } from "../store/context";

export const Tasks = () => {
  const { projectsState, handleDeleteTask } = useContext(ProjectContext);
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />

      {projectsState.tasks.length === 0 && (
        <p className="text-stone-800 mt-4">
          This project does not have any tasks yet
        </p>
      )}

      {projectsState.tasks.length !== 0 && (
        <ul>
          {projectsState.tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button onClick={() => handleDeleteTask(task.id)}>Clear</button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
