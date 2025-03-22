"use client";

import About from "./components/About/About";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Personalia from "./components/Personalia";
import ScrollSnapContainer from "./components/Utilities/ScrollSnap";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto w-full">
      <ScrollSnapContainer direction="y" snapAlign="start">
        <Intro />
        
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full">
            <Personalia />
          </div>
        </div>
        
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full">
            <About />
          </div>
        </div>
        
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full">
            <Experience />
          </div>
        </div>
      </ScrollSnapContainer>
    </main>
  );
}