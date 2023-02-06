import "./Viewer.css";
import { Profile } from "./types/profile";

type Props = Profile;

const Viewer: React.FC<Props> = (props) => {
  return (
    <div id="viewer">
      <p className="head">プロフィール</p>

      <div>
        <p>名前</p>
        <p>{props.name}</p>
      </div>
      <div>
        <p>役割</p>
        <p>{props.role}</p>
      </div>
      <div>
        <p>資格</p>
        <p>{props.qualification}</p>
      </div>

      <div>
        <p>略歴</p>
        <p>{JSON.stringify(props.biography)}</p>
      </div>

      <div>
        <p>PR</p>
        <p>{props.pr}</p>
      </div>

      <div>
        <p>スキル</p>
        <p>{JSON.stringify(props.skill)}</p>
      </div>

      <div>
        <p>実績</p>
        <p>{JSON.stringify(props.performance)}</p>
      </div>
    </div>
  );
};

export default Viewer;
