import { ArrowUpCircleIcon } from "lucide-react";
import { useState } from "react";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const scrollTop = () => {
    console.log("ScrollY:", window.scrollY);
    setShowScrollTopButton(window.scrollY > 300);
  };

  window.addEventListener("scroll", scrollTop);

  return (
    <div>
      {showScrollTopButton && (
        <div className="top-btn-position top-btn-style" onClick={scrollTop}>
          <ArrowUpCircleIcon size={32} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
