import { Linkedin, Twitter } from "lucide-react";

const MiniFooter = () => {
  return (
    <div className="max-w-[1150px] mx-auto">
      <footer className="flex justify-between py-6">
        <div className="underline">Naayettey07@gmail.com</div>
        <div className="flex justify-evenly">
          <Linkedin className="mr-4" />
          <Twitter />
        </div>
      </footer>
    </div>
  );
};

export default MiniFooter;
