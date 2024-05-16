import { Button } from "@/components/ui/button";
import MiniFooter from "./MiniFooter";
import star from "/assets/images/star.png";
import hi from "/assets/images/hi.png";
import solutions from "/assets/images/solutions.png";
import heart from "/assets/images/heart.png";

const Footer = () => {
  return (
    <div className="max-w-[1150px] mx-auto">
      <div className="mx-auto flex items-left flex-col justify-center p-10">
        <p>Not you scrolling to the bottom 😌, </p>
        <div className="flex relative">
          <img src={star} alt="stars" className="absolute footer-stars" />
          <img src={hi} alt="ux" className="absolute hi" />
          <h1 className="font-avant-garde font-bold text-8xl leading-none tracking-tighter text-left mega-text">
            SAY HI
          </h1>
        </div>
        <div>
          <p>
            Reach out for design consultations, collaborations and general
            enquiries. I'm just a click away!
          </p>
          <div className="flex justify-between max-w-[650px]">
            <img src={heart} alt="stars" className="h-[40px]" />
            <img src={solutions} alt="ux" className="h-[40px]" />
          </div>
        </div>
        <div className="flex pt-14">
          <Button className="rounded-none bg-white text-black px-16 py-6 border">
            Contact
          </Button>
          <Button className="rounded-none bg-black px-16 py-6 border ml-6">
            About Me
          </Button>
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default Footer;
