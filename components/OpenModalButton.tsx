"use client";

import { useContactModal } from "./ContactModalContext";

type OpenModalButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function OpenModalButton({ children, className = "" }: OpenModalButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button type="button" onClick={openModal} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
