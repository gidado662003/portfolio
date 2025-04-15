"use client";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
    { id: 4, name: "Four" },
    { id: 5, name: "Five" },
    { id: 6, name: "Six" },
  ]);
  const [screen, setScreen] = useState(null);
  const moveToMiddle = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const itemToMove = items[index];
    const newItems = [...items];
    newItems.splice(index, 1); // remove the clicked item

    const middleIndex = Math.floor(newItems.length / 2);
    newItems.splice(middleIndex, 0, itemToMove); // insert at the middle

    setItems(newItems);
  };
  const [mouseMove, setMouse] = useState(null);
  const [activeScreen, setActiveScreen] = useState(null);
  const inactiveTimer = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setActiveScreen(true);
      clearTimeout(inactiveTimer.current);
      inactiveTimer.current = setTimeout(() => {
        setActiveScreen(false);
      }, 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(inactiveTimer.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  console.log(activeScreen ? "active" : "inactive");

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
