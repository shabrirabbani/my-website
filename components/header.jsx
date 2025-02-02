import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
    return (
      <div className=" flex flex-col justify-between self-center lg:self-auto">
        <div className="">
          <h1 className="text-5xl subpixel-antialiased tracking-widest ">
            {props.data.name}
          </h1>
          <h2 className="text-surface-600 pt-10 font-normal tracking-wider w-3/4 text-lg">
            Specializing in building <span className="text-on-background">responsive and interactive</span>{" "}
            user interfaces with modern technologies.
          </h2>
        </div>
        <Navigation></Navigation>
        <Socials data={props.data.socials}></Socials>
      </div>
    );
}

export default Header