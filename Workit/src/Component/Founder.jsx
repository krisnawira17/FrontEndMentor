/* eslint-disable react/no-unescaped-entities */
import FounderPhoto from "../images/image-founder.webp";
import Pattern3 from "../images/bg-pattern-3.svg";
import Button from "./Button";

export default function Founder() {
  return (
    <div className="bg-white ">
      <div className="container mx-auto flex flex-row justify-center py-[9rem]">
        <img
          src={FounderPhoto}
          alt="founder photo"
          className="w-[28rem] h-[28rem] overflow-hidden"
        />
        <div className="h-[26rem] w-[46rem] flex flex-col bg-dark-purple relative right-[5rem] top-[12rem]">
          <div className="p-12">
            <h1 className="text-headingM font-fraunces text-white mb-[2rem]">
              Be the first to test
            </h1>
            <p className="font-manrope text-body text-white text-left leading-[32px] mb-[3rem]">
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with <br /> me to become a beta tester for our app and kickstart
              your company. <br /> Apply for access below and I’ll be in touch
              to schedule a call.
            </p>
            <Button title="Apply for access" />
            <img src={Pattern3} className="relative left-[24rem] -top-[4rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
