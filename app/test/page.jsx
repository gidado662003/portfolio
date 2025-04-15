"use client";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
    { id: 4, name: "Four" },
    { id: 5, name: "Five" },
    { id: 6, name: "Six" },
  ]);

  const moveToMiddle = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const itemToMove = items[index];
    const newItems = [...items];
    newItems.splice(index, 1); // remove the clicked item

    const middleIndex = Math.floor(newItems.length / 2);
    newItems.splice(middleIndex, 0, itemToMove); // insert at the middle

    setItems(newItems);
  };

  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => moveToMiddle(item.id)}
          className="p-2 bg-blue-500 text-white rounded"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
