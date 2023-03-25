import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a student at the University of Ghent in my freetime i like to build websites and apps.
           Let me help you fullfill your dream as an entrepeneur. If you need a landing page , an e-commerce app , a brand new website for your marketing agency or anything else that you desire  I'm your guy. 
           Lets work together to fulfill your potential to the fullest.
        </p>

        <br />

        <p className="text-xl">
          I have worked with experienced developers across the world who worked at Facebook, Twitter, Pinterest and Adobe. 
          When it comes to user-experience or design I always try to enhance the user experience based on your target audience. 
         
        </p>
      </div>
    </div>
  );
};

export default About;
