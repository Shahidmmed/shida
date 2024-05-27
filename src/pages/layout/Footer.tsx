import { Button } from "@/components/ui/button";
import MiniFooter from "./MiniFooter";
import star from "/assets/images/star.png";
import hi from "/assets/images/hi.png";
import solutions from "/assets/images/solutions.png";
import heart from "/assets/images/heart.png";

const Footer = () => {
  return (
    <div className="xl2:w-[1240px] w-[1100px] mx-auto px-12">
      <div className="mx-auto flex items-left flex-col justify-center p-10">
        <p className="avant-garde-extralight text-xl tracking-widest pb-6">
          Not you scrolling to the bottom 😌,
        </p>
        <div className="flex relative">
          <img src={star} alt="stars" className="absolute footer-stars" />
          <img src={hi} alt="ux" className="absolute hi" />
          <h1 className="avant-garde-bold font-extrabold  leading-none tracking-wide text-left mega-text">
            SAY HI
          </h1>
        </div>
        <div>
          <p className="avant-garde-extralight text-xl tracking-widest pt-6">
            Reach out for design consultations, collaborations and general
            enquiries. I'm just a click away!
          </p>
          <div className="flex justify-between max-w-[950px]">
            <img src={heart} alt="stars" className="h-[40px]" />
            <img src={solutions} alt="ux" className="h-[40px]" />
          </div>
        </div>
        <div className="flex pt-14">
          <Button className="rounded-none bg-white text-base text-black px-20 py-8 border-2 border-black">
            Contact
          </Button>
          <Button className="rounded-none bg-black text-base px-20 py-8 border-2 ml-6">
            About Me
          </Button>
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default Footer;
