import React from "react";
import Image from "./background.jpg";

const Hero = () => {
  return (
    <div>
      <section className="relative bg-cover bg-left bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold bg-white-600 sm:text-5xl text-red-700">
              Let us find your
              <strong className="block font-extrabold bg-white-600 text-rose-700">
                Forever Home.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!anir
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center sm:flex-nowrap">
              <a
                href="#"
                className="block w-full sm:w-auto rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full sm:w-auto rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="mt-5  mx-auto sm:mt-0 sm:max-w-sm">
            <img
              // src="https://i.pinimg.com/originals/32/9b/63/329b63886c58f6f4915b8642f52ec8b3.gif"
              src="homePage.png"
              alt="GIF"
              className="max-w-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
