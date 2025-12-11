import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";

//
export const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();

  // this hook is used with react.forwardRef to expose some methods to the parent component
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  // Portal makes you capable to render some children into a diff part of the DOM.
  // To create a portal we should pass some JSX and dom node where it should be rendered
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-sm shadow-md"
    >
      {children}
      {/* Inside a form: a <button> without type defaults to type="submit" which may trigger a form submit handler that closes the modal or reloads the page. */}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
