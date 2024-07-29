import { ChevronsUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY || window.pageYOffset > 300) {
        console.log("first");
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <>
          <button
            className="fixed bottom-5 max-sm:text-xs right-4 z-50 flex items-center flex-col justify-center text-black p-3 bg-transparent transition duration-300"
            onClick={scrollToTop}
          >
            <ChevronsUp size={32} className="max-sm:h-6" />
            Back to the top
          </button>
        </>
      )}
    </div>
  );
};

export default ScrollToTop;
