import { useState, useEffect } from "react";
import Anywhere from "./assets/Anywhere.png";
import VogueVault from "./assets/VogueVault.png";
import TaskMate from "./assets/TaskMate.png";
import Note4You from "./assets/Note4You.png";
import resume from "/Sourav S  Resume.pdf";
import bg from "./assets/bg.mp4";
import bgImg from "./assets/deepspace.jpg";
import { TypeAnimation } from "react-type-animation";
import { datas, projects, personalData, socials, experience } from "./datas.js";

import top from "./assets/imgs/top.png";
import Card from "./ui/card.jsx";

export default function App() {
  const [hasGoodDevice, setHasGoodDevice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {}, []);

  setTimeout(() => {
    console.log(
      " Hi there :) I Made my portfolio using React and Tailwind CSS .Find me Here \n GitHub: 👉https://github.com/itss0urav",
      " \n LinkedIn: 👉https://www.linkedin.com/in/itssourav/",
      " \n Instagram: 👉https://www.instagram.com/itssourav.dev/",
      " \n Medium: 👉https://itss0urav.medium.com/"
    );
  }, 3000);
  const downloadResume = () => {
    const url = resume;
    const link = document.createElement("a");
    link.href = url;
    link.download = "Sourav S  Resume.pdf";
    link.click();
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center  animate-fade-in-down">
      {isModalOpen && (
        <div className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div className="inline-block align-bottom   rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white backdrop-blur-md  bg-opacity-20 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-white"
                      id="modal-title"
                    >
                      Does this device have strong internet connection?
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-white backdrop-blur-md  bg-opacity-20 px-4 py-3 gap-2 lg:gap-4 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className=" neon-green mt-3 w-full inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium bg-gradient-to-r from-green-500 to-sky-100 bg-clip-text text-transparent hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setHasGoodDevice(true);
                    toggleModal();
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className=" neon-red mt-3 w-full inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium bg-gradient-to-r from-red-500 to-sky-100 bg-clip-text text-transparent hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setHasGoodDevice(false);
                    toggleModal();
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {hasGoodDevice === true ? (
        <video
          src={bg}
          autoPlay
          muted
          loop
          className="blur-2xl scale-110 absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
        />
      ) : (
        <img
          src={bgImg}
          className="blur-sm scale-105 absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
        />
      )}

      <div className=" min-h-screen py-6 flex flex-col justify-center sm:py-12 z-10">
        <div className="mx-auto max-w-[80%]">
          {/* test */}
          <div className=" flex justify-center ">
            <img
              src={top}
              alt=""
              className=" absolute z-[-1]  w-2/4 md:w-[50rem] object-cover transform-gpu  "
            />
          </div>

          {/* test */}
          <section className="bg-black bg-opacity-50 mt-[50%] md:mt-[40%] neon-fuchsia backdrop-blur-xl   rounded-lg shadow-md p-8 mb-8">
            <h1 className="  text-center font-bold text-2xl md:text-5xl bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent">
              Hi, I&apos;m Sourav
            </h1>
            <h1 className=" text-xl md:text-4xl bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent font-bold text-center mb-4">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially

                  "I'm a full stack developer",
                  2000,
                  "Currently focused in MERN Stack development",
                  2000,
                  "Open to work",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </h1>
            <p className=" bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent text-center mb-8 text-sm lg:text-2xl">
              <TypeAnimation
                sequence={[
                  "I am a web developer based in Kerala, India, with a keen interest in creating dynamic and interactive web applications. I have a passion for exploring new technologies and am committed to continually learning and enhancing my skills.",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </p>
            <div className="space-y-5">
              <h3 className="text-xl text-center font-semibold bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent">
                Languages and Tools
              </h3>
              <div className="flex justify-center">
                <div className=" flex ml-5 md:ml-0 flex-wrap gap-2 md:gap-8">
                  {datas.map((data, index) => (
                    <img
                      key={index}
                      src={data.src}
                      alt={data.alt}
                      className=" cursor-pointer p-1 bg-cyan-100 bg-opacity-20 border border-cyan-200 rounded-md transition-transform duration-500 hover:scale-125  hover:neon-cyan hover:bg-cyan-500 w-12 lg:w-16"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="py-10 my-20 backdrop-blur-md neon-fuchsia rounded-md">
            <div className="text-2xl md:text-5xl bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent font-bold text-center mb-6">
              Socials
            </div>
            <div className=" m-4 flex flex-wrap justify-center gap-4 md:gap-24">
              <a href={socials[0].href} target="blank">
                <img
                  src={socials[0].src}
                  alt={socials[0].alt}
                  className="transition-transform duration-500 hover:scale-105 hover:neon-sky rounded-md w-24 md:w-40"
                />
              </a>
              <a href={socials[1].href} target="blank">
                <img
                  src={socials[1].src}
                  alt={socials[1].alt}
                  className="transition-transform duration-500 hover:scale-105  hover:neon-gray rounded-md w-24 md:w-40"
                />
              </a>
              <a target="blank" href={socials[2].href}>
                <img
                  src={socials[2].src}
                  alt={socials[2].alt}
                  className="bg-red-500 py-1 transition-transform duration-500 hover:scale-105  hover:neon-red rounded-md w-24 md:w-40"
                />
              </a>
              <a target="blank" href={socials[3].href}>
                <img
                  src={socials[3].src}
                  alt={socials[3].alt}
                  className=" bg-white py-2 p-1 transition-transform duration-500 hover:scale-105  hover:neon-gray rounded-md w-24 md:w-40"
                />
              </a>
            </div>
          </section>

          <section>
            <div className=" text-2xl md:text-5xl bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent font-bold text-center mb-6">
              Projects
            </div>
            {/* Projects Section */}
            <div className="flex flex-wrap justify-center gap-8">
              {/* Anywhere Project */}
              <div className="bg-black bg-opacity-50 transition-transform duration-500 hover:scale-105 max-w-sm backdrop-blur-xl neon-fuchsia rounded-lg shadow p-5">
                <img
                  className="rounded-t-lg"
                  src={Anywhere}
                  alt="Anywhere Project"
                />
                <div className="p-4">
                  <h5 className="mb-2 text-2xl font-bold bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent">
                    {projects[0].name}
                  </h5>

                  <p className="mb-4 text-lg font-bold bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent">
                    {projects[0].description}
                  </p>

                  <div className="md:mt-[30%] flex justify-center hover:bg-fuchsia-500 rounded-md neon-fuchsia p-2 ">
                    <a
                      target="blank"
                      href={projects[0].repoUrl}
                      className="font-bold text-xl D rounded-md p-1 bg-gradient-to-r from-fuchsia-300 to-sky-300 bg-clip-text text-transparent"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>

              {/* Vogue Vault Project */}
              <div className="bg-black bg-opacity-50 transition-transform duration-500 hover:scale-105 max-w-sm backdrop-blur-xl neon-gray rounded-lg shadow p-5">
                <img
                  className="rounded-t-lg"
                  src={VogueVault}
                  alt="Vogue Vault Project"
                />
                <div className="p-4">
                  <h5 className=" w-30 mb-2 text-2xl font-bold bg-gradient-to-r from-fuchsia-100 to-gray-500 bg-clip-text text-transparent">
                    {projects[1].name}
                  </h5>

                  <p className="mb-4 text-lg font-bold bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent">
                    {projects[1].description}
                  </p>
                  <div className="md:mt-[40%] flex justify-center hover:bg-white rounded-md neon-gray p-2 ">
                    <a
                      target="blank"
                      href={projects[1].repoUrl}
                      className="font-bold text-xl D rounded-md p-1 bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text text-transparent"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
              {/* TaskMate Project */}
              <div className="bg-black bg-opacity-50 transition-transform duration-500 hover:scale-105  max-w-sm backdrop-blur-xl neon-green rounded-lg shadow p-5">
                <img
                  className="rounded-t-lg"
                  src={TaskMate}
                  alt="TaskMate Project"
                />
                <div className="p-4">
                  <h5 className="mb-2 text-2xl font-bold bg-gradient-to-r from-fuchsia-100 to-green-500 bg-clip-text text-transparent">
                    {projects[2].name}
                  </h5>
                  <p className="mb-4 text text-lg font-bold bg-gradient-to-r from-fuchsia-200 to-green-500 bg-clip-text text-transparent">
                    {projects[2].description}
                  </p>
                  <div className="md:mt-[50%] flex justify-center hover:bg-green-500 rounded-md neon-cyan p-2 ">
                    <a
                      target="blank"
                      href={projects[2].repoUrl}
                      className="font-bold text-xl D rounded-md p-1 bg-gradient-to-r from-fuchsia-500 to-green-700 bg-clip-text text-transparent"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
              {/* Note4You Project */}
              <div className="bg-black bg-opacity-50 transition-transform duration-500 hover:scale-105  max-w-sm backdrop-blur-xl neon-sky rounded-lg shadow p-5">
                <img
                  className="rounded-t-lg"
                  src={Note4You}
                  alt="TaskMate Project"
                />
                <div className="p-4">
                  <h5 className="mb-2 text-2xl font-bold bg-gradient-to-r from-fuchsia-100 to-sky-500 bg-clip-text text-transparent">
                    {projects[3].name}
                  </h5>
                  <p className="mb-4 text text-lg font-bold bg-gradient-to-r from-fuchsia-200 to-sky-500 bg-clip-text text-transparent">
                    {projects[3].description}
                  </p>
                  <div className=" flex justify-center hover:bg-sky-500 rounded-md neon-sky p-2 ">
                    <a
                      target="blank"
                      href={projects[3].repoUrl}
                      className="font-bold text-xl D rounded-md p-1 bg-gradient-to-r from-fuchsia-500 to-sky-700 bg-clip-text text-transparent"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="neon-cyan my-8 p-6 rounded-md">
            <h4 className="font-bold bg-gradient-to-r from-white to-neutral-200 bg-clip-text text-transparent text-lg md:text-3xl py-2 px-3 text-center rounded-md text-opacity-100">
              Experience
            </h4>
            <div className="flex flex-wrap gap-4 place-content-center">
              {experience?.map((data, index) => (
                <Card
                  imageUrl={data.imageUrl}
                  key={index}
                  company={data.company}
                  role={data.role}
                  duration={data.duration}
                />
              ))}
            </div>
          </section>

          <div className="mt-8">
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="text-center mt-2">
                <a
                  href={`mailto:${personalData[0].mail}`}
                  className="font-bold  bg-opacity-50 hover:bg-cyan-500 text-white hover:text-black text-lg md:text-3xl neon-sky py-2 px-3 text-center rounded-md text-opacity-100"
                >
                  Mail Me
                </a>
              </div>
              <div className="text-center ">
                <button
                  onClick={downloadResume}
                  className=" font-bold  bg-opacity-50 hover:bg-cyan-500 text-white hover:text-black text-lg md:text-3xl neon-sky py-2 px-3 text-center rounded-md text-opacity-100"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          <footer className="mt-4 md:mt-8 bg-black neon-cyan rounded-md backdrop-blur-md bg-opacity-15 shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-white">
                © 2024 Sourav S. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
