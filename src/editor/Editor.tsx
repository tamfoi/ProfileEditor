import { useEffect, SetStateAction } from "react";
import "./Editor.css";
import { Biography, Profile, Skill, Performance } from "../types/profile";
import autofillProfile from "../assets/profile.autofill.json";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import BiographyForm from "./BiographyForm";
import SkillForm from "./SkillForm";
import PerformanceFrom from "./PerformanceForm";

type Props = Profile & {
  setName: React.Dispatch<SetStateAction<string>>;
  setRole: React.Dispatch<SetStateAction<string>>;
  setQualification: React.Dispatch<SetStateAction<string>>;
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

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div id="editor">
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
        <label className="formLabel" htmlFor="name">
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
        <label className="formLabel" htmlFor="name">
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
        <p className="formLabel">略歴</p>
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
        <p className="formLabel">スキル</p>
        <div>
          <SkillForm skill={props.skill} setSkill={props.setSkill} />
        </div>
      </div>

      <div className="formContent">
        <p className="formLabel">実績</p>
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
