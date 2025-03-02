import PLanguageCard from "./PLanguageCard";

const PLanguageList = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {props.planguages.map((planguage) => (
        <PLanguageCard key={planguage.title} {...planguage} />
      ))}
    </div>
  );
};

export default PLanguageList;
