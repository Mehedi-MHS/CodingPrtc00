import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [onSmallScreen, setOnSmallscreen] = useState(false);

  const checkScreenSize = () => {
    setOnSmallscreen(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    //cleanup eventListener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return onSmallScreen;
};

export default useWindowWidth;
