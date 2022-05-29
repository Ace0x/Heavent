import React from "react";

export default function TextInput({ title, setState, type }) {
  return (
    <div className="m-2">
      <label
        className="block text-white font-bold text-sm mb-2"
        htmlFor={title}
      >
        {title}
      </label>
      <input
        type={type}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={title}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}
