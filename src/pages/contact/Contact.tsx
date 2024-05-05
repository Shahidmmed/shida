import { Input } from "@/components/ui/input";
import hey from "../../assets/hey.gif";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="max-w-[1220px] px-2 mx-auto">
      <h1 className="font-avant-garde font-bold text-5xl leading-none tracking-tighter text-left giga-text">
        SAY HI
      </h1>
      <div className="flex justify-center">
        <img
          src={hey}
          alt="Walking in Hey GIF"
          className="h-[370px] w-[420px]"
        />
      </div>
      <p className="font-avant-garde text-base font-light leading-6 tracking-wide text-right p-4">
        Reach out for design consultations, collaborations and general
        enquiries. I'm just a click away!
      </p>

      <div className="pb-8">
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
      </div>
    </div>
  );
};

export default Contact;
