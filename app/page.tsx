"use client";
import { useState } from "react";
import CardSection from "./components/CardSection";
import Modal from "./components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="button-92  animate-bounce"
        role="button"
      >
        Add Task
      </button>
      <CardSection />
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />

    
    </div>
  );
}
