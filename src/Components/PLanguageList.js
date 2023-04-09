import PLanguageCard from "./PLanguageCard";

const PLanguageList = (props) => {
  return (
    <div>
      {props.planguages.map((planguage) => (
        <PLanguageCard key={planguage.title} {...planguage} />
      ))}
    </div>
  );
};

export default PLanguageList;
