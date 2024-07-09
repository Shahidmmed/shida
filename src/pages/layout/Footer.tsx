import MiniFooter from "./MiniFooter";
import star from "/assets/images/star.png";
import hi from "/assets/images/hi.png";
import solutions from "/assets/images/solutions.png";
import heart from "/assets/images/heart.png";
import useAppearOnScroll from "@/useAppearOnScroll";
import { Link } from "react-router-dom";

const Footer = () => {
  useAppearOnScroll([".appear-on-scroll"]);

  return (
    <div className="xl2:w-[1240px] w-[1100px] mx-auto px-12 max-sm:w-full max-sm:px-8">
      <div className="mx-auto flex items-left flex-col justify-center py-10">
        <p className="appear-on-scroll font-avant-garde-book max-sm:font-normal text-[#403f3f] font-semibold md:max-xl:text-base max-sm:text-xs text-xl tracking-widest max-sm:tracking-wide pb-6">
          Not you scrolling to the bottom 😌,
        </p>
        <div className="appear-on-scroll flex relative">
          <img src={star} alt="stars" className="absolute footer-stars" />
          <img src={hi} alt="ux" className="absolute hi" />
          <h1 className="avant-garde-bold font-extrabold  leading-none tracking-loose text-left mega-text">
            SAY HI
          </h1>
        </div>
        <div className="appear-on-scroll">
          <p className="avant-garde-extralight text-[#403f3f] font-bold md:max-xl:text-base text-xl max-sm:text-wrap max-sm:text-xs max-sm:tracking-wide tracking-widest pt-6">
            Reach out for design consultations, collaborations and general
            enquiries. I'm just a click away!
          </p>
          <div className="flex justify-between max-w-[950px] md:max-xl:max-w-[840px]">
            <img src={heart} alt="stars" className="h-[40px]" />
            <img src={solutions} alt="ux" className="h-[40px]" />
          </div>
        </div>
        <div className="appear-on-scroll flex pt-14 max-sm:pt-8">
          <Link
            to="/contact"
            className="rounded-none hover:bg-black link-txt hover:text-white bg-white max-sm:px-10 px-20 py-5 border border-black"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="rounded-none bg-black hover:bg-slate-800/80 text-base text-white px-20 py-5 max-sm:px-10 max-sm:ml-3 border-2 ml-6"
          >
            About Me
          </Link>
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default Footer;
