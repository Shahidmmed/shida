import { Button } from "@/components/ui/button";
import Footer from "../layout/Footer";
import shida from "/assets/images/shida.png";
import kite from "/assets/images/kite.png";
import kite2 from "/assets/images/kite2.png";
import heart from "/assets/images/heart-kiss.png";
import whiskers from "/assets/images/whiskers.png";
import whiskers2 from "/assets/images/whiskers2.png";

const About = () => {
  return (
    <div className="pt-20">
      <section className="pb-16">
        <div className="max-w-[1200px] px-28 mx-auto">
          <h3 className="font-sans font-avant-garde mb-6 font-medium text-3xl leading-normal  text-left">
            <span className="bg-blue-100">Envisioning</span> the possibility of
            things and <span className="bg-blue-100">using my creativity</span>{" "}
            to make them happen in ways that I can{" "}
            <span className="bg-blue-100">is what I do for a living.</span>
          </h3>
          <div className="flex work-container justify-between">
            <div className="max-w-[550px] mr-4">
              <p className="font-sans font-avant-garde text-xl font-light leading-relaxed tracking-wide text-left">
                I am a versatile creative living in Accra and i’m all about
                using UX and storytelling to craft impactful experiences that
                will put a smile on faces and possibly make life a bit easier
                for people. I am passionate about working on projects that are
                emotionally connected and turn my ideas into a reality. My goal
                is to help; plus, I enjoy seeing the effects brilliant products
                have on people and businesses. I spend most of my time learning
                and improving myself and my skills, and when I'm not online, I'm
                probably binge-watching a TV show or taking a nap.
              </p>
              <Button className="rounded-none bg-black px-16 py-6 border mt-6">
                My Resume
              </Button>
            </div>
            <div className="relative flex flex-row-reverse">
              <img src={shida} alt="orange kite" className="h-80 ml-6" />
              <img
                src={heart}
                alt="heart"
                className="h-12 absolute z-10 heart-kiss"
              />
            </div>
          </div>
        </div>
        <div className="flex max-w-[1200px] px-14 mx-auto justify-between items-center pt-12">
          <p className="avant-garde-bold font-bold text-6xl text-black leading-none ">
            Innovation
          </p>
          <img src={kite} alt="orange kite" className="h-10" />
          <p className="avant-garde-bold font-bold text-6xl text-white leading-none  border-black">
            Strategy
          </p>
          <img src={kite2} alt="green kite" className="h-10" />
          <p className="avant-garde-bold font-bold text-6xl text-black leading-none ">
            Design
          </p>
        </div>
      </section>
      <section className="py-8 bg-black text-white px-20 flex items-center flex-col justify-centermax-w-[1220px] mx-auto">
        <div className="space-y-12 ">
          <div>
            <h3 className="font-avant-garde text-4xl font-medium leading-14 mb-6">
              Areas of expertise
            </h3>
            <hr className="border-white w-3/4 mt-0" />
          </div>
          <p className="text-xl">
            My key areas of expertise are in Design, Management, Marketing and
            Strategy. Below is a more granular breakdown of my skill-set and
            services.
          </p>
          <p className="text-blue-500 text-xl">
            What i am good at (but not limited to) :
          </p>
          <p className="font-sans font-avant-garde mb-6 leading-normal text-xl text-left">
            <span className="font-bold">Design & Strategy: </span> Design
            Thinking, UI/UX Design, Product Strategy & Management, Creative
            Direction
          </p>
          <p className="font-sans font-avant-garde mb-6 text-xl leading-normal  text-left">
            <span className="font-bold">Research & Evaluation: </span>Market &
            User Research, User Interviews, Usability Testing
          </p>
          <p className="font-sans font-avant-garde mb-6 text-xl leading-normal  text-left">
            <span className="font-bold">Prototyping & Design: </span>
            Wireframing, Prototyping, Visual Design & Style Guides
          </p>
          <p className="font-sans font-avant-garde mb-6 text-xl leading-normal  text-left">
            <span className="font-bold">Digital Marketing & Branding: </span>
            Social Media Management, SEO, Copy & Content Writing
          </p>

          <Button className="rounded-none bg-white px-16 py-6 text-black border">
            My Resume
          </Button>
        </div>
      </section>
      <section className="py-12 px-16 mx-auto">
        <div className="flex justify-center items-center">
          <img src={whiskers} alt="whiskers" className="h-24" />
          <h4 className="font-avant-garde text-nowrap font-medium text-lg md:text-2xl lg:text-3xl leading-9 md:leading-10 lg:leading-11 tracking-tight md: lg:tracking-tight text-center">
            Strategic thinking + collaboration = impactful solutions for you &
            your business.
          </h4>
          <img src={whiskers2} alt="whiskers" className="h-24" />
        </div>

        <div className="font-avant-garde py-8 max-w-[1220px] px-16 mx-auto">
          <div className="flex justify-evenly py-8">
            <div className="mb-6 w-[200px]">
              <p className="text-xl font-light leading-none tracking-wide">
                Nana Yaw Kunale
              </p>
              <p className="text-xs font-light leading-none tracking-wide">
                CTO - Detosphere
              </p>
            </div>
            <span className="text-2xl font-bold ml-2 mr-6">:</span>
            <p className="text-xl font-light leading-none tracking-wide mb-4 max-w-[900px]">
              I love working with Naa. She’s an amazing person first and a
              capable UI/UX Designer with impeccable work ethic. She may also,
              every once in a while, give you a protein bar or yoghurt :)
            </p>
          </div>

          <div className="flex justify-evenly py-8">
            <div className="mb-6 w-[200px]">
              <p className="text-xl font-light leading-none tracking-wide">
                Ummul-Khair Zurak
              </p>
              <p className="text-xs font-light leading-none tracking-wide">
                Software Dev
              </p>
            </div>
            <span className="text-2xl font-bold ml-2 mr-6">:</span>
            <p className="text-xl font-light leading-none tracking-wide mb-4 max-w-[900px]">
              Her designs are intuitive and suit the needs of users perfectly.
              Her excellent inter-personal skills coupled with her design skills
              makes her a top-notch professional.
            </p>
          </div>
          <div className="flex justify-evenly py-8">
            <div className="mb-6 w-[200px]">
              <p className="text-xl font-light leading-none tracking-wide">
                Welly Gedel
              </p>
              <p className="text-xs font-light leading-none tracking-wide">
                Product Owner
              </p>
            </div>
            <span className="text-2xl font-bold ml-2 mr-6">:</span>
            <p className="text-xl font-light leading-none tracking-wide mb-4 max-w-[900px]">
              Ayeley’s outstanding skills, dedication, and patience resulted in
              a product that perfectly aligned with our vision and achieved a
              high level of quality. Her work continues to be incredibly
              valuable to me and my team.
            </p>
          </div>
        </div>

        <hr className="my-6 border-t border-gray-300" />
      </section>
      <Footer />
    </div>
  );
};

export default About;
