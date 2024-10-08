import { useEffect, SetStateAction } from "react";
import "./Editor.css";
import { Biography, Profile, Skill, Performance } from "../types/profile";
import autofillProfile from "../assets/profile.autofill.json";

import BiographyForm from "./BiographyForm";
import SkillForm from "./SkillForm";
import PerformanceFrom from "./PerformanceForm";
import AddIcon from "../components/AddIcon";
import CheckButton from "../components/CheckButton";

type Props = Profile & {
  setName: React.Dispatch<SetStateAction<string>>;
  setRole: React.Dispatch<SetStateAction<string>>;
  setQualification: React.Dispatch<SetStateAction<string>>;
  setBiography: React.Dispatch<SetStateAction<Biography[]>>;
  setPr: React.Dispatch<SetStateAction<string>>;
  setSkill: React.Dispatch<React.SetStateAction<Skill[]>>;
  setPerformance: React.Dispatch<React.SetStateAction<Performance[]>>;
  isSecretMode: boolean;
  setIsSecretMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Editor: React.FC<Props> = (props) => {
  /* useEffect(() => {
    props.setName(autofillProfile.name);
    props.setRole(autofillProfile.role);
    props.setQualification(autofillProfile.qualification);
    props.setBiography(autofillProfile.biography);
    props.setPr(autofillProfile.pr);
    props.setSkill(autofillProfile.skill);
    props.setPerformance(autofillProfile.performance);
  }, []); */

  return (
    <div id="editor">
      <div className="formContent">
        <CheckButton
          initialValue={props.isSecretMode}
          onChange={(value: boolean) => {
            props.setIsSecretMode(value);
          }}
        >
          シークレットモード
        </CheckButton>
      </div>
      <div className="formContent">
        <label className="formLabel" htmlFor="name">
          名前
        </label>
        <textarea
          className="formTextArea"
          id="name"
          name="name"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
      </div>

      <div className="formContent">
        <label className="formLabel" htmlFor="role">
          役割
        </label>
        <textarea
          className="formTextArea"
          id="role"
          name="role"
          value={props.role}
          onChange={(e) => props.setRole(e.target.value)}
        />
      </div>

      <div className="formContent">
        <label className="formLabel" htmlFor="qualification">
          資格
        </label>
        <textarea
          className="formTextArea"
          id="qualification"
          name="qualification"
          value={props.qualification}
          onChange={(e) => props.setQualification(e.target.value)}
        />
      </div>

      <div className="formContent">
        <div className="formLabelWrapper">
          <div className="formLabel">略歴</div>
          <div
            onClick={() => {
              props.setBiography((items) => {
                return [
                  ...items,
                  {
                    id: new Date().getTime().toString(16),
                    period: "",
                    overview: "",
                  },
                ];
              });
            }}
          >
            <AddIcon />
          </div>
        </div>

        <div>
          <BiographyForm
            biography={props.biography}
            setBiography={props.setBiography}
          />
        </div>
      </div>

      <div className="formContent">
        <label className="formLabel" htmlFor="pr">
          PR
        </label>
        <textarea
          className="formTextArea"
          id="pr"
          name="pr"
          value={props.pr}
          onChange={(e) => props.setPr(e.target.value)}
        />
      </div>

      <div className="formContent">
        <div className="formLabelWrapper">
          <div className="formLabel">スキル</div>
          <div
            onClick={() => {
              props.setSkill((items) => {
                return [
                  ...items,
                  {
                    id: new Date().getTime().toString(16),
                    category: "",
                    name: "",
                    workExperience: false,
                  },
                ];
              });
            }}
          >
            <AddIcon />
          </div>
        </div>
        <div>
          <SkillForm skill={props.skill} setSkill={props.setSkill} />
        </div>
      </div>

      <div className="formContent">
        <div className="formLabelWrapper">
          <div className="formLabel">実績</div>
          <div
            onClick={() => {
              props.setPerformance((items) => {
                return [
                  ...items,
                  {
                    id: new Date().getTime().toString(16),
                    name: "",
                    image: [],
                    overview: "",
                    team: "",
                    role: "",
                  },
                ];
              });
            }}
          >
            <AddIcon />
          </div>
        </div>
        <div>
          <PerformanceFrom
            performance={props.performance}
            setPerformance={props.setPerformance}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
