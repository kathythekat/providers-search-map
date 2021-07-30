import React, { useRef, useState, useEffect } from "react";
import SearchForm from "./SearchForm";

export default function SearchModal({ getLocation }) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  const triggerRef = useRef();

  const hideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    function handler(event) {
      // //if click is on trigger element, toggle modal
      if (triggerRef.current && triggerRef.current.contains(event.target)) {
        return setShowModal(true);
      }
      //if modal is open and click is outside modal, close it
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        return setShowModal(false);
      }
    }

    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <button
        className="absolute top-5 right-5 z-500 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
        ref={triggerRef}
      >
        Search for providers
      </button>
      {showModal ? (
        <>
          <div className="modal-mask justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-500 outline-none focus:outline-none bg-gray-900 bg-opacity-20">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* FORM GOES HERE */}
              <div className="modal-form border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Search by specialty
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div ref={modalRef} className="relative p-6 flex-auto">
                  <SearchForm getLocation={getLocation} hideModal={hideModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
