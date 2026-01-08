import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../WhatsappButton.css"; // make sure to create this CSS file

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/1234567890" // update later
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsappButton;
