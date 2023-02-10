import { useState } from "react";
import "./App.css";
import Menu from "./menu/Menu";
import Editor from "./editor/Editor";
import Viewer from "./viewer/Viewer";
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
        <Menu
          onImportJson={(value) => {
            setName(value.name);
            setRole(value.role);
            setQualification(value.qualification);
            setBiography(value.biography);
            setPr(value.pr);
            setSkill(value.skill);
            setPerformance(value.performance);
          }}
          onExportClick={() => {
            const jsonString = JSON.stringify({
              name,
              role,
              qualification,
              biography,
              pr,
              skill,
              performance,
            });
            const jsonBlob = new Blob([jsonString], { type: "text/plan" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(jsonBlob);
            link.download = "profile.json";
            link.click();
          }}
        />
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
          isSecretMode={isSecretMode}
          setIsSecretMode={setIsSecretMode}
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
