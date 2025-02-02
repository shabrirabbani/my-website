import React from 'react';
import About from "@/components/about";
import Education from "@/components/education/education";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Projects from '@/components/projects/projects';
import {promises as fs} from 'fs';
import VantaClouds from '@/components/vantaClouds';


export default async function Home() {

  const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="relative min-h-screen">
      {/* VantaClouds as the background */}
      <div className="hidden md:block absolute inset-0 z-0">
        <VantaClouds />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="font-mono grid grid-cols-1 md:grid-cols-2 max-w-screen-xl p-3 sm:p-0">
          <Header data={data.general} />
          <div className=" max-h-[80vh] md:overflow-y-auto scroll-hidden px-5" id="scroll-container">
            <section id="about" data-section>
              <About data={data.general} />
            </section>
            <section id="experiences" data-section>
              <Experiences data={data.experiences} />
            </section>
            <section id="education" data-section>
              <Education data={data.education} />
            </section>
            <section id="projects" data-section>
              <Projects data={data.projects} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
