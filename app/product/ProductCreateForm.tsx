"use client";

import { useState } from "react";
import { create } from "./server";

export default function TestButton() {
  const [inputValue, setInputValue] = useState("");

  function createData() {
    create(inputValue);
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="test"
        className="border"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => createData()}>add product</button>
    </div>
  );
}
