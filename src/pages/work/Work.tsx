import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { data, moreWork } from "@/data/info";
import React from "react";
import { getImgUrl } from "@/data/functions";
import star from "/assets/images/star.png";
import ux from "/assets/images/ux.png";
import product from "/assets/images/product.png";
import heart from "/assets/images/heart.png";
import whiskers from "/assets/images/whiskers.png";
import whiskers2 from "/assets/images/whiskers2.png";

const Work = () => {
  const [items] = useState([
    "Design Consulting",
    "✏️",
    "User Experience Design",
    "🏆",
    "User Interface Design",
    "🛠️",
    "Design Management",
    "🎨",
    "Product strategy",
    "✏️",
    "Product Marketing",
    "🏆",
    "Product Management",
    "🛠️",
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
    <div className="pt-20">
      <section className="pb-16">
        <div className="flex items-center flex-col justify-center">
          <div className="flex relative">
            <img src={star} alt="stars" className="absolute stars" />
            <img src={ux} alt="ux" className="absolute ux" />
            <h1 className="max-w-[730px] z-10 font-avant-garde mb-6 font-semibold text-4xl leading-tight tracking-wider text-center">
              I Create, Manage, and Market Products
            </h1>
            <img src={product} alt="product" className="absolute product" />
          </div>

          <div className="flex justify-center items-center">
            <img src={whiskers} alt="whiskers" className="h-8" />
            <h5 className="text-center font-bold my-4 text-sm tracking-widest">
              Hi! I'm Ayeley
            </h5>
            <img src={whiskers2} alt="whiskers" className="h-8" />
          </div>

          <div className="flex relative">
            <p className="text-center max-w-[850px] avant-garde-extralight text-base z-10 m-8">
              I craft digital experiences using storytelling and modern
              approaches to connect individuals with your business and products.
            </p>
            <img src={heart} alt="heart" className="heart absolute" />
          </div>
          <Button className="text-center rounded-none bg-black px-28 py-6 m-8">
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
      <section className="bg-black text-white py-20 px-16 flex items-center flex-col justify-center mx-auto">
        <div className="space-y-12">
          {data.map((item, index) => (
            <div key={index} className="flex work-container">
              <Card
                className="md:max-2xl:w-[500px] md:max-xl:w-[415px] md bg-cover bg-center rounded-none"
                style={{
                  backgroundImage: `url(${getImgUrl(item.previewImg)})`,
                }}
              ></Card>
              <div className="px-4 py-8 md:max-2xl:max-w-[520px] md:max-xl:w-[450px] ml-8">
                <p className="font-avant-garde font-medium text-xs leading-5 tracking-widest text-left mb-2 pb-2">
                  {item.designTypes.map((type, index) => (
                    <React.Fragment key={index}>
                      {type} {index !== item.designTypes.length - 1 && <> ♦ </>}
                    </React.Fragment>
                  ))}
                </p>
                <h2 className="font-avant-garde font-semibold tracking-wider work-text text-left mb-2 text-nowrap">
                  {item.name}
                </h2>
                <p className="mb-2 py-4 font-avant-garde text-xs avant-garde-extralight leading-6 tracking-wider">
                  {item.brief}
                </p>
                <Link
                  to={
                    item.type === "report"
                      ? `/work/report/${item.id}`
                      : `/work/${item.id}`
                  }
                  className="inline-block bg-black  md:max-2xl:px-24 md:max-xl:px-16 md:max-2xl:py-6 md:max-xl:py-4 border text-base border-white rounded-none text-white"
                >
                  {item.type === "report" ? "View Report" : "Case Study"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 pr-20 pl-32 mx-auto">
        <div
          className="overflow-x-auto"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex justify-evenly py-10">
            {moreWork.map((work, index) => (
              <div key={index}>
                <Card
                  className="md:max-2xl:w-[260px] md:max-2xl:h-[250px] md:max-xl:w-[205px] md:max-xl:h-[205px] mr-10 bg-cover bg-center rounded-none"
                  style={{
                    backgroundImage: `url(${getImgUrl(work.img)})`,
                  }}
                ></Card>
                <p className="md:max-2xl:max-w-[250px] md:max-xl:max-w-[205px] text-xl md:max-xl:text-xl pt-6 font-avant-garde-thin font-thin leading-6 tracking-wide text-gray-400">
                  {work.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="my-6 border-t border-gray-300 mx-24" />
      <Footer />
    </div>
  );
};

export default Work;
