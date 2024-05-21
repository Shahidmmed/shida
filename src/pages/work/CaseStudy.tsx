import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getImgUrl } from "@/data/functions";
import { data } from "@/data/info";
import { useParams } from "react-router-dom";
import MiniFooter from "../layout/MiniFooter";
import React from "react";
import ProjectNavigation from "@/components/ProjectNavigation";

const CaseStudy = () => {
  const { caseStudy } = useParams<{ caseStudy: string }>();

  const project = data.find(
    (item) => item.type === "caseStudy" && item.id === caseStudy
  );

  return (
    <div className="content-page pb-6">
      {project ? (
        <>
          <section className="mx-auto">
            <div className="p-12 flex items-center justify-start bg-slate-100 pt-20">
              <img
                src={getImgUrl(project.image)}
                alt={project.previewText}
                className="max-h-[300px] max-w-[400px]"
              />
              <div className="ml-8">
                <p className="avant-garde-bold font-medium text-sm leading-5 tracking-widest text-left mb-2 pb-2">
                  {project.designTypes.map((type, index) => (
                    <React.Fragment key={index}>
                      {type}{" "}
                      {index !== project.designTypes.length - 1 && <> ♦ </>}
                    </React.Fragment>
                  ))}
                </p>
                <h2 className="font-avant-garde font-semibold tracking-wider text-4xl text-left mb-2 text-nowrap">
                  {project.name}
                </h2>
                <p className="mb-2 py-4 font-avant-garde text-sm leading-6 tracking-wider">
                  {project.brief}
                </p>
              </div>
            </div>

            <Tabs defaultValue="defining" className="w-full pt-12">
              <TabsList className="sticky top-0 z-10 grid w-full grid-cols-5 px-16 mb-14py-2">
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
                    The stress is definitely there, but the sheer determination
                    to see a project through is stronger and always wins, and
                    that's how we got here: the exciting task of transforming a
                    desktop/web app into a functional mobile prototype. This
                    experience highlighted the power of collaboration and the
                    immense value in refining designs through iteration. My big
                    takeaway was that design processes aren't linear; hence,
                    it's essential to adopt an approach that is efficient for
                    you and helps you get the work done. Amidst the challenges,
                    two stood out to me: 1. simplifying information presentation
                    to reduce cognitive load and prevent an overcrowded
                    interface and 2. trying not to oversimplify the user
                    experience and bore users. This experience was a tightrope,
                    but I was glad to learn and improve my UX and UI skills.
                  </p>
                </div>
                <div className="bg-black flex py-10 text-white justify-evenly">
                  <div className="">
                    <p className="pb-2">Timeline</p>
                    <small>4 weeks (80 hours)</small>
                  </div>
                  <div>
                    <p className="pb-2">My Role</p>
                    <small>UI/UX Designer</small>
                  </div>
                  <div>
                    <p className="pb-2">Tools</p>
                    <small>Figma</small>
                  </div>
                  <div className="">
                    <p className="pb-2">Tasks</p>
                    <small>UX Design, Usability Testing</small>
                  </div>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Goals and Objectives
                  </h2>
                  <p className="pt-8">
                    My task was to design a functional mobile app that will help
                    users track inventory data and sales data, point of sale,
                    manage staff members and view reports. The primary objective
                    of this app is to provide users with unparalleled
                    convenience, allowing them to interact with crucial
                    inventory data and perform specific functions without being
                    confined to a desktop environment. It was important to
                    consider the needs and preferences of the business and its
                    audience while designing to ensure both sides were happy and
                    comfortable with the outcomes.
                  </p>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <div>
                    <h2 className="font-avant-garde text-3xl font-medium leading-10">
                      My Design Process
                    </h2>
                    <div className="pt-8">
                      {project.images && project.images.length > 0 && (
                        <>
                          <img
                            src={getImgUrl(project.images[0])}
                            alt="Design Process Image"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Defining and Understanding
                  </h2>
                  <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                    <li className="mb-6">
                      First things first, I had to familiarize myself with the
                      main product and ground myself by understanding the
                      current state in which it was in. It's an inventory
                      management system, and a lot was going on, but I do love a
                      challenge, so I applied more grease to my elbow.
                    </li>
                    <li className="mb-6">
                      It is also important to note that this is an already
                      existing product with established ui/ux documents on
                      research and personas that I had to understand and work
                      with as well.
                    </li>
                    <li className="mb-6">
                      The first challenge I faced was understanding the project
                      requirements and how to apply them to my design. A
                      consolidated list of project requirements consisting of
                      technological limitations and expectations was sent to me
                      by the project lead. My job was to transform a list of
                      ideas and specifications into effective interaction
                      designs—sounds fun, right?
                    </li>
                  </ul>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[1])}
                          alt="Transformation Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div>
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[2])}
                        alt="Scene Image"
                      />
                    </>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="developing">
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Defining and Understanding
                  </h2>
                  <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                    <li className="mb-6">
                      After understanding and defining my project objectives, I
                      had to determine how users would see the product
                      (visuals), how users may act within the product
                      (architecture and flows) and how users may perceive and
                      engage with my design (user journeys).
                    </li>
                    <li className="mb-6">
                      I began fleshing out the specifications with paper
                      sketches, figuring out where to put different content and
                      how to blend visual elements into the design to boost the
                      overall experience (while developing my information
                      architecture as well—sounds complex, but that's literally
                      the job😭.)
                    </li>
                    <li className="mb-6">
                      The first challenge I faced was understanding the project
                      requirements and how to apply them to my design. A
                      consolidated list of project requirements consisting of
                      technological limitations and expectations was sent to me
                      by the project lead. My job was to transform a list of
                      ideas and specifications into effective interaction
                      designs—sounds fun, right?
                    </li>
                    <li className="mb-6">
                      To ensure my ideas didn't miss any marks, I shared my
                      initial ideas with my technical lead to brainstorm further
                      and ask questions to help my wireframe design process. I
                      did notice some conflicts between the business
                      requirements and user needs and brought that up as well.
                      Ultimately, I was confident enough in my sketches to
                      develop them into digital wireframes.
                    </li>
                  </ul>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[3])}
                          alt="Sketch Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Information Architecture
                  </h2>
                  <p className="pt-8">
                    As a budding UX professional, my expertise lies in
                    structuring and organizing digital content and interactions
                    to ensure my ideas are organised into key sections and
                    functionalities.
                  </p>
                </div>
                <div className="py-10 flex justify-center">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[4])}
                        alt="Information Architecture Image"
                      />
                    </>
                  )}
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    User Journeys
                  </h2>
                  <p className="pt-8">
                    By understanding the user journey, their emotions, and the
                    opportunities for improvement, i was able to structure and
                    design to meet the needs and expectations of users and the
                    business.
                  </p>
                </div>
                <div className="py-10 flex justify-center">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[5])}
                        alt="User Journey Image"
                      />
                    </>
                  )}
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    User Flows
                  </h2>
                  <p className="pt-8">
                    I created this user flow to help me and my team navigate the
                    core functions of recording a sale and generating invoices
                    on our app. It's important to note that the app is primarily
                    designed for viewing/tracking information rather than
                    fulfilling actions. Therefore, this user flow, which focuses
                    on sales and invoices, stands as the most significant
                    journey within the app.
                  </p>
                </div>
                <div className="py-10 flex justify-center">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[6])}
                        alt="User Flows Image"
                      />
                    </>
                  )}
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14 flex flex-col items-center justify-center">
                  <p>
                    Every design decision is meticulously tailored to enhance
                    user engagement and satisfaction.
                  </p>
                  <p className="text-6xl">😌</p>
                </div>
              </TabsContent>
              <TabsContent value="clarity">
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Visual Clarity & Direction
                  </h2>
                  <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                    <li className="mb-6">
                      Designing the wireframes was a challenge, and just like
                      before, It also required a lot of iterations and research.
                      I used ✨ Figma✨ to get into specific details, better
                      spacing and alignment, and to add more clarity to my
                      sketches. I also prototype key parts and interactions
                      during this process because I find it very effective. (I
                      like to see what I'm doing in real-time to validate the
                      user experience.)
                    </li>
                    <li className="mb-6">
                      I presented my wireframes to my technical lead and project
                      lead to get validation on the general flow and placement
                      of elements. I made sure to ask a lot of questions to make
                      sure we were on the same page and requested modifications
                      (this happened a couple of times) before the visual design
                      phase started.
                    </li>
                  </ul>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Low-fi Wireframes (selected frames)
                  </h2>
                  <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                    <li className="mb-6">
                      I used a week to create digital representations of my
                      paper sketches with a few changes and add ons and another
                      week to complete my modifications and complete my design.
                    </li>
                    <li className="mb-6">
                      However, The Smartup retail mobile app started of as two
                      separate parts: one for store owners and managers (the
                      control panel) and another for employees and managers (POS
                      Lite). The screens below show the early ideas before
                      combining everything into one app.
                    </li>
                  </ul>
                </div>
                <div className="py-10 flex justify-center">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[7])}
                        alt="Low-fi Wireframes Image"
                      />
                    </>
                  )}
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Final Wireframes (selected frames)
                  </h2>
                  <p className="pt-8">
                    The screens below show the final ideas after combining the
                    control panel and pos lite ideas into one app after two
                    weeks of ideations and modifications. I picked the best
                    design patterns and flows to create the final work.
                  </p>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[8])}
                          alt="Final Wireframes Image"
                        />
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="design">
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Approved Design
                  </h2>
                  <p className="pt-8">
                    As a budding UX professional, my expertise lies in
                    structuring and organising digital content and interactions
                    to ensure my ideas are organised into key sections and
                    functionalities. The mockups below represent the approved
                    designs by business before testing.
                  </p>
                  <Button className="rounded-none bg-black px-16 py-6 border mt-6">
                    View Prototype
                  </Button>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Conclusion/Takeaway
                  </h2>
                  <p className="pt-8">
                    This was a cool and interesting project to work on. It was
                    an exciting challenge that pushed me to new heights. It
                    taught me the essence of collaboration, and the iterative
                    process highlighted the importance of adaptability within
                    design. Through this project, I learned that the most
                    efficient design processes are those that flex and adapt to
                    the unique needs of each project. #WiseWordsFr
                  </p>
                </div>
                <div className="py-10 flex justify-center">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[9])}
                        alt="Final Screens Image"
                      />
                    </>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="guide">
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Style Guide
                  </h2>
                  <p className="pt-8">
                    I was inspired by the design system for the desktop & web
                    app to create my style guide for the mobile app to deliver a
                    clear and consistent design solution. Predominantly purple
                    and green screens would provide a sense of calm and control;
                    simple button states and clear iconography would help make
                    tasks feel manageable and easy to use.
                  </p>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Color palette
                  </h2>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[10])}
                          alt="Final Screens Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Logo
                  </h2>
                  <div className="py-10 flex justify-center">
                    {/* {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[10])}
                          alt="Final Screens Image"
                        />
                      </>
                    )} */}
                  </div>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Typography
                  </h2>
                  <p className="pt-8">
                    The choice of 'Albert Sans' was deliberate and driven by my
                    desire to achieve a clean, modern, and legible design that
                    fits perfectly with the project's objectives. I wanted to
                    use a font that was modern, versatile and legible across
                    various screen sizes and resolutions while also creating a
                    sense of professionalism.
                  </p>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Icons
                  </h2>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img src={getImgUrl(project.images[11])} alt="Icons" />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Border Radius
                  </h2>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[12])}
                          alt="Border Radius"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Buttons
                  </h2>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[13])}
                          alt="Buttons"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Navigations
                  </h2>
                  <div className="py-10 flex justify-center">
                    {/*  {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[13])}
                          alt="Buttons"
                        />
                      </>
                    )} */}
                  </div>
                </div>
                <div className="px-16 max-w-[1220px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Illustrations
                  </h2>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[14])}
                          alt="Illustrations"
                        />
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>
          <ProjectNavigation currentProjectId={project.id} />
        </>
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
      <MiniFooter />
    </div>
  );
};

export default CaseStudy;
