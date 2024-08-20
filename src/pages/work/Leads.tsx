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
            <div className="p-12 max-sm:p-6 flex max-sm:flex-col items-center justify-center bg-[#F3F4F6] pt-20">
              <img
                src={getImgUrl(project.image)}
                alt={project.previewText}
                className="max-h-[300px] max-w-[400px] max-sm:w-[320px]"
              />
              <div className="ml-8 max-sm:w-full max-sm:ml-1">
                <p className="font-semibold text-[#484A56] text-sm leading-5 tracking-wider text-left mb-2 pb-2">
                  {project.designTypes.map((type, index) => (
                    <React.Fragment key={index}>
                      {type}{" "}
                      {index !== project.designTypes.length - 1 && <> ♦ </>}
                    </React.Fragment>
                  ))}
                </p>
                <h2 className="poppins-regular text-[#484A56] tracking-wider max-sm:text-3xl text-4xl text-left mb-2 text-nowrap">
                  {project.name}
                </h2>
                <p className="mb-2 py-4 poppins-light text-sm text-[#484A56] leading-6 tracking-wider max-w-[550px]">
                  {project.brief}
                </p>
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="text-[#0D0D0D] appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Introduction
              </h2>
              <p className="appear-on-scroll font-light py-8 max-sm:py-4 text-xl leading-9">
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
                    className="rounded-none appear-on-scroll bg-black hover:bg-white hover:text-black hover:border-black  px-12 py-4 border mt-6 text-white"
                  >
                    View Prototype
                  </Link>
                ) : (
                  <span className="text-lg font-medium"></span>
                )}
              </div>
            </div>
            <div className="bg-black max-sm:px-4 sm:flex max-sm:justify-center max-sm:grid max-sm:grid-cols-4 max-sm:py-10  max-sm:w-full py-20 text-white justify-evenly">
              <div className="appear-on-scroll text-center">
                <div className="pb-2">Timeline</div>
                <small className="text-sm">4 weeks (80 hours)</small>
              </div>
              <div className="appear-on-scroll text-center">
                <div className="pb-2">My Role</div>
                <small className="text-sm">UI/UX Designer</small>
              </div>
              <div className="appear-on-scroll text-center">
                <div className="pb-2">Tools</div>
                <small className="text-sm">Figma</small>
              </div>
              <div className="appear-on-scroll text-center">
                <div className="pb-2">Tasks</div>
                <small className="text-sm">UX Design, Usability Testing</small>
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Summary
              </h2>
              <p className="appear-on-scroll font-light py-8 max-sm:py-4 text-xl leading-9">
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
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Methodology
              </h2>
              <ol className="desired pt-8 max-sm:pt-4 text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  A moderated usability study with a total of 6 participants
                  with backgrounds in business, sales and marketing.
                  Participants were asked to perform tasks in a high-fidelity
                  prototype. Each session lasted between 5-7 minutes.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  During the session, participants completed a list of tasks
                  independently but were guided if needed. Questions were asked
                  after every task was performed. In the end, a usability scale
                  questionnaire of 10 questions was sent to participants to
                  complete.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Participants who could not be on a call completed a list of
                  tasks independently with no guide. However, they were required
                  to answer questions into detail after every task was performed
                  through a survey. In the end, a usability scale questionnaire
                  of 10 questions was sent to participants to complete.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
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
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Key performance indicators (KPIs)
              </h2>
              <p className="font-light appear-on-scroll py-8 max-sm:py-4 text-xl leading-9">
                I chose to use the System Usability Scale and Conversion Rate
                KPIs to translate the success factors of my usability test into
                actual figures because they're close to my research goals. I
                used a standardised questionnaire to measure my product's
                perceived usability.
              </p>
              <ol className="desired pt-8 max-sm:pt-4 text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Conversion Rate - Participants that completed desired actions
                  during the test.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 pb-4 text-xl list-lower-alpha">
                  System Usability Scale- How easy the app is for the user
                  through the use of a questionnaire.
                </li>
              </ol>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Script
              </h2>
              <p className="font-light text-xl appear-on-scroll py-8 max-sm:py-4">
                I prepared a short and simple script which contained a set of
                pre-defined tasks participants followed. Participants were not
                informed on how many tasks they were completing because I didn't
                want to overwhelm or underwhelm them before the test started.
                Participants completed their tasks independently, and I only
                spoke when help was needed or when it was time to give a new
                task during the test.
              </p>
              <div className="mt-4">
                <a
                  href="https://drive.google.com/file/d/1-Wa68vvwG97zp97Hs7cof8VgtHDBnySI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-none appear-on-scroll bg-black hover:bg-white hover:text-black hover:border-black  px-12 py-4 border mt-6 text-white"
                >
                  View Script
                </a>
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Research Questions
              </h2>
              <p className="font-light text-xl appear-on-scroll pt-8 max-sm:pt-4">
                To sum up the data collection, I asked a few questions at the
                end of the session to gather information on the product's
                overall effectiveness, observations and commentary in relation
                to the goals of each task. I allowed participants to speak their
                minds and express themselves freely.
              </p>
              <ol className="desired pt-8 max-sm:pt-4 text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  By your first glance, did you get what the product offers?
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  How do you feel about the overall experience?
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Did you reach any of the goals assigned to you?
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Did you face any challenges? Do you feel like it was difficult
                  to use and navigate?
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  What other comments do you have? Do you have any suggestions
                  for improvement?
                </li>
              </ol>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Participants
              </h2>
              <ol className="desired pt-8 max-sm:pt-4 text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll text-xl mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  All participants were business, marketing and sales
                  professionals between the ages of 22-40 with a relatively even
                  distribution of only two genders.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Six participants were scheduled for the test and they all
                  participated and completed the test successfully.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Four participants were involved in a moderated virtual call
                  testing however two of them completed a list of tasks
                  independently with no guide and were required to answer
                  questions in detail after every task was performed. The last
                  two participated in a face-to-face test.
                </li>
              </ol>
              <div className="appear-on-scroll flex justify-evenly">
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
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Card Sorting
              </h2>
              <p className="font-light appear-on-scroll py-8 max-sm:py-4 text-xl leading-9">
                After the test, i compiled and summarised the data collected
                using the card sorting method to group my insights and build
                effectively toward next steps.
              </p>
              <div className="pt-8 max-sm:pt-4">
                <p className="appear-on-scroll font-medium">Challenges</p>
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
                <div className="pt-8 max-sm:pt-4">
                  <p className="appear-on-scroll font-medium">Comments</p>
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
              </div>
              <div className="pt-8 max-sm:pt-4">
                <p className="appear-on-scroll font-medium">Recommendations</p>
                <div className="pt-6">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[5])}
                        alt="Feedback Image"
                        className="appear-on-scroll"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Insights
              </h2>
              <p className="font-light text-xl appear-on-scroll pt-8 max-sm:pt-4">
                The test identified only a few minor problems, including:
              </p>
              <ol className="desired pt-8 max-sm:pt-4 text-base font-light leading-6 list-disc ml-8 max-sm:ml-1">
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Modals- the idea of modals seemed great but aren't going to be
                  practical in real time.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Colour choices- some colours were hard to see.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Usability- some buttons weren't working.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Responsiveness- some participants wanted the prototype to be
                  more responsive.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Representation- provision of more than two avatars for
                  representation.
                </li>
                <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                  Inclusivity- some users wondered how easy the product would be
                  for people who are new to CRM’S
                </li>
              </ol>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Implementing Feedback
              </h2>
              <p className="font-light text-xl appear-on-scroll pt-8 max-sm:pt-4">
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
                      src={getImgUrl(project.images[6])}
                      alt="Feedback Image"
                      className="appear-on-scroll"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Interface before the usability test.
              </h2>
              <div className="pt-6">
                {project.images && project.images.length > 0 && (
                  <>
                    <img
                      src={getImgUrl(project.images[7])}
                      alt="Feedback Image"
                      className="appear-on-scroll"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll text-3xl font-medium leading-10">
                This is the interface after the usability test. The modal was
                changed into a page
              </h2>
              <div className="pt-6">
                {project.images && project.images.length > 0 && (
                  <>
                    <img
                      src={getImgUrl(project.images[8])}
                      alt="Feedback Image"
                      className="appear-on-scroll"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="px-16 max-sm:px-8 xl2:w-[1240px] w-[1100px] max-sm:w-full mx-auto py-14 max-sm:py-7">
              <h2 className="appear-on-scroll poppins-regular text-3xl font-medium leading-10">
                Conclusion
              </h2>
              <ol className="list-none pt-8 max-sm:pt-4 text-base font-light leading-6 ml-1 max-sm:ml-1">
                <div className="flex">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[9])}
                        alt="Feedback Image"
                        className="w-20 h-20 mt-2 mr-3"
                      />
                    </>
                  )}
                  <li className="appear-on-scroll mb-6 max-sm:mb-3 text-xl leading-9">
                    Based on the feedback from the usability test and the SUS
                    data, it can be concluded that the Leads management system I
                    designed has a logical user flow with an overall good user
                    interface. The product was comprehensible and usable to most
                    participants, with a high conversion rate. However, some
                    areas needed improvement, particularly with the contacts and
                    leads features and some user interface components.
                  </li>
                </div>
                <div className="flex">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[10])}
                        alt="Feedback Image"
                        className="w-10 h-14 mt-2 mr-3"
                      />
                    </>
                  )}
                  <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                    Additionally, some users requested a more responsive
                    prototype which I will continue to work on to make this
                    prototype and future prototypes easier to use. The study
                    also revealed that users valued the categorisations of leads
                    and the colours used to differentiate items.
                  </li>
                </div>
                <div className="flex">
                  {project.images && project.images.length > 0 && (
                    <>
                      <img
                        src={getImgUrl(project.images[11])}
                        alt="Feedback Image"
                        className="w-10 h-14 mt-2 mr-3"
                      />
                    </>
                  )}
                  <li className="appear-on-scroll mb-6 max-sm:mb-3 list-lower-alpha text-xl leading-9">
                    Overall, the leads management system has a solid foundation
                    in terms of usability, but there is room for improvement (on
                    my part) regarding the prototype's responsiveness to enhance
                    the user experience during a usability test. The feedback
                    gathered from the usability study was used to inform the
                    current design iterations and improvements to the system.
                  </li>
                </div>
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
