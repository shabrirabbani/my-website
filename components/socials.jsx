import React from "react";
import Image from 'next/image';

const Socials = (props) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-10">
        <a
          href="/cv.pdf"
          download="CV - Muhammad Shabri Rabbani.pdf"
          className="md:col-span-2 transition-all bg-primary-300 hover:bg-primary-500 text-on-background font-bold py-2 rounded flex flex-row justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0,0,256,256">
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{}}>
              <g transform="scale(2,2)">
                <path d="M33.5,9c-7.2,0 -13,5.8 -13,13v80c0,7.2 5.8,13 13,13h61c7.2,0 13,-5.8 13,-13v-80c0,-7.2 -5.8,-13 -13,-13zM33.5,15h61c3.9,0 7,3.1 7,7v80c0,3.9 -3.1,7 -7,7h-61c-3.9,0 -7,-3.1 -7,-7v-80c0,-3.9 3.1,-7 7,-7zM33.5,22v15h61v-15zM37.5,51c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h51c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3zM37.5,66c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h51c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3zM37.5,81c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h26.5c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3z"></path>
              </g>
            </g>
          </svg>
          <span className="pl-2">My Resume</span>
        </a>
        <a
          href={props.data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row content-center justify-center">
          <Image
            src="/logos/github-mark-white.png"
            alt="GitHub Logo"
            width={20}
            height={20}
            className="object-contain object-top mr-2"
          />
          <div className="">GitHub</div>
        </a>
        <a
          href={props.data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row content-center justify-center">
          <Image
            src="/logos/linkedin-mark-white.png"
            alt="LinkedIn Logo"
            width={20}
            height={20}
            className="object-contain object-top mr-2"
          />
          <div className="">LinkedIn</div>
        </a>
      </div>
    );
}

export default Socials