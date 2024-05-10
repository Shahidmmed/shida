import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getImgUrl } from "@/data/functions";
import { projects } from "@/data/info";
import { useParams } from "react-router-dom";

const CaseStudy = () => {
  const { category } = useParams<{ category: string }>();

  const project = projects.find((project) => project.id === category);

  return (
    <div className="content-page pb-6">
      {project ? (
        <section className="mx-auto">
          <div className="px-10 flex items-center justify-center bg-slate-100">
            <img src={getImgUrl(project.image)} alt={project.previewText} />
            <div>
              <p className="font-avant-garde font-medium text-sm leading-5 tracking-wide text-left mb-2">
                UI/UX DESIGN &#10209; MOBILE APP &#11047; CASE STUDY
              </p>
              <h1>{project.name}</h1>
              <p> {project.brief}</p>
            </div>
          </div>

          <Tabs defaultValue="defining" className="w-full">
            <TabsList className="grid w-full grid-cols-5 px-16 my-14">
              <TabsTrigger value="defining">
                Defining and Understanding
              </TabsTrigger>
              <TabsTrigger value="developing">Developing ideas</TabsTrigger>
              <TabsTrigger value="clarity">
                Visual clarity and direction
              </TabsTrigger>
              <TabsTrigger value="design">Approved Design</TabsTrigger>
              <TabsTrigger value="guide">Style Guide</TabsTrigger>
            </TabsList>
            <TabsContent value="defining">
              <div className="px-16 max-w-[1220px] mx-auto pb-14">
                <h2 className="font-avant-garde text-3xl font-medium leading-10">
                  One thing about me: I love to work on challenging projects,
                  especially those new to me.
                </h2>
                <p className="pt-8">
                  The stress is definitely there, but the sheer determination to
                  see a project through is stronger and always wins, and that's
                  how we got here: the exciting task of transforming a
                  desktop/web app into a functional mobile prototype. This
                  experience highlighted the power of collaboration and the
                  immense value in refining designs through iteration. My big
                  takeaway was that design processes aren't linear; hence, it's
                  essential to adopt an approach that is efficient for you and
                  helps you get the work done. Amidst the challenges, two stood
                  out to me: 1. simplifying information presentation to reduce
                  cognitive load and prevent an overcrowded interface and 2.
                  trying not to oversimplify the user experience and bore users.
                  This experience was a tightrope, but I was glad to learn and
                  improve my UX and UI skills.
                </p>
              </div>
              <div className="bg-black flex p-10 text-white justify-between">
                <div>
                  <p>Timeline</p>
                </div>
                <div>My Role</div>
                <div>Tools</div>
                <div>Tasks</div>
              </div>
              <div className="px-16 max-w-[1220px] mx-auto py-14">
                <h2 className="font-avant-garde text-3xl font-medium leading-10">
                  Goals and Objectives
                </h2>
                <p className="pt-8">
                  My task was to design a functional mobile app that will help
                  users track inventory data and sales data, point of sale,
                  manage staff members and view reports. The primary objective
                  of this app is to provide users with unparalleled convenience,
                  allowing them to interact with crucial inventory data and
                  perform specific functions without being confined to a desktop
                  environment. It was important to consider the needs and
                  preferences of the business and its audience while designing
                  to ensure both sides were happy and comfortable with the
                  outcomes.
                </p>
              </div>
              <div className="px-16 max-w-[1220px] mx-auto py-14">
                <div>
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    My Design Process
                  </h2>
                  <p className="pt-8">Image</p>
                </div>
              </div>
              <div className="px-16 max-w-[1220px] mx-auto py-14">
                <h2 className="font-avant-garde text-3xl font-medium leading-10">
                  Defining and Understanding
                </h2>
                <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                  <li>
                    First things first, I had to familiarize myself with the
                    main product and ground myself by understanding the current
                    state in which it was in. It's an inventory management
                    system, and a lot was going on, but I do love a challenge,
                    so I applied more grease to my elbow.
                  </li>
                  <li>
                    It is also important to note that this is an already
                    existing product with established ui/ux documents on
                    research and personas that I had to understand and work with
                    as well.
                  </li>
                  <li>
                    The first challenge I faced was understanding the project
                    requirements and how to apply them to my design. A
                    consolidated list of project requirements consisting of
                    technological limitations and expectations was sent to me by
                    the project lead. My job was to transform a list of ideas
                    and specifications into effective interaction designs—sounds
                    fun, right?
                  </li>
                </ul>
                <div className="py-10">Image</div>
                <div>Image</div>
              </div>
            </TabsContent>
            <TabsContent value="developing">
              <div className="px-16 max-w-[1220px] mx-auto py-14">
                <h2 className="font-avant-garde text-3xl font-medium leading-10">
                  Defining and Understanding
                </h2>
                <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                  <li>
                    After understanding and defining my project objectives, I
                    had to determine how users would see the product (visuals),
                    how users may act within the product (architecture and
                    flows) and how users may perceive and engage with my design
                    (user journeys).
                  </li>
                  <li>
                    I began fleshing out the specifications with paper sketches,
                    figuring out where to put different content and how to blend
                    visual elements into the design to boost the overall
                    experience (while developing my information architecture as
                    well—sounds complex, but that's literally the job
                  </li>
                  <li>
                    The first challenge I faced was understanding the project
                    requirements and how to apply them to my design. A
                    consolidated list of project requirements consisting of
                    technological limitations and expectations was sent to me by
                    the project lead. My job was to transform a list of ideas
                    and specifications into effective interaction designs—sounds
                    fun, right?
                  </li>
                  <li>
                    To ensure my ideas didn't miss any marks, I shared my
                    initial ideas with my technical lead to brainstorm further
                    and ask questions to help my wireframe design process. I did
                    notice some conflicts between the business requirements and
                    user needs and brought that up as well. Ultimately, I was
                    confident enough in my sketches to develop them into digital
                    wireframes.
                  </li>
                </ul>
                <div>Image</div>
              </div>
              <div className="px-16 max-w-[1220px] mx-auto py-14">
                <h2 className="font-avant-garde text-3xl font-medium leading-10">
                  Information Architecture
                </h2>
                <p className="pt-8">
                  As a budding UX professional, my expertise lies in structuring
                  and organizing digital content and interactions to ensure my
                  ideas are organised into key sections and functionalities.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      ) : (
        <>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CaseStudy;
