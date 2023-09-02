/* eslint-disable react/no-unescaped-entities */
import FounderPhoto from "../images/image-founder.webp";
import Pattern3 from "../images/bg-pattern-3.svg";
import Button from "./Button";

export default function Founder() {
  return (
    <div className="bg-white ">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-center pt-[20rem] md:py-[9rem]">
        <img
          src={FounderPhoto}
          alt="founder photo"
          className="w-[28rem] h-[28rem] overflow-hidden object-contain"
        />
        <div className="h-[26rem] w-[46rem] flex flex-col bg-dark-purple relative right-[5rem] mx-auto md:mx-0 -top-[2rem] md:top-[12rem]">
          <div className="lg:p-12 p-10">
            <h1 className="lg:text-headingM text-[48px] font-fraunces text-white mb-[2rem]">
              Be the first to test
            </h1>
            <p className="font-manrope lg:text-body text-[16px] text-white text-left leading-[32px] mb-[3rem]">
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call.
            </p>
            <Button title="Apply for access" />
            <img
              src={Pattern3}
              className="hidden md:block relative lg:left-[24rem] lg:-top-[4rem] left-[12rem] -top-[6rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
