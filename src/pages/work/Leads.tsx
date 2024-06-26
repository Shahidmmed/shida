import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getImgUrl } from "@/data/functions";
import { data } from "@/data/info";
import { Link } from "react-router-dom";
import MiniFooter from "../layout/MiniFooter";
import ProjectNavigation from "@/components/ProjectNavigation";
import useAppearOnScroll from "@/useAppearOnScroll";
import React from "react";

const Leads = () => {
  useAppearOnScroll([".appear-on-scroll"]);

  const project = data.find(
    (item) => item.type === "report" && item.id === "leads"
  );

  return (
    <div>
      {project ? (
        <>
          <section className="mx-auto">
            <div className="p-12 max-sm:p-6 flex max-sm:flex-col items-center justify-center bg-slate-100 pt-20">
              <img
                src={getImgUrl(project.image)}
                alt={project.previewText}
                className="max-h-[300px] max-w-[400px]"
              />
              <div className="ml-8 max-sm:w-full max-sm:ml-1">
                <p className="avant-garde-bold font-medium text-sm leading-5 tracking-wider text-left mb-2 pb-2">
                  {project.designTypes.map((type, index) => (
                    <React.Fragment key={index}>
                      {type}{" "}
                      {index !== project.designTypes.length - 1 && <> ♦ </>}
                    </React.Fragment>
                  ))}
                </p>
                <h2 className="font-avant-garde font-semibold tracking-wider max-sm:text-3xl text-4xl text-left mb-2 text-nowrap">
                  {project.name}
                </h2>
                <p className="mb-2 py-4 font-avant-garde text-sm leading-6 tracking-wider max-w-[550px]">
                  {project.brief}
                </p>
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Introduction
              </h2>
              <p className="appear-on-scroll py-8">
                Leads is a software solution designed to help businesses
                organise and manage their sales leads throughout the customer
                acquisition process. It typically includes tools for capturing,
                storing and tracking interactions with potential customers and
                analysing the data received to help sales and marketing teams
                make informed decisions. The system allows businesses to
                streamline their sales processes, increase efficiency, improve
                lead conversion rates, and ultimately boost customer relations.
              </p>
              <div className="mt-2">
                {project.prototype ? (
                  <Link
                    to={project.prototype}
                    className="rounded-none appear-on-scroll bg-black px-12 py-4 border mt-6 text-white"
                  >
                    View Prototype
                  </Link>
                ) : (
                  <span className="text-lg font-medium"></span>
                )}
              </div>
            </div>
            <div className="bg-black flex max-sm:w-full py-20 text-white justify-evenly">
              <div className="appear-on-scroll">
                <p className="pb-2">Timeline</p>
                <small>4 weeks (80 hours)</small>
              </div>
              <div className="appear-on-scroll">
                <p className="pb-2">My Role</p>
                <small>UI/UX Designer</small>
              </div>
              <div className="appear-on-scroll">
                <p className="pb-2">Tools</p>
                <small>Figma</small>
              </div>
              <div className="appear-on-scroll">
                <p className="pb-2">Tasks</p>
                <small>UX Design, Usability Testing</small>
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Summary
              </h2>
              <p className="appear-on-scroll py-8">
                I conducted an informal moderated usability study with 6
                participants from 18th April to 28th April 2023. This test aimed
                to determine if users can complete the core tasks within the
                product efficiently and whether or not they understand the
                interface and its processes. Each session lasted approximately
                5-7 minutes. Participants were given the same tasks to complete
                and questions to answer. All participants generally found the
                product user-friendly, easy to navigate and straightforward.
              </p>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              {project.images && project.images.length > 0 && (
                <>
                  <img
                    src={getImgUrl(project.images[0])}
                    alt="Summary Image"
                    className="appear-on-scroll"
                  />
                  <img
                    src={getImgUrl(project.images[1])}
                    alt="Summary Image"
                    className="appear-on-scroll"
                  />
                </>
              )}
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Methodology
              </h2>
              <ol className="desired pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  A moderated usability study with a total of 6 participants
                  with backgrounds in business, sales and marketing.
                  Participants were asked to perform tasks in a high-fidelity
                  prototype. Each session lasted between 5-7 minutes.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  During the session, participants completed a list of tasks
                  independently but were guided if needed. Questions were asked
                  after every task was performed. In the end, a usability scale
                  questionnaire of 10 questions was sent to participants to
                  complete.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Participants who could not be on a call completed a list of
                  tasks independently with no guide. However, they were required
                  to answer questions into detail after every task was performed
                  through a survey. In the end, a usability scale questionnaire
                  of 10 questions was sent to participants to complete.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  The usability scale questionnaire was used to measure the
                  perceived usability of the product. Participants were asked to
                  score ten items with one of five responses that range from
                  Strongly Agree to Strongly Disagree. Participants were assured
                  that there were no right or wrong answers and that every
                  feedback counts.
                </li>
              </ol>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Key performance indicators (KPIs)
              </h2>
              <p className="appear-on-scroll py-8">
                I chose to use the System Usability Scale and Conversion Rate
                KPIs to translate the success factors of my usability test into
                actual figures because they're close to my research goals. I
                used a standardised questionnaire to measure my product's
                perceived usability.
              </p>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Script
              </h2>
              <p className="appear-on-scroll pt-8">
                I prepared a short and simple script which contained a set of
                pre-defined tasks participants followed. Participants were not
                informed on how many tasks they were completing because I didn't
                want to overwhelm or underwhelm them before the test started.
                Participants completed their tasks independently, and I only
                spoke when help was needed or when it was time to give a new
                task during the test.
              </p>
              <ol className="desired pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Conversion Rate - Participants that completed desired actions
                  during the test.
                </li>
                <li className="appear-on-scroll mb-6 pb-4 list-lower-alpha">
                  System Usability Scale- How easy the app is for the user
                  through the use of a questionnaire.
                </li>
              </ol>
              <div className="mt-4">
                <Link
                  to="#"
                  className="rounded-none appear-on-scroll bg-black px-12 py-4 border mt-6 text-white"
                >
                  View Script
                </Link>
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Research Questions
              </h2>
              <p className="appear-on-scroll pt-8">
                To sum up the data collection, I asked a few questions at the
                end of the session to gather information on the product's
                overall effectiveness, observations and commentary in relation
                to the goals of each task. I allowed participants to speak their
                minds and express themselves freely.
              </p>
              <ol className="desired pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  By your first glance, did you get what the product offers?
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  How do you feel about the overall experience?
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Did you reach any of the goals assigned to you?
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Did you face any challenges? Do you feel like it was difficult
                  to use and navigate?
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  What other comments do you have? Do you have any suggestions
                  for improvement?
                </li>
              </ol>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Participants
              </h2>
              <ol className="desired pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  All participants were business, marketing and sales
                  professionals between the ages of 22-40 with a relatively even
                  distribution of only two genders.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Six participants were scheduled for the test and they all
                  participated and completed the test successfully.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Four participants were involved in a moderated virtual call
                  testing however two of them completed a list of tasks
                  independently with no guide and were required to answer
                  questions in detail after every task was performed. The last
                  two participated in a face-to-face test.
                </li>
              </ol>
              <div className="appear-on-scroll flex justify-evenly">
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <p>Leslie</p>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <p>Nana Yaw</p>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <p>Sandra</p>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <p>Victoria</p>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <p>Maame Ansah</p>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <p>Nicholas</p>
                </div>
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Card Sorting
              </h2>
              <p className="appear-on-scroll py-8">
                After the test, i compiled and summarised the data collected
                using the card sorting method to group my insights and build
                effectively toward next steps.
              </p>
              <div className="pt-8">
                <p className="appear-on-scroll font-bold">Challenges</p>
                <div className="appear-on-scroll grid flex-1 items-start gap-4 py-4 sm:py-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                  {project.challenges?.map((challenge, index) => (
                    <>
                      <Card
                        key={index}
                        className="w-[310px] h-[150px] bg-blue-200 rounded-none flex flex-col items-center justify-center"
                      >
                        <CardTitle className="text-lg p-4">
                          {challenge.name}
                        </CardTitle>
                        <p className="text-center max-w-[300px] text-sm">
                          {challenge.challenge}
                        </p>
                      </Card>
                    </>
                  ))}
                </div>
                <div className="pt-8">
                  <p className="appear-on-scroll font-bold">Comments</p>
                  <div className="appear-on-scroll grid flex-1 items-start gap-4 py-4 sm:py-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    {project.comments?.map((comment, index) => (
                      <>
                        <Card
                          key={index}
                          className="w-[310px] h-[150px] bg-blue-500 rounded-none flex flex-col items-center justify-center"
                        >
                          <CardTitle className="text-lg p-4">
                            {comment.name}
                          </CardTitle>
                          <p className="text-center max-w-[300px] text-sm">
                            {comment.comment}
                          </p>
                        </Card>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <p className="appear-on-scroll font-bold">Recommendations</p>
                <div className="appear-on-scroll grid flex-1 items-start gap-4 py-4 sm:py-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                  {project.recommendations?.map((recommendation, index) => (
                    <>
                      <Card
                        key={index}
                        className="w-[310px] h-[150px] bg-emerald-500 rounded-none flex flex-col items-center justify-center"
                      >
                        <CardTitle className="text-lg p-4">
                          {recommendation.name}
                        </CardTitle>
                        <p className="text-center max-w-[300px] text-sm">
                          {recommendation.recommendation}
                        </p>
                      </Card>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Insights
              </h2>
              <p className="appear-on-scroll pt-8 font-avant-garde">
                The test identified only a few minor problems, including:
              </p>
              <ol className="desired pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Modals- the idea of modals seemed great but aren't going to be
                  practical in real time.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Colour choices- some colours were hard to see.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Usability- some buttons weren't working.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Responsiveness- some participants wanted the prototype to be
                  more responsive.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Representation- provision of more than two avatars for
                  representation.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Inclusivity- some users wondered how easy the product would be
                  for people who are new to CRM’S
                </li>
              </ol>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Implementing Feedback
              </h2>
              <p className="appear-on-scroll pt-8 font-avant-garde">
                Most of the feedback and recommendations received were compiled
                and grouped by severity. The data with the highest severity were
                implemented immediately because they focused more on improving
                the product's user experience and what does not work well for
                users.
              </p>
              <div className="pt-6">
                {project.images && project.images.length > 0 && (
                  <>
                    <img
                      src={getImgUrl(project.images[2])}
                      alt="Feedback Image"
                      className="appear-on-scroll"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Interface before the usability test.
              </h2>
              <div className="pt-6">
                {project.images && project.images.length > 0 && (
                  <>
                    <img
                      src={getImgUrl(project.images[3])}
                      alt="Feedback Image"
                      className="appear-on-scroll"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                This is the interface after the usability test. The modal was
                changed into a page
              </h2>
              <div className="pt-6">
                {project.images && project.images.length > 0 && (
                  <>
                    <img
                      src={getImgUrl(project.images[4])}
                      alt="Feedback Image"
                      className="appear-on-scroll"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll font-avant-garde text-3xl font-medium leading-10">
                Conclusion
              </h2>
              <ol className="desired pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Based on the feedback from the usability test and the SUS
                  data, it can be concluded that the Leads management system I
                  designed has a logical user flow with an overall good user
                  interface. The product was comprehensible and usable to most
                  participants, with a high conversion rate. However, some areas
                  needed improvement, particularly with the contacts and leads
                  features and some user interface components.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Additionally, some users requested a more responsive prototype
                  which I will continue to work on to make this prototype and
                  future prototypes easier to use. The study also revealed that
                  users valued the categorisations of leads and the colours used
                  to differentiate items.
                </li>
                <li className="appear-on-scroll mb-6 list-lower-alpha">
                  Overall, the leads management system has a solid foundation in
                  terms of usability, but there is room for improvement (on my
                  part) regarding the prototype's responsiveness to enhance the
                  user experience during a usability test. The feedback gathered
                  from the usability study was used to inform the current design
                  iterations and improvements to the system.
                </li>
              </ol>
            </div>
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

export default Leads;
