import React, { useEffect, useState } from "react";
import Anywhere from "./assets/Anywhere.png";
import VogueVault from "./assets/VogueVault.png";
import bg from "./assets/bg.mp4";
export default function App() {
  const [repos, setRepos] = useState([]);
  const apiUrl = "https://api.github.com/users/itss0urav/repos";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center  animate-fade-in-down">
      <video
        src={bg}
        autoPlay
        muted
        loop
        className=" absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
      />
      <div className=" min-h-screen py-6 flex flex-col justify-center sm:py-12 z-10">
        <div className="mx-auto max-w-[80%]">
          <div className="neon-fuchsia backdrop-blur-xl bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent  rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-8xl bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent font-bold text-center mb-4">
              Sourav S
            </h1>
            <p className=" bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent text-center mb-8 text-2xl">
              I am a web developer based in Kerala, India, with a keen interest
              in creating dynamic and interactive web applications. I have a
              passion for exploring new technologies and am committed to
              continually learning and enhancing my skills.
            </p>
            <div className="space-y-5">
              <h3 className="text-xl font-semibold">Languages and Tools:</h3>
              <div className="flex justify-center">
                <div className="flex flex-wrap gap-4">
                  <a target="blank" href="https://www.w3.org/html/">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                      alt="HTML5"
                      className=" w-16"
                    />
                  </a>
                  <a target="blank" href="https://www.w3schools.com/css/">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                      alt="CSS3"
                      className=" w-16"
                    />
                  </a>
                  <a target="blank" href="https://tailwindcss.com/">
                    <img
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                      alt="Tailwind CSS"
                      className=" w-16"
                    />
                  </a>
                  <a target="blank" href="https://git-scm.com/">
                    <img
                      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                      alt="Git"
                      className=" w-16"
                    />
                  </a>
                  <a
                    target="blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      className=" w-16"
                    />
                  </a>
                  <a target="blank" href="https://www.mongodb.com/">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                      alt="MongoDB"
                      className=" w-16"
                    />
                  </a>
                  <a target="blank" href="https://expressjs.com">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                      alt="Express.js"
                      className=" w-16"
                    />
                  </a>
                  <a target="blank" href="https://reactjs.org/">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="React"
                      className=" w-16"
                    />
                  </a>
                  <a target="blank" href="https://nodejs.org">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                      alt="Node.js"
                      className=" w-16"
                    />
                  </a>

                  <a target="blank" href="https://chat.openai.com/">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png"
                      alt="ChatGPT"
                      className=" w-16"
                    />
                  </a>

                  <a target="blank" href="https://www.postman.com/">
                    <img
                      src="data:image/png;base64,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"
                      alt="Postman API"
                      className=" w-16"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="flex justify-center gap-8">
            {/* Anywhere Project */}
            <div className="max-w-sm backdrop-blur-xl neon-fuchsia  rounded-lg shadow p-5">
              <img
                className="rounded-t-lg"
                src={Anywhere}
                alt="Anywhere Project"
              />
              <div className="p-4">
                <h5 className="mb-2 text-2xl font-bold bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent">
                  Anywhere
                </h5>

                <p className="mb-4 text-lg font-bold bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent">
                  Anywhere/Anywhere 2.0 is a web application designed to foster
                  a sense of community and encourage meaningful discussions
                  among its users.
                </p>
                <a
                  href="https://github.com/itss0urav/Anywhere2.0"
                  className="font-bold text-xl neon-fuchsia rounded-md p-1 bg-gradient-to-r from-neutral-50 to-fuchsia-600 bg-clip-text text-transparent"
                >
                  View Source
                </a>
              </div>
            </div>

            {/* Vogue Vault Project */}
            <div className="max-w-sm backdrop-blur-xl neon-cyan rounded-lg shadow p-5">
              <img
                className="rounded-t-lg"
                src={VogueVault}
                alt="Vogue Vault Project"
              />
              <div className="p-4">
                <a href="https://github.com/itss0urav/vogue-vault">
                  <h5 className="mb-2 text-2xl font-bold bg-gradient-to-r from-fuchsia-100 to-sky-500 bg-clip-text text-transparent">
                    Vogue Vault
                  </h5>
                </a>
                <p className="mb-4 text text-lg font-bold bg-gradient-to-r from-fuchsia-200 to-sky-500 bg-clip-text text-transparent">
                  A Backend less Men's shopping site. State management handled
                  using ContextAPI.
                </p>
                <div className="mt-[14%]">
                  <a
                    href="https://github.com/itss0urav/vogue-vault"
                    className="font-bold text-xl neon-blue rounded-md p-1 bg-gradient-to-r from-fuchsia-200 to-sky-500 bg-clip-text text-transparent"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-4xl text-center mb-4 font-bold  neon-blue rounded-md p-1 bg-gradient-to-r from-fuchsia-200 to-sky-500 bg-clip-text text-transparent">
              GitHub Repos
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="rounded overflow-hidden shadow-lg p-4 backdrop-blur-xl neon-sky"
                >
                  <a
                    href={repo.html_url}
                    className="block mt-1 text-lg leading-tight font-medium neon-cyan rounded-md p-1 bg-gradient-to-r from-fuchsia-200 to-fuchsia-500 bg-clip-text text-transparent "
                  >
                    {repo.name}
                  </a>
                  <p className="mt-2 text-gray-500">
                    {repo.description || "No description in GitHub"}
                  </p>
                </div>
              ))}
            </div>
            <div className=" text-center mt-3">
              <a
                href="mailto:souravhacks987@gmail.com"
                className="text-white text-xl neon-sky p-2 text-center"
              >
                Message Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
