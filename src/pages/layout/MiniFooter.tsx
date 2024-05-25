import twitter from "/assets/images/twitter.svg";
import linkedin from "/assets/images/linkedin.svg";
import behance from "/assets/images/behance.svg";

const MiniFooter = () => {
  return (
    <div className="max-w-[1150px] mx-auto">
      <footer className="flex justify-between py-6">
        <div className="underline">Naayettey07@gmail.com</div>
        <div className="flex justify-evenly">
          <a
            href="www.linkedin.com/in/naa-ayeley-ayettey/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://x.com/ayetteyn?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.behance.net/naaayeayettey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={behance} alt="Behance" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MiniFooter;
