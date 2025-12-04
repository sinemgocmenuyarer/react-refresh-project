import React from "react";

export const Input = ({ textarea, label, ...props }) => {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
};
