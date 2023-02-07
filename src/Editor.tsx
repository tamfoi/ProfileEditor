import { useEffect, SetStateAction } from "react";
import "./Editor.css";
import { Biography, Profile, Skill, Performance } from "./types/profile";
import autofillProfile from "./assets/profile.autofill.json";

type Props = Profile & {
  setName: React.Dispatch<SetStateAction<string>>;
  setRole: React.Dispatch<SetStateAction<string[]>>;
  setQualification: React.Dispatch<SetStateAction<string[]>>;
  setBiography: React.Dispatch<SetStateAction<Biography[]>>;
  setPr: React.Dispatch<SetStateAction<string>>;
  setSkill: React.Dispatch<React.SetStateAction<Skill[]>>;
  setPerformance: React.Dispatch<React.SetStateAction<Performance[]>>;
};

const Editor: React.FC<Props> = (props) => {
  useEffect(() => {
    props.setName(autofillProfile.name);
    props.setRole(autofillProfile.role);
    props.setQualification(autofillProfile.qualification);
    props.setBiography(autofillProfile.biography);
    props.setPr(autofillProfile.pr);
    props.setSkill(autofillProfile.skill);
    props.setPerformance(autofillProfile.performance);
  }, []);

  return (
    <div id="editor">
      <code>{props.name}</code>
      <code>{props.role}</code>
      <code>{props.qualification}</code>
      <code>{JSON.stringify(props.biography)}</code>
      <code>{props.pr}</code>
      <code>{JSON.stringify(props.skill)}</code>
      <code>{JSON.stringify(props.performance)}</code>
    </div>
  );
};

export default Editor;
