import { NewTask } from "./NewTask";

export const Tasks = ({ onDelete, onAdd, tasks }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onDelete={onDelete} onAdd={onAdd} />

      {tasks.length === 0 && (
        <p className="text-stone-800 mt-4">
          This project does not have any tasks yet
        </p>
      )}

      {tasks.length !== 0 && (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button onClick={() => onDelete(task.id)}>Clear</button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
