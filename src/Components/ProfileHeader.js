import ProPic from "../assets/images/logo512.png";
const Header = () => {
  const dim = 150;
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 px-24 py-12 border bg-stone-700 hover:border-stone-500 border-stone-700">
      <img
        className="object-cover rounded-full"
        src={ProPic}
        alt=""
        style={{ maxHeight: dim, maxWidth: dim, minHeight: dim, minWidth: dim }}
      />
      <div className="font-bold ">Abid Ali KP</div>
      <div className="text-stone-400 ">Front-end Developer</div>
    </div>
  );
};

export default Header;
