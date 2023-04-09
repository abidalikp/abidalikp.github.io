import CircularProgress from "./Icons/CircularProgress";

const LanguageCard = (props) => {
  return (
    <div className="p-2 font-semibold text-center w-fit">
      <div className="relative">
        <span className="absolute flex items-center justify-center w-full h-full text-xl font-bold text-stone-400">
          {props.percent}%
        </span>
        <CircularProgress percent={props.percent} />
      </div>
      {props.title}
    </div>
  );
};

export default LanguageCard;
