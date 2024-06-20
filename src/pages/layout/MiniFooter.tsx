import twitter from "/assets/images/twitter.svg";
import linkedin from "/assets/images/linkedin.svg";
import behance from "/assets/images/behance.svg";
import useAppearOnScroll from "@/useAppearOnScroll";

const MiniFooter = () => {
  useAppearOnScroll([".appear-on-scroll"]);
  return (
    <div className="max-w-[1150px] mx-auto">
      <footer className="flex justify-between max-sm:flex-col py-6">
        <div className="underline appear-on-scroll">Naayettey07@gmail.com</div>
        <div className="flex justify-evenly max-sm:justify-normal">
          <a
            href="www.linkedin.com/in/naa-ayeley-ayettey/"
            target="_blank"
            rel="noopener noreferrer"
            className="appear-on-scroll mr-4"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://x.com/ayetteyn?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="appear-on-scroll mr-4"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.behance.net/naaayeayettey"
            target="_blank"
            rel="noopener noreferrer"
            className="appear-on-scroll"
          >
            <img src={behance} alt="Behance" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MiniFooter;
