import React from "react";

const Admin = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="hidden"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="inline-flex items-center rounded-full w-28 h-12 bg-gray-700 cursor-pointer transition-colors duration-200"
        htmlFor={`react-switch-new`}
      >
        <span
          className={`inline-block w-12 h-12 rounded-full transition-transform duration-200 transform ${
            isOn ? "translate-x-16 bg-black" : "bg-red-400"
          }`}
        />
      </label>
    </>
  );
};
export default Admin;
