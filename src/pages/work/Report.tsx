import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getImgUrl } from "@/data/functions";
import { data } from "@/data/info";
import { Link, useParams } from "react-router-dom";
import MiniFooter from "../layout/MiniFooter";
import ProjectNavigation from "@/components/ProjectNavigation";
import React from "react";

const Report = () => {
  const { report } = useParams<{ report: string }>();

  const project = data.find(
    (item) => item.type === "report" && item.id === report
  );

  return (
    <div>
      {project ? (
        <>
          <section className="mx-auto">
            <div className="p-12 flex items-center justify-center bg-slate-100 pt-20">
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
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Introduction
              </h2>
              <p className="py-8">
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
                <Link
                  to="#"
                  className="rounded-none bg-black px-12 py-4 border mt-6 text-white"
                >
                  View Prototype
                </Link>
              </div>
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
                Summary
              </h2>
              <p className="py-8">
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
            <div className="px-16 max-w-[1220px] mx-auto py-14">Images</div>
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Methodology
              </h2>
              <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                <li className="mb-6 list-lower-alpha">
                  A moderated usability study with a total of 6 participants
                  with backgrounds in business, sales and marketing.
                  Participants were asked to perform tasks in a high-fidelity
                  prototype. Each session lasted between 5-7 minutes.
                </li>
                <li className="mb-6 list-lower-alpha">
                  During the session, participants completed a list of tasks
                  independently but were guided if needed. Questions were asked
                  after every task was performed. In the end, a usability scale
                  questionnaire of 10 questions was sent to participants to
                  complete.
                </li>
                <li className="mb-6 list-lower-alpha">
                  Participants who could not be on a call completed a list of
                  tasks independently with no guide. However, they were required
                  to answer questions into detail after every task was performed
                  through a survey. In the end, a usability scale questionnaire
                  of 10 questions was sent to participants to complete.
                </li>
                <li className="mb-6 list-lower-alpha">
                  The usability scale questionnaire was used to measure the
                  perceived usability of the product. Participants were asked to
                  score ten items with one of five responses that range from
                  Strongly Agree to Strongly Disagree. Participants were assured
                  that there were no right or wrong answers and that every
                  feedback counts.
                </li>
              </ul>
            </div>
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Key performance indicators (KPIs)
              </h2>
              <p className="py-8">
                I chose to use the System Usability Scale and Conversion Rate
                KPIs to translate the success factors of my usability test into
                actual figures because they're close to my research goals. I
                used a standardised questionnaire to measure my product's
                perceived usability.
              </p>
            </div>
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Script
              </h2>
              <p className="pt-8">
                I prepared a short and simple script which contained a set of
                pre-defined tasks participants followed. Participants were not
                informed on how many tasks they were completing because I didn't
                want to overwhelm or underwhelm them before the test started.
                Participants completed their tasks independently, and I only
                spoke when help was needed or when it was time to give a new
                task during the test.
              </p>
              <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                <li className="mb-6 list-lower-alpha">
                  Conversion Rate - Participants that completed desired actions
                  during the test.
                </li>
                <li className="mb-6 pb-4 list-lower-alpha">
                  System Usability Scale- How easy the app is for the user
                  through the use of a questionnaire.
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  to="#"
                  className="rounded-none bg-black px-12 py-4 border mt-6 text-white"
                >
                  View Script
                </Link>
              </div>
            </div>
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Research Questions
              </h2>
              <p className="pt-8">
                To sum up the data collection, I asked a few questions at the
                end of the session to gather information on the product's
                overall effectiveness, observations and commentary in relation
                to the goals of each task. I allowed participants to speak their
                minds and express themselves freely.
              </p>
              <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                <li className="mb-6 list-lower-alpha">
                  By your first glance, did you get what the product offers?
                </li>
                <li className="mb-6 list-lower-alpha">
                  How do you feel about the overall experience?
                </li>
                <li className="mb-6 list-lower-alpha">
                  Did you reach any of the goals assigned to you?
                </li>
                <li className="mb-6 list-lower-alpha">
                  Did you face any challenges? Do you feel like it was difficult
                  to use and navigate?
                </li>
                <li className="mb-6 list-lower-alpha">
                  What other comments do you have? Do you have any suggestions
                  for improvement?
                </li>
              </ul>
            </div>
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Participants
              </h2>
              <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                <li className="mb-6 list-lower-alpha">
                  All participants were business, marketing and sales
                  professionals between the ages of 22-40 with a relatively even
                  distribution of only two genders.
                </li>
                <li className="mb-6 list-lower-alpha">
                  Six participants were scheduled for the test and they all
                  participated and completed the test successfully.
                </li>
                <li className="mb-6 list-lower-alpha">
                  Four participants were involved in a moderated virtual call
                  testing however two of them completed a list of tasks
                  independently with no guide and were required to answer
                  questions in detail after every task was performed. The last
                  two participated in a face-to-face test.
                </li>
              </ul>
              <div className="flex justify-evenly">
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
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Card Sorting
              </h2>
              <p className="py-8">
                After the test, i compiled and summarised the data collected
                using the card sorting method to group my insights and build
                effectively toward next steps.
              </p>
              <div className="pt-8">
                <p className="font-bold">Challenges</p>
                <div className="grid flex-1 items-start gap-4 py-4 sm:py-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                  <Card className="w-[300px] h-[145px] bg-blue-200 rounded-none flex flex-col items-center justify-center">
                    <CardTitle className="text-lg p-4">Victoria</CardTitle>
                    <p className="text-center">
                      Figma made it very messy to use because a lot of features
                      weren't responsive.
                    </p>
                  </Card>
                  <Card className="w-[300px] h-[145px] bg-blue-200 rounded-none flex flex-col items-center justify-center">
                    <CardTitle className="text-lg p-4">Maame</CardTitle>
                    <p className="text-center">
                      Toggling between some tabs was a bit slow. Eg from
                      Contacts to People.
                    </p>
                  </Card>
                  <Card className="w-[300px] h-[145px] bg-blue-200 rounded-none flex flex-col items-center justify-center">
                    <CardTitle className="text-lg p-4">Nana Yaw</CardTitle>
                    <p className="text-center">
                      The modals aren't going to work in real time circumstances
                    </p>
                  </Card>
                </div>
              </div>
              <div className="pt-8">
                <p className="font-bold">Comments</p>
                <div className="grid flex-1 items-start gap-4 py-4 sm:py-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                  <Card className="w-[300px] h-[145px] bg-blue-500 rounded-none flex flex-col items-center justify-center">
                    <CardTitle className="text-lg p-4">Victoria</CardTitle>
                    <p className="text-center">
                      Figma made it very messy to use because a lot of features
                      weren't responsive.
                    </p>
                  </Card>
                  <Card className="w-[300px] h-[145px] bg-blue-500 rounded-none flex flex-col items-center justify-center">
                    <CardTitle className="text-lg p-4">Maame</CardTitle>
                    <p className="text-center">
                      Toggling between some tabs was a bit slow. Eg from
                      Contacts to People.
                    </p>
                  </Card>
                </div>
              </div>
              <div className="pt-8">
                <p className="font-bold">Recommendations</p>
                <div className="grid flex-1 items-start gap-4 py-4 sm:py-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                  <Card className="w-[300px] h-[145px] bg-emerald-500 rounded-none flex flex-col items-center justify-center">
                    <CardTitle className="text-lg p-4">Victoria</CardTitle>
                    <p className="text-center">
                      Figma made it very messy to use because a lot of features
                      weren't responsive.
                    </p>
                  </Card>
                  <Card className="w-[300px] h-[145px] bg-emerald-500 rounded-none flex flex-col items-center justify-center">
                    <CardTitle className="text-lg p-4">Maame</CardTitle>
                    <p className="text-center">
                      Toggling between some tabs was a bit slow. Eg from
                      Contacts to People.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Insights
              </h2>
              <p className="pt-8 font-avant-garde">
                The test identified only a few minor problems, including:
              </p>
              <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                <li className="mb-6 list-lower-alpha">
                  Modals- the idea of modals seemed great but aren't going to be
                  practical in real time.
                </li>
                <li className="mb-6 list-lower-alpha">
                  Colour choices- some colours were hard to see.
                </li>
                <li className="mb-6 list-lower-alpha">
                  Usability- some buttons weren't working.
                </li>
                <li className="mb-6 list-lower-alpha">
                  Responsiveness- some participants wanted the prototype to be
                  more responsive.
                </li>
                <li className="mb-6 list-lower-alpha">
                  Representation- provision of more than two avatars for
                  representation.
                </li>
                <li className="mb-6 list-lower-alpha">
                  Inclusivity- some users wondered how easy the product would be
                  for people who are new to CRM’S
                </li>
              </ul>
            </div>
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Implementing Feedback
              </h2>
              <p className="pt-8 font-avant-garde">
                Most of the feedback and recommendations received were compiled
                and grouped by severity. The data with the highest severity were
                implemented immediately because they focused more on improving
                the product's user experience and what does not work well for
                users.
              </p>
              <div>Image</div>
            </div>
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Interface before the usability test.
              </h2>
              <div>Image</div>
            </div>
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                This is the interface after the usability test. The modal was
                changed into a page
              </h2>
              <div>Image</div>
            </div>
            <div className="px-16 max-w-[1220px] mx-auto py-14">
              <h2 className="font-avant-garde text-3xl font-medium leading-10">
                Conclusion
              </h2>
              <ul className="pt-8 font-avant-garde text-base font-light leading-6 list-disc ml-8">
                <li className="mb-6 list-lower-alpha">
                  Based on the feedback from the usability test and the SUS
                  data, it can be concluded that the Leads management system I
                  designed has a logical user flow with an overall good user
                  interface. The product was comprehensible and usable to most
                  participants, with a high conversion rate. However, some areas
                  needed improvement, particularly with the contacts and leads
                  features and some user interface components.
                </li>
                <li>
                  Additionally, some users requested a more responsive prototype
                  which I will continue to work on to make this prototype and
                  future prototypes easier to use. The study also revealed that
                  users valued the categorisations of leads and the colours used
                  to differentiate items.
                </li>
                <li>
                  Overall, the leads management system has a solid foundation in
                  terms of usability, but there is room for improvement (on my
                  part) regarding the prototype's responsiveness to enhance the
                  user experience during a usability test. The feedback gathered
                  from the usability study was used to inform the current design
                  iterations and improvements to the system.
                </li>
              </ul>
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

export default Report;
