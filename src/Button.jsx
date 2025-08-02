import { useState } from "react";
import { motion } from "framer-motion";

function Button() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const cursorX = e.clientX;
    const cursorY = e.clientY;

    // Calculate center of button
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate vector from cursor to center of button
    const diffX = centerX - cursorX;
    const diffY = centerY - cursorY;

    // Normalize vector length (max distance 1)
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);
    if (distance === 0) return;

    const maxMove = 100; // max pixels to move

    // Move the button away proportionally, capped at maxMove
    const moveX = (diffX / distance) * maxMove;
    const moveY = (diffY / distance) * maxMove;

    setPos({ x: moveX, y: moveY });
  }

  function handleMouseLeave() {
    // Reset position when cursor leaves button
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg mt-10 mx-auto block cursor-pointer"
    >
      Catch me if you can!
    </motion.button>
  );
}
export default Button