/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ children, onClick, style }) {
  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
}
