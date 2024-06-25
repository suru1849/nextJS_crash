"use client";

import React from "react";

function Button() {
  return (
    <button
      onClick={() => console.log("clicked")}
      className="bg-green-500 py-1 px-2"
    >
      Click here
    </button>
  );
}

export default Button;
