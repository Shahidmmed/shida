import { Input } from "@/components/ui/input";
import hey from "/assets/images/hey.gif";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import star from "/assets/images/star.png";
import hi from "/assets/images/hi.png";
import solutions from "/assets/images/solutions.png";
import heart from "/assets/images/heart.png";
import useAppearOnScroll from "@/useAppearOnScroll";
import MiniFooter from "../layout/MiniFooter";

const Contact = () => {
  useAppearOnScroll([".appear-on-scroll"]);

  return (
    <div className="xl2:w-[1240px] w-[1100px] max-sm:w-full max-sm:pt-8 px-2 mx-auto pt-20">
      <div className="appear-on-scroll flex relative">
        <img src={star} alt="stars" className="absolute footer-stars" />
        <img src={hi} alt="ux" className="absolute contact-hi" />
        <h1 className="avant-garde-bold font-bold text-5xl leading-none tracking-tighter text-left giga-text">
          SAY HI
        </h1>
      </div>
      <div className="appear-on-scroll flex justify-center">
        <img
          src={hey}
          alt="Walking in Hey GIF"
          className="h-[370px] w-[420px]"
        />
      </div>
      <div className="flex flex-col items-end">
        <p className="appear-on-scroll font-avant-garde text-base font-light leading-6 tracking-wide max-sm:text-left max-sm:px-1 text-right px-4 pt-4">
          Reach out for design consultations, collaborations and general
          enquiries. I'm just a click away!
        </p>
        <div className="appear-on-scroll flex justify-between w-[725px] max-sm:w-full items-end">
          <img src={heart} alt="stars" className="h-[40px] -mt-2" />
          <img src={solutions} alt="ux" className="h-[40px]" />
        </div>
      </div>

      <div className="appear-on-scroll pb-20">
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" className="w-full" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="name">Email</Label>
            <Input id="name" type="text" className="w-full" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Message</Label>
            <Textarea id="description" className="min-h-32" />
          </div>
        </div>
        <Button className="appear-on-scrollrounded-none bg-black px-16 py-6 border mt-6">
          Send Message
        </Button>
      </div>
      <MiniFooter />
    </div>
  );
};

export default Contact;
