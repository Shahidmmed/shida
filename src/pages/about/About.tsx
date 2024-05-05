import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "../layout/Footer";

const About = () => {
  return (
    <div>
      <section className="pb-16">
        <div className="max-w-[1220px] px-2 mx-auto">
          <h3 className="font-sans font-avant-garde mb-6 font-medium text-3xl leading-tight tracking-tighter text-left">
            <span className="bg-blue-100">Envisioning</span> the possibility of
            things and using my creativity to make them happen in ways that I
            can is what I do for a living.
          </h3>
          <div className="flex work-container">
            <div className="max-w-[750px] mr-4">
              <p className="font-sans font-avant-garde text-base font-light leading-relaxed tracking-wide text-left">
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
            <Card className="w-[550px] ml-4"></Card>
          </div>
          <div className="flex justify-between items-center pt-12">
            <p className="font-avant-garde font-bold text-5xl text-black leading-none tracking-tighter">
              Innovation
            </p>
            <span className="text-black">&#10209;</span>
            <p className="font-avant-garde font-bold text-5xl text-white leading-none tracking-tighter border-black">
              Strategy
            </p>
            <span className="text-black">&#10209;</span>
            <p className="font-avant-garde font-bold text-5xl text-black leading-none tracking-tighter">
              Design
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 bg-black text-white px-20 flex items-center flex-col justify-centermax-w-[1220px] mx-auto">
        <div className="space-y-12 ">
          <h3>Areas of expertise</h3>
          <p>
            My key areas of expertise are in Design, Management, Marketing and
            Strategy. Below is a more granular breakdown of my skill-set and
            services.
          </p>
          <p>What i am good at (but not limited to) :</p>
          <p className="font-sans font-avant-garde mb-6 text-base leading-tight tracking-tighter text-left">
            <span className="font-bold">Design & Strategy:</span> Design
            Thinking, UI/UX Design, Product Strategy & Management, Creative
            Direction
          </p>
          <p className="font-sans font-avant-garde mb-6 text-base leading-tight tracking-tighter text-left">
            <span className="font-bold">Research & Evaluation:</span> Market &
            User Research, User Interviews, Usability Testing
          </p>
          <p className="font-sans font-avant-garde mb-6 text-base leading-tight tracking-tighter text-left">
            <span className="font-bold">Prototyping & Design:</span>
            Wireframing, Prototyping, Visual Design & Style Guides
          </p>
          <p className="font-sans font-avant-garde mb-6 text-base leading-tight tracking-tighter text-left">
            <span className="font-bold">Digital Marketing & Branding:</span>
            Social Media Management, SEO, Copy & Content Writing
          </p>

          <Button className="rounded-none bg-white px-16 py-6 text-black border">
            My Resume
          </Button>
        </div>
      </section>
      <section className="py-12 max-w-[1220px] px-2 mx-auto">
        <h4 className="font-avant-garde font-medium text-lg md:text-2xl lg:text-3xl leading-9 md:leading-10 lg:leading-11 tracking-tight md:tracking-tighter lg:tracking-tight text-center">
          Strategic thinking + collaboration = impactful solutions for you &
          your business.
        </h4>

        <div className="font-avant-garde py-8">
          <div className="flex justify-evenly">
            <div className="mb-6 w-[200px]">
              <p className="text-base font-light leading-none tracking-wide">
                Nana Yaw Kunale
              </p>
              <p className="text-xs font-light leading-none tracking-wide">
                CTO - Detosphere
              </p>
            </div>
            <p className="text-base font-light leading-none tracking-wide mb-4 max-w-[900px]">
              I love working with Naa. She’s an amazing person first and a
              capable UI/UX Designer with impeccable work ethic. She may also,
              every once in a while, give you a protein bar or yoghurt :)
            </p>
          </div>

          <div className="flex justify-evenly">
            <div className="mb-6 w-[200px]">
              <p className="text-base font-light leading-none tracking-wide">
                Ummul-Khair Zurak
              </p>
              <p className="text-xs font-light leading-none tracking-wide">
                Software Dev
              </p>
            </div>
            <p className="text-base font-light leading-none tracking-wide mb-4 max-w-[900px]">
              Her designs are intuitive and suit the needs of users perfectly.
              Her excellent inter-personal skills coupled with her design skills
              makes her a top-notch professional.
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
