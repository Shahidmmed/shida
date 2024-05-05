import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
const Work = () => {
  const [items] = useState([
    "Design Consulting ✏️",
    "User Experience Design 🏆",
    "User Interface Design 🛠️",
    "Design Management 🎨",
    "Product strategy ✏️",
    "Product Marketing 🏆",
    "Product Management 🛠️",
  ]);

  useEffect(() => {
    const container = document.querySelector(".text-container") as HTMLElement;
    const containerWidth = container.offsetWidth;
    const itemWidth =
      (container.firstElementChild as HTMLElement)?.offsetWidth || 0;
    const animationDuration = (containerWidth + itemWidth) / 50; // Adjust speed as needed

    const textItems = container.querySelectorAll(
      ".text-item"
    ) as NodeListOf<HTMLElement>;
    textItems.forEach((item, index) => {
      item.style.animation = `carousel ${animationDuration}s linear infinite ${
        index * animationDuration
      }s`;
    });

    return () => {
      textItems.forEach((item) => {
        item.style.animation = "";
      });
    };
  }, []);

  return (
    <div>
      <section className="pb-16">
        <div className="flex items-center flex-col justify-center">
          <h1 className="max-w-[590px] font-sans font-avant-garde mb-6 font-medium text-5xl leading-tight tracking-tighter text-center">
            I Create, Manage, and Market Products
          </h1>
          <h5 className="text-center font-bold m-4">˗ˏˋ Hi! I'm Ayeley ´ˎ˗</h5>
          <p className="text-center max-w-[800px] m-8">
            I craft digital experiences using storytelling and modern approaches
            to connect individuals with your business and products.
          </p>
          <Button className="text-center rounded-none bg-black px-16 py-6 m-6">
            My Work
          </Button>
        </div>
        <div className="text-container py-3">
          {items.map((item, index) => (
            <div key={index} className="text-item">
              {item}
            </div>
          ))}
          {items.map((item, index) => (
            <div key={index + items.length} className="text-item">
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="py-8 bg-black text-white px-20 flex items-center flex-col justify-center mx-auto">
        <div className="space-y-12">
          <div className="flex work-container">
            <Card className="w-[350px]"></Card>
            <div className="p-4 max-w-[500px] ml-12">
              <p className="font-avant-garde font-medium text-sm leading-5 tracking-wide text-left mb-2">
                UI/UX DESIGN &#10209; USABILITY TESTING REPORT
              </p>
              <h2 className="font-avant-garde font-medium text-5xl leading-3xl tracking-tighter text-left mb-2">
                Leads Management
              </h2>
              <p className="mb-2 py-4">
                A management platform that aims to assist with collecting and
                tracking prospects' data
              </p>
              <Button className="rounded-none bg-black px-16 py-6 border">
                View Report
              </Button>
            </div>
          </div>
          <div className="flex work-container">
            <Card className="w-[350px]"></Card>
            <div className="p-4 max-w-[500px] ml-12">
              <p className="font-avant-garde font-medium text-sm leading-5 tracking-wide text-left mb-2">
                UI/UX DESIGN &#10209; MOBILE APP &#11047; CASE STUDY
              </p>
              <h2 className="font-avant-garde font-medium text-5xl leading-3xl tracking-tighter text-left mb-2">
                Inventory Managemennt
              </h2>
              <p className="mb-2 py-4">
                An app that aims to help Ghanaian businesses plan, track and
                manage their daily operations.
              </p>
              <Button className="rounded-none bg-black px-16 py-6 border">
                Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 px-20 mx-auto">
        <div className="flex justify-evenly py-10">
          <div className="">
            <Card className="w-[150px] h-[150px]"></Card>
            <p>Property & Roomie Finder</p>
          </div>
          <div>
            <Card className="w-[150px] h-[150px]"></Card>
            <p>Members Management App</p>
          </div>
          <div>
            <Card className="w-[150px] h-[150px]"></Card>
            <p>Pay Up Website</p>
          </div>
        </div>
        <hr className="my-6 border-t border-gray-300" />
      </section>
      <Footer />
    </div>
  );
};

export default Work;
