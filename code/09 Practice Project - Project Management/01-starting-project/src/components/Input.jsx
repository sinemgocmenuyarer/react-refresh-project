import React from "react";

const classes =
  "w-full p-1 boder-b-2 rounded-sm boder-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

export const Input = ({ textarea, label, ...props }, ref) => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
};
