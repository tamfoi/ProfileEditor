import "./Editor.css";
import { Profile } from "./types/profile";

type Props = Profile;

const Editor: React.FC<Props> = (props) => {
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
