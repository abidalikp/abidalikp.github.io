import LanguageCard from "./LanguageCard";

const LanguageList = (props) => {
  return (
    <div className="flex overflow-x-scroll">
      {props.languages.map((language) => (
        <LanguageCard key={language.title} {...language} />
      ))}
    </div>
  );
};

export default LanguageList;
