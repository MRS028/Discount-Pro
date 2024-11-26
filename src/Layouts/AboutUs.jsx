import React from "react";
import { FaJsSquare, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const AboutUs = () => {
  const experiences = [
    {
      icon: <FaJsSquare className="text-yellow-500 text-4xl mb-4" />,
      title: "Vanilla JavaScript",
      description:
        "Skilled in ES6+, DOM manipulation, and asynchronous programming.",
    },
    {
      icon: <FaReact className="text-blue-500 text-4xl mb-4" />,
      title: "React.js",
      description:
        "Experienced in building reusable components, state management, and integrating APIs.",
    },
    {
      icon: <FaNodeJs className="text-green-500 text-4xl mb-4" />,
      title: "Node.js",
      description:
        "Proficient in creating RESTful APIs and handling server-side logic.",
    },
    {
      icon: <FaDatabase className="text-green-600 text-4xl mb-4" />,
      title: "MongoDB",
      description:
        "Experienced in designing database schemas and working with NoSQL databases.",
    },
  ];

  return (
    <main className="w-11/12 mx-auto border p-5 rounded-xl shadow-sm m-5">
      <section className="mb-10 my-5 mx-auto w-[90%]  p-5 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Who I Am</h2>
        <p className="text-lg text-gray-600 leading-8">
          I am Rifat, a Computer Science & Engineering student with a passion
          for crafting innovative and impactful web solutions. With a strong
          foundation in front-end technologies like{" "}
          <span className="font-semibold opacity-95">React.js</span> and
          back-end systems like{" "}
          <span className="font-semibold opacity-95">Node.js</span>and{" "}
          <span className="font-semibold opacity-85">MongoDB</span>, I
          specialize in building secure, scalable, and user-centric
          applications. I’m also expanding my expertise in{" "}
          <span className="font-semibold opacity-85">SEO</span> and{" "}
          <span className="font-semibold opacity-85">Ethical Hacking</span> to
          create well-optimized and secure digital products.
        </p>
      </section>

      <div className="py-6 bg-base-100 ">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            My Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border rounded-lg p-6 text-center"
              >
                {exp.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="mb-10 w-11/12 mx-auto py-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Notable Projects
          </h2>
        </div>
        <div className="space-y-6">
          <div className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Discount Pro</h3>
            <h3 className="text-xl font-bold text-blue-500">
              <a href="">Live Link</a>
            </h3>

            <p className="text-gray-600 leading-7 mt-2  opacity-85">
              BPL Dream Xi Cricket Team Builder is a React application that
              allows users to build their own fantasy cricket team by selecting
              players with virtual coins. The app features a clean interface
              inspired by a Figma design, with functionalities for player
              selection, balance management, and team customization.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800">
              Dream Leauge Cricket
            </h3>
            <h3 className="text-xl font-bold text-blue-500">
              {" "}
              <a href="https://bpl-dream-leauge-xi.netlify.app/">Live Link</a>
            </h3>
            <p className="text-gray-600 opacity-85 leading-7 mt-2">
              BPL Dream Xi Cricket Team Builder is a React application that
              allows users to build their own fantasy cricket team by selecting
              players with virtual coins. The app features a clean interface
              inspired by a Figma design, with functionalities for player
              selection, balance management, and team customization.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Adopt Your Pet</h3>
            <h3 className="text-xl font-bold text-blue-500">
              <a href="https://mrs028.github.io/Adopt-Your-Pet/">Live Link</a>
            </h3>

            <p className="text-gray-600 leading-7 mt-2  opacity-85">
              The Pet Adoption Project is a web application that allows users to
              explore various pets available for adoption. Users can view pet
              details, sort them by price, and like their favorite pets. The
              application fetches data dynamically from an API, providing a
              seamless user experience.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Gadget Heaven</h3>
            <h3 className="text-xl font-bold text-blue-500">
              {" "}
              <a href="https://dream-gadget-bd.netlify.app/">Live Link</a>
            </h3>

            <p className="text-gray-600 leading-7 mt-2 opacity-85">
              Product Showcase is a project designed to beautifully display a
              variety of products, complete with details for each item. Users
              can browse different categories such as Mobile, Laptop,
              Smartwatch, and more. They can view detailed information about
              each product and add items to their Cart or Wishlist with ease.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
