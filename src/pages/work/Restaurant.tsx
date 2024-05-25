import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getImgUrl } from "@/data/functions";
import MiniFooter from "../layout/MiniFooter";
import React from "react";
import ProjectNavigation from "@/components/ProjectNavigation";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
                  <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14 flex">
                    <div>
                      <h2 className="font-avant-garde text-3xl font-medium leading-10">
                        Problem
                      </h2>
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

                    <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                      <li className="mb-6">
                        First things first, I had to familiarize myself with the
                        main product and ground myself by understanding the
                        current state in which it was in. It's an inventory
                        management system, and a lot was going on, but I do love
                        a challenge, so I applied more grease to my elbow.
                      </li>
                      <li className="mb-6">
                        It is also important to note that this is an already
                        existing product with established ui/ux documents on
                        research and personas that I had to understand and work
                        with as well.
                      </li>
                      <li className="mb-6">
                        The first challenge I faced was understanding the
                        project requirements and how to apply them to my design.
                        A consolidated list of project requirements consisting
                        of technological limitations and expectations was sent
                        to me by the project lead. My job was to transform a
                        list of ideas and specifications into effective
                        interaction designs—sounds fun, right?
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto pt-8 pb-14 flex">
                  <div>
                    <h2 className="font-avant-garde text-3xl font-medium leading-10">
                      Key insights derived from interviews
                    </h2>

                    <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                      <li className="mb-6">
                        First things first, I had to familiarize myself with the
                        main product and ground myself by understanding the
                        current state in which it was in. It's an inventory
                        management system, and a lot was going on, but I do love
                        a challenge, so I applied more grease to my elbow.
                      </li>
                      <li className="mb-6">
                        It is also important to note that this is an already
                        existing product with established ui/ux documents on
                        research and personas that I had to understand and work
                        with as well.
                      </li>
                      <li className="mb-6">
                        The first challenge I faced was understanding the
                        project requirements and how to apply them to my design.
                        A consolidated list of project requirements consisting
                        of technological limitations and expectations was sent
                        to me by the project lead. My job was to transform a
                        list of ideas and specifications into effective
                        interaction designs—sounds fun, right?
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
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Feedback Analysis
                  </h2>
                  <p className="pt-8">
                    After gathering all of the data from the research, i
                    organised my findings by using coloured sticky notes to
                    observe similarities and recurring patterns.
                  </p>
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
                </div>
                <div>Image</div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto pt-8 pb-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Personas
                  </h2>
                  <p className="pt-8">
                    With the data collected from the interviews and survey, I
                    created three personas whose responses represent that of a
                    larger group of users.
                  </p>
                </div>
                <div>Image</div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Pain Points
                  </h2>
                  <div>cards</div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Problem Statements
                  </h2>
                  <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
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
                  </ul>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    User Stories
                  </h2>
                  <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
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
                  </ul>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Journey Map
                  </h2>
                  <p className="pt-8">
                    I created a user journey map and flow to visualize the
                    user’s experience using the app.
                  </p>
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
                  <div>Image</div>

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
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    User flow
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
                      All actions are in rounded rectangles.
                    </li>
                    <li className="mb-6"> All screens are in rectangles.</li>
                    <li className="mb-6">All decisions are in diamonds.</li>
                    <li className="mb-6">
                      Each shape is connected by an arrow.
                    </li>
                  </ul>
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
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
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
                  <div>Image</div>
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
                  <div>Image</div>
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
                    Color palette
                  </h2>
                  <div className="py-10 flex flex-col justify-center">
                    <div className="flex pb-4">
                      {project.colorPalette &&
                        project.colorPalette.topPalette.map((color, index) => (
                          <Card
                            key={index}
                            className={`h-[165px] w-[${color.width}] text-white mr-3 relative`}
                            style={{
                              background: color.gradient
                                ? color.gradient
                                : color.hex,
                              color: color.textColor
                                ? color.textColor
                                : "#FFFFFF",
                            }}
                          >
                            <p className="absolute top-4 right-5 text-xs font-bold">
                              {color.title}
                            </p>
                            <p className="absolute bottom-1.5 left-2.5 text-xs">
                              {color.gradient ? "Gradient" : "Hex"}:{" "}
                              {color.gradient ? "" : color.hex}
                            </p>
                          </Card>
                        ))}
                    </div>
                    <div className="flex">
                      {project.colorPalette &&
                        project.colorPalette.bottomPalette.map(
                          (color, index) => (
                            <Card
                              key={index}
                              className={`h-[99px] w-[${color.width}] text-white mr-3 relative`}
                              style={{
                                background: color.gradient
                                  ? color.gradient
                                  : color.hex,
                                color: color.textColor
                                  ? color.textColor
                                  : "#FFFFFF",
                              }}
                            >
                              <p className="absolute top-4 right-5 text-xs font-bold">
                                {color.title}
                              </p>
                              <p className="absolute bottom-1.5 left-2.5 text-xs">
                                {color.gradient ? "Gradient" : "Hex"}:{" "}
                                {color.gradient ? "" : color.hex}
                              </p>
                            </Card>
                          )
                        )}
                    </div>
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Logo
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
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
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
                <div className="text-container text-8xl">
                  {project.typography &&
                    project.typography.map((item, index) => (
                      <div
                        key={index}
                        className={`text-item ${
                          index % 2 === 0 ? "avant-garde-extralight" : ""
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <p className="mb-5">Hierarchy</p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="">Text Type</TableHead>
                        <TableHead>Weight</TableHead>
                        <TableHead>Font Size</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {project.hierarchy &&
                        project.hierarchy.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.textType}</TableCell>
                            <TableCell>{item.weight}</TableCell>
                            <TableCell>{item.fontSize}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
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
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
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
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
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
                <div className="px-16 xl2:w-[1240px] w-[1100px] flex mx-auto justify-evenly py-14">
                  <div>
                    <h2 className="font-avant-garde text-3xl font-medium leading-10">
                      Navigations
                    </h2>
                    <div className="py-10 flex justify-center">
                      {project.images && project.images.length > 0 && (
                        <>
                          <img
                            src={getImgUrl(project.images[14])}
                            alt="Buttons"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-avant-garde text-base font-medium leading-10">
                      Radio buttons
                    </h2>
                    <div className="py-4 flex justify-center">
                      {project.images && project.images.length > 0 && (
                        <>
                          <img
                            src={getImgUrl(project.images[15])}
                            alt="Buttons"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="px-16 xl2:w-[1240px] w-[1100px] mx-auto py-14">
                  <h2 className="font-avant-garde text-3xl font-medium leading-10">
                    Illustrations
                  </h2>
                  <div className="py-10 flex justify-center">
                    {project.images && project.images.length > 0 && (
                      <>
                        <img
                          src={getImgUrl(project.images[16])}
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

export default Restaurant;
