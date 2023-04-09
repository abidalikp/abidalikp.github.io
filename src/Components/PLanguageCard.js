const PLanguageCard = (props) => {
  return (
    <div className="flex flex-col w-full gap-2 p-4">
      <div className="flex font-semibold">
        <span className="flex-grow ">{props.title}</span>
        <span className="text-stone-400">{props.percent} %</span>
      </div>
      <div className="w-full rounded bg-stone-600">
        <div
          className="h-2 bg-red-600 rounded"
          style={{ width: props.percent + "%" }}
        />
      </div>
    </div>
  );
};

export default PLanguageCard;
