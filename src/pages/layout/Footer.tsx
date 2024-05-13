import { Button } from "@/components/ui/button";
import MiniFooter from "./MiniFooter";

const Footer = () => {
  return (
    <div className="max-w-[1150px] mx-auto">
      <div className="mx-auto flex items-left flex-col justify-center p-10">
        <p>Not you scrolling to the bottom 😌, </p>
        <h1 className="font-avant-garde font-bold text-8xl leading-none tracking-tighter text-left mega-text">
          SAY HI
        </h1>
        <p>
          Reach out for design consultations, collaborations and general
          enquiries. I'm just a click away!
        </p>
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
