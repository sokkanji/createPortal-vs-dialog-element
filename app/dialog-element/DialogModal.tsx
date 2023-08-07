import { RefObject, useRef } from "react";

type DialogModalPropsType = {
  dialogRef: RefObject<HTMLDialogElement>;
};

export default function DialogModal({ dialogRef }: DialogModalPropsType) {
  const handleCloseModal = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog ref={dialogRef}>
      <form method="dialog" className="border-[2px] p-[10px]">
        <h2>Modal Content</h2>
        <p>This is a modal example using the dialog element tag.</p>

        <button className="bg-green-300 mt-[10px] p-[5px]" onClick={handleCloseModal}>
          Close
        </button>
      </form>
    </dialog>
  );
}

export function useDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return { dialogRef, showModal, closeModal };
}