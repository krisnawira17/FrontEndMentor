export default function Button(btn) {
  return (
    <button className=" bg-eucaplyptus-green px-[32px] py-[13px] font-manrope font-bold hover:bg-dark-purple hover:border-eucaplyptus-green border border-opacity-0 hover:text-eucaplyptus-green transition-all duration-150">
      {btn.title}
    </button>
  );
}
