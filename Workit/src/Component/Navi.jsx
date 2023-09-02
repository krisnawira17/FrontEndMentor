import Logo from "../images/logo-light.svg";

export default function Navi() {
  return (
    <nav className="container mx-auto flex flex-row justify-between pt-[1.5rem]">
      <img src={Logo} />
      <button className="text-white text-body font-semibold border-b-4 border-eucaplyptus-green pb-1 font-manrope hover:text-eucaplyptus-green transition-colors duration-75">
        Apply for access
      </button>
    </nav>
  );
}
