import React, { useEffect, useState } from "react";
import assets from "../assets/assets"; // your logo
import "../Loader.css"; // import custom CSS

const Loader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const logo = assets.logo;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 3000); // duration of loader

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <img
        src={logo}
        alt="logo"
        className="h-20 w-auto logo-blink" // apply custom blink class
      />
    </div>
  );
};

export default Loader;
