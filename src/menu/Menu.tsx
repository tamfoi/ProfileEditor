import "./Menu.css";

import { css } from "@emotion/react";
import { Profile } from "../types/profile";
import { useEffect, useState } from "react";
import ImportIcon from "../components/ImportIcon";
import ExportIcon from "../components/ExportIcon";
import QuestionIcon from "../components/QuestionIcon";
import GearIcon from "../components/GearIcon";
import OverlayWindow from "../components/OverlayWindow";
import Question from "./Question";
import Setting from "./Setting";

const styles = {
  iconButtonList: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px 0px;
  `,
  iconButton: css`
    display: block;
    position: relative;
    width: 45px;
    height: 45px;
    border: 2px solid white;
    border-radius: 100%;
    cursor: pointer;
  `,
  iconButtonBody: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
  `,
};

type Props = {
  onImportJson: (value: Profile) => void;
  onExportClick: () => void;
};

const Menu: React.FC<Props> = (props) => {
  const [path, setPath] = useState<string>("");

  const [opnedQuestion, setOpnedQuestion] = useState<boolean>(false);
  const [opendSetting, setOpendSetting] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!path) return;
      try {
        //** TODO: async await */
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          if (!xhr.response) return;
          props.onImportJson(xhr.response);
        };
        xhr.open("GET", path);
        xhr.responseType = "json";
        xhr.send();
      } catch {
        alert("ファイルが読み込めませんでした");
      }
    })();
  }, [path, setPath]);

  return (
    <div id="menu">
      <div css={styles.iconButtonList}>
        <label
          css={styles.iconButton}
          title={"バックアップをインポート"}
          htmlFor="import"
        >
          <span css={styles.iconButtonBody}>
            <ImportIcon />
          </span>
        </label>
        <input
          hidden
          id="import"
          name="import"
          type="file"
          accept=".json"
          onChange={(e) => {
            if (e.currentTarget.files && e.currentTarget.files?.length !== 0) {
              setPath(URL.createObjectURL(e.currentTarget.files[0]));
            }
          }}
        />
        <div
          css={styles.iconButton}
          title={"バックアップをエクスポート"}
          onClick={() => {
            props.onExportClick();
          }}
        >
          <span css={styles.iconButtonBody}>
            <ExportIcon />
          </span>
        </div>
        <div
          css={styles.iconButton}
          title={"ドキュメント"}
          onClick={() => {
            setOpnedQuestion(true);
          }}
        >
          <span css={styles.iconButtonBody}>
            <QuestionIcon />
          </span>
        </div>
        <div
          css={styles.iconButton}
          title={"設定"}
          onClick={() => {
            setOpendSetting(true);
          }}
        >
          <span css={styles.iconButtonBody}>
            <GearIcon />
          </span>
        </div>
      </div>
      <div>
        <OverlayWindow
          isOpen={opnedQuestion}
          onClose={() => {
            setOpnedQuestion(false);
          }}
        >
          <Question />
        </OverlayWindow>
        <OverlayWindow
          isOpen={opendSetting}
          onClose={() => {
            setOpendSetting(false);
          }}
        >
          <Setting />
        </OverlayWindow>
      </div>
    </div>
  );
};

export default Menu;
