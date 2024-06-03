import ProjectNavigation from "@/components/ProjectNavigation";
import { Skeleton } from "@/components/ui/skeleton";
import { getImgUrl } from "@/data/functions";
import { data } from "@/data/info";
import React from "react";
import MiniFooter from "../layout/MiniFooter";
import useAppearOnScroll from "@/useAppearOnScroll";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Thenga = () => {
  const selectors = [".appear-on-scroll", ".tab-content-appear"];
  useAppearOnScroll(selectors);

  const project = data.find(
    (item) => item.type === "caseStudy" && item.id === "thenga"
  );

  return (
    <div>
      {project ? (
        <>
          <section className="mx-auto">
            <div className="p-16 flex items-center justify-start bg-slate-100 pt-20">
              <img
                src={getImgUrl(project.image)}
                alt={project.previewText}
                className="appear-on-scroll max-h-[300px] max-w-[400px] ml-10"
              />
              <div className="ml-8">
                <p className="appear-on-scroll avant-garde-bold font-medium text-sm leading-5 tracking-wider text-left mb-2 pb-2">
                  {project.designTypes.map((type, index) => (
                    <React.Fragment key={index}>
                      {type}{" "}
                      {index !== project.designTypes.length - 1 && <> ♦ </>}
                    </React.Fragment>
                  ))}
                </p>
                <h2 className="appear-on-scroll font-avant-garde font-semibold tracking-wider text-4xl text-left mb-2 text-nowrap">
                  {project.name}
                </h2>
                <p className="appear-on-scroll mb-2 py-4 font-avant-garde text-sm leading-6 tracking-wider max-w-[550px]">
                  {project.brief}
                </p>
              </div>
            </div>
            <Tabs defaultValue="background" className="w-full">
              <TabsList className="sticky top-0 z-10 grid w-full grid-cols-6 h-16 px-24 mb-14">
                <TabsTrigger value="background" className="py-4">
                  Background
                </TabsTrigger>
                <TabsTrigger value="journeys" className="py-4">
                  User Journeys
                </TabsTrigger>
                <TabsTrigger value="architecture" className="py-4">
                  Information Architecture
                </TabsTrigger>
                <TabsTrigger value="flow" className="py-4">
                  User Flow
                </TabsTrigger>
                <TabsTrigger value="wireframing" className="py-4">
                  Wireframing
                </TabsTrigger>
                <TabsTrigger value="style" className="py-4">
                  Style Guide
                </TabsTrigger>
              </TabsList>
              <TabsContent value="background" className="tab-content-appear">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                    Introduction
                  </h2>
                  <p className=" py-8">
                    When I was presented with the Thenga concept, I knew
                    immediately that it was a project I would be passionate
                    about. The idea of making e-shopping accessible and simple
                    for Ghanaians was intriguing to me, even though it's not
                    something I personally engage in regularly. I was excited to
                    take on the challenge of designing a solution that would
                    work for many people. Before the redesign, the Thenga
                    product was quite hard to understand. It had many steps and
                    processes that made the product quite unpleasant to use.
                    After some discussions and brainstorming sessions, my team
                    and I developed a new Thenga flow with distinctive features
                    that maintained the goal of the product and made it way
                    better to navigate while promoting accessibility. One of my
                    favourite things about the new design is its functionality -
                    I wanted to make sure it was super simple for people to use
                    without any trouble. It was an exciting journey for me and a
                    bold step into the world of product design. I learned a lot,
                    improved my skill, and achieved things I didn't know I
                    could.
                  </p>
                </div>
                <div className="bg-black flex py-20 text-white justify-evenly">
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
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <div>
                    <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                      Design Process
                    </h2>
                    <div className="flex xl2:w-[1120px] w-[980px] justify-center items-center pt-8">
                      {project.images && project.images.length > 0 && (
                        <>
                          <img
                            src={getImgUrl(project.images[0])}
                            alt="Strategy"
                            className="h-[150px]"
                          />
                          <p className=" ml-4 leading-loose overflow-wrap max-w-full">
                            My task was to redesign the Thenga product, which at
                            the time, was just a website. But after strategising
                            with my team, determining what we wanted to build
                            and who it was for, we decided to split the product
                            into two parts. This stage was essential because it
                            allowed me to improve the user experience and create
                            a more streamlined process for shoppers.
                          </p>
                        </>
                      )}
                    </div>
                    <div className="flex xl2:w-[1120px] w-[980px] justify-center items-center pt-8">
                      {project.images && project.images.length > 0 && (
                        <>
                          <img
                            src={getImgUrl(project.images[1])}
                            alt="Strategy"
                            className="h-[150px]"
                          />
                          <p className=" ml-4 leading-loose overflow-wrap max-w-full">
                            Through our discussions and brainstorming sessions,
                            we were able to come up with a unique and innovative
                            approach to the redesign that I believe will
                            significantly benefit many people. We explored what
                            features and functions were within our scope and
                            iterated until we decided what was best. We chose to
                            go big or go home.
                          </p>
                        </>
                      )}
                    </div>
                    <div className="flex xl2:w-[1120px] w-[980px] justify-center items-center pt-8">
                      {project.images && project.images.length > 0 && (
                        <>
                          <img
                            src={getImgUrl(project.images[2])}
                            alt="Strategy"
                            className="h-[150px]"
                          />
                          <p className=" ml-4 leading-loose overflow-wrap max-w-full">
                            As a designer, The goal for the redesign was to
                            merge aesthetics with functionality to create a
                            simple and logical digital experience that anybody
                            can use. I organised all the ideas into more
                            concrete elements using different structures, i.e.
                            user journey map, information architecture, and user
                            flows, to define how users will get to specific
                            information and where they can go next.
                          </p>
                        </>
                      )}
                    </div>
                    <div className="flex xl2:w-[1120px] w-[980px] justify-center items-center pt-8">
                      {project.images && project.images.length > 0 && (
                        <>
                          <img
                            src={getImgUrl(project.images[3])}
                            alt="Strategy"
                            className="h-[150px]"
                          />
                          <p className=" ml-4 leading-loose overflow-wrap max-w-full">
                            Lastly, I put my ideas together to create low and
                            high-fidelity prototypes to visualise the flow of
                            the product, if the features work, and how it will
                            look to the user. I made several iterations before
                            the final design to ensure efficiency and ease of
                            use.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                    Challenges
                  </h2>
                  <p className=" pt-8">
                    Thenga is an innovative product designed to create value
                    between Ghanaian shoppers and U.K. Shops. This allows people
                    to move away from unreliable shopping experiences and enjoy
                    a new era of online shopping. A few problems some Ghanaian
                    online shoppers usually face that Thenga aims to solve
                    include:
                  </p>
                  <ol className="desired pt-8">
                    <li className=" mb-6">
                      Few payment options or no mobile money payment options
                      while shopping
                    </li>
                    <li className=" mb-6">Scam pages and dishonest vendors</li>
                    <li className=" mb-6">Shipping costs and time.</li>
                    <li className=" mb-6">
                      Delivery issues eg. miscommunication and poor customer
                      service
                    </li>
                  </ol>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                    Goals
                  </h2>
                  <ol className="desired pt-8">
                    <li className=" mb-6">
                      The goal is to design a product that makes shopping easier
                      for Ghanaians and allows various payment options,
                      including mobile money payment options.
                    </li>
                    <li className=" mb-6">
                      The goal is to design a visually engaging interface with
                      focus of functionality and task completion
                    </li>
                    <li className=" mb-6">
                      The goal is to reduce the issue of scamming by allowing
                      customers to shop from authentic websites without worrying
                      about dishonesty.
                    </li>
                    <li className=" mb-6">
                      The goal is to assist with simple and effective shipping
                      and delivery that provides efficient communication and
                      customer service.
                    </li>
                  </ol>
                </div>
                <div>
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[4])}
                        alt="Scene Image"
                      />
                    </>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="journeys" className="tab-content-appear">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                    User Personas
                  </h2>
                  <p className=" pt-8">
                    I created target audiences with different backgrounds to
                    help me gain a better understanding of the problem we were
                    solving. These personas are not specific individuals; they
                    consist of a collection of views from different people from
                    different places.
                  </p>
                  <div className="py-10 flex flex-col justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[5])}
                          alt="Final Screens Image"
                          className="pb-6"
                        />
                        <img
                          src={getImgUrl(project.images[6])}
                          alt="Final Screens Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                    User Journey
                  </h2>
                  <p className=" pt-8">
                    Based on the persona insights, I mapped out the steps a
                    potential user will take to complete their tasks and
                    visualised their feelings and emotions as they completed
                    these tasks. This was done to help create an obstacle-free
                    path for users and determine any pain points or
                    opportunities. This enabled me to define further the
                    product's scope, functional requirements, and features. I
                    used cute little cloud faces to depict their emotions.
                  </p>
                  <div className="py-10 flex flex-col justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[7])}
                          alt="Final Screens Image"
                          className="pb-6"
                        />
                        <img
                          src={getImgUrl(project.images[8])}
                          alt="Final Screens Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                    Takeaways
                  </h2>
                  <p className=" pt-8">
                    Designing a seamless experience that users are accustomed to
                    and allowing them to exercise significant control over their
                    actions encourages them to finish tasks quickly and
                    efficiently with little to no pain points.
                  </p>
                  <p className=" pt-8">
                    Even though the user may get confused during their journey,
                    it boosts the general experience of the product. Designing
                    an experience people are overly familiar with makes the
                    experience monotonous.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="architecture" className="tab-content-appear">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                    Design Process
                  </h2>
                  <p className=" pt-8">
                    As part of my design process, I focused on creating an
                    information architecture by carefully piecing together most
                    of the components of each screen to identify what users will
                    see and interact with at every step of their journey when
                    using the product. This approach provided a comprehensive
                    view of the product's experience and helped (through
                    iterations) minimise the number of screens users had to
                    navigate to achieve their goals. Below is an overview of the
                    information architecture I developed, which serves as the
                    foundation for the website's final design.
                  </p>
                  <div className="py-10 flex flex-col justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[9])}
                          alt="Final Screens Image"
                          className="pb-6"
                        />
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="flow" className="tab-content-appear">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                    Design Process
                  </h2>
                  <ol className="desired pt-8">
                    <li className=" mb-6">
                      All actions are in rounded rectangles.
                    </li>
                    <li className=" mb-6">All screens are in rectangles. </li>
                    <li className=" mb-6">All decisions are in diamonds.</li>
                    <li className=" mb-6">
                      Each shape is connected by an arrow.
                    </li>
                  </ol>
                  <div className="py-10 flex flex-col justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[10])}
                          alt="Final Screens Image"
                          className="pb-6"
                        />
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="wireframing" className="tab-content-appear">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                    Design Process
                  </h2>
                  <p className=" pt-8">
                    Based on the business and user goals, I swiftly put down all
                    my ideas and joined the site's information architecture to
                    visualise the potential of the product's interface using
                    Figma. I then developed the initial low-fi wireframes into
                    what I like to call "My First Draft," which consisted of my
                    early ideas and colour schemes. To perfect the design, I
                    reviewed the draft repeatedly, making numerous iterations
                    until I was satisfied with the final work. For the final
                    draft of Thenga, the most significant change was the colour
                    scheme. Through this iterative process, I produced a design
                    that suited the product's requirements.
                  </p>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <Tabs defaultValue="website" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 h-16 mb-14">
                      <TabsTrigger value="website" className="py-4">
                        Website Wireframes
                      </TabsTrigger>
                      <TabsTrigger value="extension" className="py-4">
                        Extension Wireframes
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="website">
                      <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto flex justify-center items-center">
                        <div className="py-10">
                          {project.images && project.images.length > 0 && (
                            <>
                              <img
                                src={getImgUrl(project.images[11])}
                                alt="Final Screens Image"
                                className="pb-6"
                              />
                            </>
                          )}
                        </div>
                        <div className="w-1/3 pb-60">
                          <h2 className="font-avant-garde text-3xl font-medium leading-10">
                            Lo-fi💡
                          </h2>
                          <p className=" pt-8">
                            These Lo-fi prototypes are just quick and simple
                            versions of the final product. They were used to
                            explore the possibilities of core functionalities,
                            user flows and UI placements.
                          </p>
                        </div>
                      </div>
                      <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto flex justify-center items-center">
                        <div className="py-10">
                          {project.images && project.images.length > 0 && (
                            <>
                              <img
                                src={getImgUrl(project.images[12])}
                                alt="Final Screens Image"
                                className="pb-6"
                              />
                            </>
                          )}
                        </div>
                        <div className="w-1/3 pb-60">
                          <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                            Visual ideation💡
                          </h2>
                          <p className=" pt-8">
                            These Hi-fi prototypes are also quick and simple
                            visual representations of my ideas. I focused more
                            on exploring a variety of UI elements and placements
                            to develop a cohesive and robust interface that
                            meets user needs. AKA, my first draft.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="extension">
                      <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                        <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                          Lo-fi💡
                        </h2>
                        <p className=" pt-8">
                          These Lo-fi prototypes are just quick and simple
                          versions of the final product. They were used to
                          explore the possibilities of core functionalities,
                          user flows and UI placements.
                        </p>
                        <div className="py-10 flex flex-col justify-center">
                          {project.images && project.images.length > 0 && (
                            <>
                              <img
                                src={getImgUrl(project.images[13])}
                                alt="Final Screens Image"
                                className="pb-6"
                              />
                            </>
                          )}
                        </div>
                      </div>
                      <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                        <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                          Visual ideation💡
                        </h2>
                        <p className=" pt-8">
                          These Hi-fi prototypes are also quick and simple
                          visual representations of my ideas. I focused more on
                          exploring a variety of UI elements and placements to
                          develop a cohesive and robust interface that meets
                          user needs. AKA, my first draft.
                        </p>
                        <div className="py-10 flex flex-col justify-center">
                          {project.images && project.images.length > 0 && (
                            <>
                              <img
                                src={getImgUrl(project.images[14])}
                                alt="Final Screens Image"
                                className="pb-6"
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>
              <TabsContent value="style" className="tab-content-appear">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className=" font-avant-garde text-3xl font-medium leading-10">
                    Style Guide
                  </h2>
                  <p className=" pt-8">
                    My goal for the product's interface was to achieve a clean
                    and polished end design using warm, appealing colours,
                    vibrant components and illustrations, all working together
                    seamlessly to deliver an ideal interface. I wanted to drive
                    users to view information and complete tasks while
                    maintaining consistency throughout the design. I created a
                    comprehensive style guide encompassing the colour palette,
                    typography, button states, iconography, and more. This guide
                    is a reference point to ensure that the design remains
                    consistent and coherent.
                  </p>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <Tabs defaultValue="website" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 h-16 mb-14">
                      <TabsTrigger value="website" className="py-4">
                        Website Style Guide
                      </TabsTrigger>
                      <TabsTrigger value="extension" className="py-4">
                        Extension Style Guide
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="website">
                      <div className="py-10 flex flex-col justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[15])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                      <div className="py-10 flex flex-col justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[16])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                      <div className="py-10 flex flex-col justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[17])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                      <div className="py-10 flex flex-col justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[18])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                      <div className="py-10 flex flex-col justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[19])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="extension">
                      <div className="py-10 flex flex-col justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[20])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                      <div className="py-7 flex justify-center items-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <div>
                              <img
                                src={getImgUrl(project.images[21])}
                                alt="Final Screens Image"
                              />
                            </div>
                            <div>
                              <img
                                src={getImgUrl(project.images[22])}
                                alt="Final Screens Image"
                              />
                            </div>
                          </>
                        )}
                      </div>
                      <div className="py-10 flex flex-col justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[23])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                      <div className="py-10 flex flex-col max-w-2xl justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[24])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                      <div className="py-10 flex flex-col justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[25])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                      <div className="py-10 flex flex-col justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[26])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                      <div className="py-10 flex flex-col max-w-xl justify-center">
                        {project.images && project.images.length > 0 && (
                          <>
                            <img
                              src={getImgUrl(project.images[27])}
                              alt="Final Screens Image"
                              className="pb-6"
                            />
                          </>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
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

export default Thenga;
