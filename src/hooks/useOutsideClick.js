import { useEffect } from "react";

// if(!modalRef.current?.contains(event.target)) {
//   console.log('clicked outside of modal')
// }
const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (!ref.current?.contains(e.target)) {
      console.log(e.target);
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
