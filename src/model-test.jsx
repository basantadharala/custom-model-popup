import { useState } from "react";
import Modal from "./model";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button onClick={handleToggleModalPopup}>Open Model Popup</button>
      {showModalPopup && (
        <Modal onClose={onClose} body={<div>Customized body</div>} />
      )}
    </div>
  );
}
