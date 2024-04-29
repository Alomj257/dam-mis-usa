import React, { useState } from "react";
import Popup from "react-popup";

function PopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>
      <Popup open={isOpen} closeOnDocumentClick onClose={closePopup}>
        <div>
          <h2>Popup Content</h2>
          <p>This is the content of the popup.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      </Popup>
    </div>
  );
}

export default PopUp;
