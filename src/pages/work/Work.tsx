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
          <div className="flex relative">
            <img src={star} alt="stars" className="absolute stars" />
            <img src={ux} alt="ux" className="absolute ux" />
            <h1 className="max-w-[590px] font-sans z-10 font-avant-garde mb-6 font-medium text-5xl leading-tight tracking-tighter text-center">
              I Create, Manage, and Market Products
            </h1>
            <img src={product} alt="product" className="absolute product" />
          </div>
          <h5 className="text-center font-bold m-4">˗ˏˋ Hi! I'm Ayeley ´ˎ˗</h5>
          <div className="flex relative">
            <p className="text-center max-w-[800px] z-10 m-8">
              I craft digital experiences using storytelling and modern
              approaches to connect individuals with your business and products.
            </p>
            <img src={heart} alt="heart" className="heart absolute" />
          </div>
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
          {data.map((item, index) => (
            <div key={index} className="flex work-container">
              <Card
                className="w-[350px] bg-cover bg-center rounded-none"
                style={{
                  backgroundImage: `url(${getImgUrl(item.previewImg)})`,
                }}
              ></Card>
              <div className="p-4 max-w-[500px] ml-12">
                <p className="font-avant-garde font-medium text-sm leading-5 tracking-wide text-left mb-2">
                  {item.designTypes.map((type, index) => (
                    <React.Fragment key={index}>
                      {type}
                      {index !== item.designTypes.length - 1 && <> &#10209; </>}
                    </React.Fragment>
                  ))}
                </p>
                <h2 className="font-avant-garde font-medium text-5xl leading-3xl tracking-tighter text-left mb-2">
                  {item.name}
                </h2>
                <p className="mb-2 py-4">{item.brief}</p>
                <Link
                  to={
                    item.type === "report"
                      ? `/work/report/${item.id}`
                      : `/work/${item.id}`
                  }
                  className="inline-block bg-black px-14 py-4 border border-white rounded-none text-white"
                >
                  {item.type === "report" ? "View Report" : "Case Study"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-20 mx-auto">
        <div className="overflow-x-auto">
          <div className="flex justify-evenly py-10">
            {moreWork.map((work, index) => (
              <div key={index}>
                <Card
                  className="w-[150px] h-[150px] bg-cover bg-center rounded-none"
                  style={{
                    backgroundImage: `url(${getImgUrl(work.img)})`,
                  }}
                ></Card>
                <p className="max-w-[150px]">{work.name}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-t border-gray-300" />
      </section>
      <Footer />
    </div>
  );
};

export default Work;
