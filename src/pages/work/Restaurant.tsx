import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getImgUrl } from "@/data/functions";
import MiniFooter from "../layout/MiniFooter";
import React from "react";
import ProjectNavigation from "@/components/ProjectNavigation";
import { data } from "@/data/info";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const project = data.find(
    (item) => item.type === "caseStudy" && item.id === "restaurant"
  );

  return (
    <div className="content-page pb-6">
      {project ? (
        <>
          <section className="mx-auto">
            <div className="p-16 flex items-center justify-start bg-slate-100 pt-20">
              <img
                src={getImgUrl(project.image)}
                alt={project.previewText}
                className="max-h-[300px] max-w-[400px] ml-10"
              />
              <div className="ml-8">
                <p className="avant-garde-bold font-medium text-sm leading-5 tracking-wider text-left mb-2 pb-2">
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
                <p className="mb-2 py-4 font-avant-garde text-sm leading-6 tracking-wider max-w-[550px]">
                  {project.brief}
                </p>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="sticky top-0 z-10 grid w-full grid-cols-6 h-16 px-24 mb-14">
                <TabsTrigger value="overview" className="py-4">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="empathising" className="py-4">
                  Empathising
                </TabsTrigger>
                <TabsTrigger value="defining" className="py-4">
                  Defining
                </TabsTrigger>
                <TabsTrigger value="ideation" className="py-4">
                  Ideation
                </TabsTrigger>
                <TabsTrigger value="design" className="py-4">
                  Design
                </TabsTrigger>
                <TabsTrigger value="testing" className="py-4">
                  Testing
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Introduction
                  </h2>
                  <p className="py-8">
                    Leads is a software solution designed to help businesses
                    organise and manage their sales leads throughout the
                    customer acquisition process. It typically includes tools
                    for capturing, storing and tracking interactions with
                    potential customers and analysing the data received to help
                    sales and marketing teams make informed decisions. The
                    system allows businesses to streamline their sales
                    processes, increase efficiency, improve lead conversion
                    rates, and ultimately boost customer relations.
                  </p>
                  <div className="mt-2">
                    {project.prototype ? (
                      <Link
                        to={project.prototype}
                        className="rounded-none bg-black px-12 py-4 border mt-6 text-white"
                      >
                        View Prototype
                      </Link>
                    ) : (
                      <span className="text-lg font-medium"></span>
                    )}
                  </div>
                  <div className="xl2:w-[1240px] w-[1100px] mx-auto py-16 flex">
                    <div>
                      <h2 className="font-avant-garde text-3xl font-medium leading-10">
                        Problem
                      </h2>
                      {project.images && project.images.length > 0 && (
                        <div className="py-4">
                          <img
                            src={getImgUrl(project.images[0])}
                            alt="Low-fi Wireframes Image"
                          />
                        </div>
                      )}
                      <p className="pt-8">
                        People find accessing valid Information on restaurants
                        and booking/reserving tables difficult. They are also
                        faced with poor/unreliable user experiences when using
                        online platforms.
                      </p>
                    </div>
                    <div>
                      <h2 className="font-avant-garde text-3xl font-medium leading-10">
                        Goal
                      </h2>
                      {project.images && project.images.length > 0 && (
                        <div className="py-4">
                          <img
                            src={getImgUrl(project.images[1])}
                            alt="Low-fi Wireframes Image"
                          />
                        </div>
                      )}
                      <p className="pt-8">
                        The goal is to design a user-friendly platfrom that is
                        simple to use but contains enough information for the
                        user to make reservations and pre-order meals.
                      </p>
                    </div>
                  </div>
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
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Design Process
                  </h2>
                  <p className="pt-8">
                    This was one of my first projects and I was very excited to
                    use my creative problem-solving skills to tackle user
                    challenges, and prioritise their needs to make the product
                    very awesome!
                  </p>
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[2])}
                        alt="Low-fi Wireframes Image"
                      />
                    </>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="empathising">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto pt-8 pb-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Qualitative Research
                  </h2>
                  <p className="pt-8">
                    I interviewed seven potential users with different
                    backgrounds to talk about restaurants and their booking
                    processes, what challenges they faced and what they would
                    like to see differently. With their permission, I took notes
                    and recorded all the answers given during the interviews.
                    This helped me analyze the feedback I received and gained an
                    extensive understanding of customers and what they go
                    through with restaurants and their booking systems.
                  </p>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto pt-8 pb-14 flex">
                  <div>
                    <h2 className="font-avant-garde text-3xl font-medium leading-10">
                      Examples of questions I asked
                    </h2>

                    <ul className=" pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                      <li className="mb-6">How old are you?</li>
                      <li className="mb-6">
                        How often do you eat at restaurants?
                      </li>
                      <li className="mb-6">
                        Do you often make reservations before heading to a
                        restaurant?
                      </li>
                      <li className="mb-6">
                        Have you faced any challenges so far?
                      </li>
                    </ul>
                  </div>
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[3])}
                        alt="Low-fi Wireframes Image"
                      />
                    </>
                  )}
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto pt-8 pb-14 flex">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[4])}
                        alt="Low-fi Wireframes Image"
                      />
                    </>
                  )}
                  <div>
                    <h2 className="font-avant-garde text-3xl font-medium leading-10">
                      Key insights derived from interviews
                    </h2>
                    <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                      <li className="mb-6">
                        People dont make reservations because they think it
                        doesn't matter.
                      </li>
                      <li className="mb-6">
                        People acquire restaurant information from blogs and
                        restaurant websites.
                      </li>
                      <li className="mb-6">
                        People book tables and on arrival, they are told the
                        table was never booked.
                      </li>
                      <li className="mb-6">
                        The process of calling restaurants gets annoying
                        sometimes
                      </li>
                      <li className="mb-6">
                        Everything (accessing information, booking, pre-ordering
                        etc.) occurs on the web or by calling
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Quantitative Research
                  </h2>
                  <p className="pt-8">
                    I did an online survey using Google Forms to gain insights
                    from more people within the short time I had. I also used
                    this opportunity to observe patterns and similarities
                    between the responses given during interviews and the
                    survey. I received a total of 38 responses which aided in
                    the establishment of pain points. The following were some of
                    the findings received:
                  </p>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <div className="pt-8">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[5])}
                          alt="Design Process Image"
                        />
                      </>
                    )}
                  </div>
                  <div className="pt-8">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[6])}
                          alt="Design Process Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Feedback Analysis
                  </h2>
                  <p className="pt-8">
                    After gathering all of the data from the research, i
                    organised my findings by using coloured sticky notes to
                    observe similarities and recurring patterns.
                  </p>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[7])}
                        alt="Scene Image"
                      />
                    </>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="defining">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto pt-8 pb-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Empathy Maps
                  </h2>
                  <p className="pt-8">
                    I created aggregated empathy maps to understand users
                    further and to illustrate their thoughts, motivations,
                    emotions, and behaviours. This enabled me to create possible
                    solutions and user stories that helped me easily determine
                    how the platform could meet their needs.
                  </p>
                  <div className="flex justify-center items-center pt-10">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[8])}
                          alt="Low-fi Wireframes Image"
                        />
                      </>
                    )}
                  </div>{" "}
                  <div className="flex justify-center flex-col items-center pt-10">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[9])}
                          alt="Low-fi Wireframes Image"
                        />
                        <img
                          src={getImgUrl(project.images[10])}
                          alt="Low-fi Wireframes Image"
                          className="pt-8"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto pt-8 pb-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Personas
                  </h2>
                  <p className="pt-8">
                    With the data collected from the interviews and survey, I
                    created three personas whose responses represent that of a
                    larger group of users.
                  </p>
                  <div className="flex justify-center items-center pt-10">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[11])}
                          alt="Low-fi Wireframes Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Pain Points
                  </h2>
                  <div>
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[12])}
                          alt="Low-fi Wireframes Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Problem Statements
                  </h2>
                  <ol className="desired pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                    <li className="mb-6">
                      Sasha is a student who needs a way to access adequate
                      information on restaurants and make reservations
                      seamlessly because she finds calling the restaurants
                      irritating.
                    </li>
                    <li className="mb-6">
                      Freedom is a hardworking entrepreneur who needs a way to
                      make reservations without using websites or web apps
                      because they are slow and unresponsive.
                    </li>
                    <li className="mb-6">
                      Sarah is a working mother who needs a reliable platform to
                      access menus easily because her family prefers to know
                      what is on the menu before heading to the restaurant.
                    </li>
                  </ol>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    User Stories
                  </h2>
                  <ol className="desired pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                    <li className="mb-6">
                      As a student who loves to spend time with family and
                      friends, I want a platform that will allow me to make
                      table reservations easily, So that I won't have to keep
                      calling a restaurant when I want to make a reservation.
                    </li>
                    <li className="mb-6">
                      As an Entrepreneur who loves to work, I want a product
                      that sends confirmation texts, emails or notifications
                      after making a reservation; So I can be sure that my
                      booking has been recorded.
                    </li>
                    <li className="mb-6">
                      As a working mother who loves to take her family on dates,
                      I want a platform that provides all the necessary details
                      about the restaurant, especially their menus, So that my
                      family and I know what we will get before we get there.
                    </li>
                  </ol>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Journey Map
                  </h2>
                  <p className="pt-8">
                    I created a user journey map and flow to visualize the
                    user’s experience using the app.
                  </p>
                  <div className="flex justify-center flex-col items-center pt-10">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[13])}
                          alt="Low-fi Wireframes Image"
                        />
                        <img
                          src={getImgUrl(project.images[14])}
                          alt="Low-fi Wireframes Image"
                          className="pt-8"
                        />
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="ideation">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Information Architecture
                  </h2>
                  <p className="pt-8">
                    I created a structure for the Resto mobile app using an
                    information architecture by laying out each individual
                    screen to identify what users will need and can easily find.
                  </p>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[15])}
                          alt="Sketch Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    User flow
                  </h2>
                  <ol className="desired pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                    <li className="mb-6">
                      After understanding and defining my project objectives, I
                      had to determine how users would see the product
                      (visuals), how users may act within the product
                      (architecture and flows) and how users may perceive and
                      engage with my design (user journeys).
                    </li>
                    <li className="mb-6">
                      All actions are in rounded rectangles.
                    </li>
                    <li className="mb-6"> All screens are in rectangles.</li>
                    <li className="mb-6">All decisions are in diamonds.</li>
                    <li className="mb-6">
                      Each shape is connected by an arrow.
                    </li>
                  </ol>
                </div>
                <div className="py-10 flex justify-center">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[16])}
                        alt="Information Architecture Image"
                      />
                    </>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="design">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Low Fidelity Wireframes
                  </h2>
                  <p className="pt-8">
                    I created low-fidelity wireframes using Figma, so I could
                    swiftly join the site’s information architecture to display
                    particular types of information on the user interface.
                  </p>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[17])}
                          alt="Information Architecture Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    High Fidelity Wireframes
                  </h2>
                  <p className="pt-8">
                    After creating low-fidelity prototypes and establishing the
                    main ideas of the mobile app, I picked the best design
                    patterns and created High-Fidelity wireframes. These
                    wireframes represent a detailed representation of the Resto
                    user interface, which I will use to conduct a research
                    study.
                  </p>
                </div>
                <div className="py-10 flex justify-center">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[18])}
                        alt="Final Screens Image"
                      />
                    </>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="testing">
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Usability Testing
                  </h2>
                  <p className="pt-8">
                    I performed both moderated and unmoderated usability study
                    which included 5 participants with different backgrounds.
                    Before going ahead with the final designs, I needed to
                    figure out if users could easily go through the main user
                    experience of finding, reserving and pre-ordering on the
                    app. I also wanted to understand what specific challenges
                    users might face during these processes and how I could fix
                    them to suit their needs.
                  </p>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Research Goal
                  </h2>
                  <p className="pt-8">
                    The goal of this research is to figure out if users can
                    complete the core tasks within the app efficiently and
                    whether or not they understand the interface and its
                    processes
                  </p>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Research Questions
                  </h2>
                  <div className="flex pt-10">
                    <ul>
                      <li>
                        By the first glance of the homepage, can you get the
                        "big picture" of what is offered on the app?
                      </li>
                      <li>
                        How do you feel about the overall experience of the app?
                      </li>
                      <li>Did you reach your goal?</li>
                      <li>Did you face any challenges?</li>
                      <li> What other comments do you have</li>
                    </ul>
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[19])}
                          alt="Final Screens Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Participants
                  </h2>
                  <p className="pt-8">
                    With a total of 5 participants ,Three participants will
                    complete the tasks independently, and two will be guided and
                    given a questionnaire on their experience. Who are they?
                  </p>
                  <ul className="pt-8">
                    <li>
                      Participants are people who often go to restaurants to eat
                    </li>
                    <li>Participants are people between the ages of 18-45</li>
                    <li>
                      Participants include a relatively even distribution of
                      only two genders.
                    </li>
                    <li>
                      Participants include people with different social and
                      economic backgrounds with different abilities.
                    </li>
                  </ul>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[20])}
                          alt="Final Screens Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Affinity Mapping
                  </h2>
                  <p className="pt-8">
                    Based on my findings, I created an affinity diagram and
                    generated actionable insights from the data received
                  </p>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[21])}
                          alt="Final Screens Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[22])}
                        alt="Final Screens Image"
                      />
                    </>
                  )}
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Implementing Feedback
                  </h2>
                  <p className="pt-8">
                    The feedback from the Usability test were considered and
                    implemented.
                  </p>
                  <div className="py-10">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[23])}
                          alt="Final Screens Image"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10 pb-8">
                    Next Steps
                  </h2>
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[24])}
                        alt="Final Screens Image"
                      />
                    </>
                  )}
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

export default Restaurant;
