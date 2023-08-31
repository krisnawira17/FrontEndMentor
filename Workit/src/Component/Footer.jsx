import DarkLogo from "../images/logo-dark.svg";
import IconFB from "../images/icon-facebook.svg";
import IconIG from "../images/icon-instagram.svg";
import IconTwt from "../images/icon-twitter.svg";

export default function Footer() {
  return (
    <div className="my-20">
      <div className="container mx-auto mt-[7rem]">
        <div className="flex flex-col justify-center items-center ">
          <img src={DarkLogo} alt="dark logo" />
          <div className="flex flex-row justify-between mt-[4rem] gap-[1.75rem] ">
            <img src={IconFB} alt="Facebook icon" />
            <img src={IconTwt} alt="Twitter icon" />
            <img src={IconIG} alt="Instagram icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
