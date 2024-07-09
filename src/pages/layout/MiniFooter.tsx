import twitter from "/assets/images/twitter.svg";
import linkedin from "/assets/images/linkedin.svg";
import behance from "/assets/images/behance.svg";
import useAppearOnScroll from "@/useAppearOnScroll";

const MiniFooter = () => {
  useAppearOnScroll([".appear-on-scroll"]);
  return (
    <div className="max-w-[1150px] max-sm:w-full mx-auto">
      <footer className="flex justify-between py-6 max-sm:px-1">
        <div className="underline appear-on-scroll">
          <a href="mailto:Naayettey07@gmail.com" className="max-sm:text-xs">
            Naayettey07@gmail.com
          </a>
        </div>
        <div className="flex justify-evenly max-sm:justify-normal">
          <a
            href="https://www.linkedin.com/in/naa-ayeley-ayettey/"
            target="_blank"
            rel="noopener noreferrer"
            className="appear-on-scroll mr-4"
          >
            <img src={linkedin} alt="LinkedIn" className="h-4" />
          </a>
          <a
            href="https://x.com/ayetteyn?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="appear-on-scroll mr-4"
          >
            <img src={twitter} alt="Twitter" className="h-4" />
          </a>
          <a
            href="https://www.behance.net/naaayeayettey"
            target="_blank"
            rel="noopener noreferrer"
            className="appear-on-scroll"
          >
            <img src={behance} alt="Behance" className="h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MiniFooter;
