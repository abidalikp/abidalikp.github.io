import React from "react";
import Header from "../../Components/ProfileHeader";
import ProfileDetails from "../../Components/ProfileDetails";
import LanguageList from "../../Components/LanguageList";
import { languages, planguages } from "../../Data/data";
import PLanguageList from "../../Components/PLanguageList";

const UIDemo = () => {
  return (
    <div className="flex flex-col w-full gap-4 text-white">
      <Header />
      <ProfileDetails />
      <LanguageList languages={languages} />
      <PLanguageList planguages={planguages} />
    </div>
  );
};

export default UIDemo;
