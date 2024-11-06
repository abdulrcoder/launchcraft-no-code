import React from "react";
import { BackgroundLines } from "./ui/background-lines";

import { Button } from "./ui/moving-border";

const CalltoActionSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#1E222E] to-black text-white">
      <BackgroundLines className="py-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Ready to Build Your Landing Page?
        </h2>
        <p className="my-4 text-lg">
          Sign up today and launch your website in minutes with LaunchCraft.
        </p>
        <Button className="px-6 py-4 ">Get Started for Free</Button>
      </BackgroundLines>
    </div>
  );
};

export default CalltoActionSection;
