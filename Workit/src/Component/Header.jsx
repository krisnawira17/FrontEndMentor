import Navi from "./Navi";
import Button from "./Button";
import Pattern1 from "../images/bg-pattern-1.svg";
import Pattern2 from "../images/bg-pattern-2.svg";
import HeroImage from "../images/image-hero.webp";

export default function Header() {
  return (
    <>
      <div className="bg-dark-purple h-[46rem] rounded-b-headerRound relative z-10">
        <Navi />
        <div className="mt-[4rem] text-center ">
          <h1 className="text-white text-headingL font-fraunces leading-[90px] mb-[50px]">
            Data{" "}
            <span className="border-b-4 border-eucaplyptus-green">
              tailored
            </span>{" "}
            to <br /> your needs
          </h1>
          <Button title="Learn More" />
          <img
            src={HeroImage}
            className="w-[45rem] h-[27rem] mx-auto mt-[8rem]"
          />
          <img src={Pattern1} className="absolute top-28 left-[-8rem]" />
          <img src={Pattern2} className="absolute top-60 right-[1rem]" />
        </div>
      </div>
    </>
  );
}
