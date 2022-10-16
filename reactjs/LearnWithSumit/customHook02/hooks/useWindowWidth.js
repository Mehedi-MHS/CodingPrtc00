import { useState, useEffect } from "react";

const useWindowWidth = (screenSize) => {
  const [onSmallScreen, setOnSmallscreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setOnSmallscreen(window.innerWidth < screenSize);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    //cleanup eventListener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [screenSize]);
  return onSmallScreen;
};

export default useWindowWidth;
