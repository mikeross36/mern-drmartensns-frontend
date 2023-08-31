import { useEffect } from "react";

export default function useOutsideClick(ref, cb) {
  useEffect(function () {
    function outsideClick(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      cb();
    }
    document.addEventListener("mousedown", outsideClick);
    document.addEventListener("touchstart", outsideClick);

    return function () {
      document.removeEventListener("mousedown", outsideClick);
      document.removeEventListener("touchstart", outsideClick);
    };
  });
}
