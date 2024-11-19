"use client";

import React, { useEffect, useRef, useState } from "react";
import { useErrorStore } from "@/stores/useErrorStore";

interface ModalProps {
  codeError?: number;
  messageError: string;
}

const Modal: React.FC<ModalProps> = ({ codeError, messageError }) => {
  const resetError = useErrorStore((state) => state.reset);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalBarRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const [timestamp, setTimestamp] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  
  const closeModal = React.useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      resetError();
    }, 200);
  }, [resetError]);
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  const handleTouchStart = (event: React.TouchEvent) => {
    if (
      modalBarRef.current &&
      modalBarRef.current.contains(event.target as Node)
    ) {
      setIsDragging(true);
      setStartY(event.touches[0].clientY);
      setPrevY(event.touches[0].clientY);
      setTimestamp(Date.now());
    } else {
      setIsDragging(false);
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!isDragging) return;
    const newY = event.touches[0].clientY;
    const newTimestamp = Date.now();
    const dt = newTimestamp - timestamp;
    const dy = newY - prevY;
    const newVelocity = dy / dt;

    setPrevY(newY);
    setTimestamp(newTimestamp);
    setVelocity(newVelocity);

    const newOffsetY = Math.max(newY - startY, 0);
    setOffsetY(newOffsetY);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if ((Math.abs(velocity) > 2 && offsetY > 1) || offsetY >= 150) {
      closeModal();
    } else {
      setOffsetY(0);
    }
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.style.transition = isDragging
        ? "none"
        : "transform 0.3s ease, height 0.3s ease";
      modalRef.current.style.transform = `translateY(${offsetY}px)`;
    }
  }, [offsetY, isDragging]);

  return (
    <div className="fixed top-0 w-screen overflow-hidden h-full z-30 left-0 inline-grid items-center">
      <div className="absolute w-full h-full bg-black bg-opacity-30 lg:text-center backdrop-blur-lg duration-200" />
      <div
        ref={modalRef}
        className={`w-full modal-content-show pt-8 lg:pt-4 p-4 px-[5%] pb-8 lg:pb-4 rounded-t-2xl absolute bottom-0 left-0 bg-[#5E4ACF] transition-all duration-300 text-center ${
          isClosing ? "h-0" : codeError === undefined ? "h-[25vh]" : "h-[40vh]"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={modalBarRef}
          className="w-full h-full absolute left-0 top-0 lg:hidden text-center"
        >
          <div className="w-12 h-1 bg-[#3B1578] inline-block rounded-full duration-100" />
        </div>
        <h1 className={codeError === undefined ? "opacity-0" : "opacity-100"}>Error {codeError}</h1>
        <p>{messageError}</p>
        <hr className="absolute w-3/4 h-[2px] bottom-5 left-1/2 -translate-x-1/2 bg-white opacity-20" />
      </div>
    </div>
  );
};

export default Modal;
