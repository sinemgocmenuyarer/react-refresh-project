import React, { useRef } from "react";
import { Input } from "./Input";
import { Modal } from "./Modal";

export const NewProject = ({ onSaveProject, onCancelProject }) => {
  const modal = useRef();
  const title = useRef();
  const desscription = useRef();
  const dueDate = useRef();

  function handleSaveProject() {
    const enteredTitle = title.current.value;
    const enteredDescription = desscription.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation
    // if title is empty, do not proceed
    // if description is empty, do not proceed
    // if due date is empty, do not proceed

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <p>Please make sure you provide a valid input</p>{" "}
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-80" onClick={onCancelProject}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950"
              onClick={handleSaveProject}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          {/* onChange can be option BUT i want to READ the values only when user
        clicks save. Instead of onChange, we can use useRef to get the values. */}
          <Input ref={title} label="Title" />
          <Input ref={desscription} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" placeholder="dd.mm.yyyy" />
        </div>
      </div>
    </>
  );
};
