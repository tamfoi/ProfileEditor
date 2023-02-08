import { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Editor from "./Editor";
import Viewer from "./Viewer";
import {
  Biography,
  Name,
  Pr,
  Profile,
  Qualification,
  Role,
  Skill,
  Performance,
} from "./types/profile";

const emptyProfile: Profile = {
  name: "",
  role: "",
  qualification: "",
  biography: [],
  pr: "",
  skill: [],
  performance: [],
};

function App() {
  const [name, setName] = useState<Name>(emptyProfile.name);
  const [role, setRole] = useState<Role>(emptyProfile.role);
  const [qualification, setQualification] = useState<Qualification>(
    emptyProfile.qualification
  );
  const [biography, setBiography] = useState<Biography[]>(
    emptyProfile.biography
  );
  const [pr, setPr] = useState<Pr>(emptyProfile.pr);
  const [skill, setSkill] = useState<Skill[]>(emptyProfile.skill);
  const [performance, setPerformance] = useState<Performance[]>(
    emptyProfile.performance
  );

  const [isSecretMode, setIsSecretMode] = useState<boolean>(true);

  return (
    <div className="appWrapper">
      <div className="menuWrapper">
        <Menu />
      </div>
      <div className="editorWrapper">
        <Editor
          name={name}
          setName={setName}
          role={role}
          setRole={setRole}
          qualification={qualification}
          setQualification={setQualification}
          biography={biography}
          setBiography={setBiography}
          pr={pr}
          setPr={setPr}
          skill={skill}
          setSkill={setSkill}
          performance={performance}
          setPerformance={setPerformance}
        />
      </div>
      <div className="viewerWrapper">
        <Viewer
          name={name}
          role={role}
          qualification={qualification}
          biography={biography}
          pr={pr}
          skill={skill}
          performance={performance}
          isSecretMode={isSecretMode}
        />
      </div>
    </div>
  );
}

export default App;
