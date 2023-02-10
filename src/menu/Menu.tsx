import "./Menu.css";

import { css } from "@emotion/react";

const styles = {
  iconButtonList: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px 0px;
  `,
  iconButton: css`
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
    color: white;
    font-size: 28px;
    line-height: 1;
  `,
};

function Menu() {
  return (
    <div id="menu">
      <div css={styles.iconButtonList}>
        <div css={styles.iconButton} title={"インポート"}>
          <span css={styles.iconButtonBody}>&#x1f4e5;</span>
        </div>
        <div css={styles.iconButton} title={"エクスポート"}>
          <span css={styles.iconButtonBody}>&#x1f4e4;</span>
        </div>
        <div
          css={styles.iconButton}
          title={"ドキュメント"}
          onClick={() => {
            alert(`
▼シークレットモードについて：

1.テキストが下記の記述で切り替わります
<secret>非シークレットモード時に表示されるテキスト<st>シークレットモード時に表示されるテキスト</st></secret>

2.実績の画像にボカシが入るようになります
          `);
          }}
        >
          <span css={styles.iconButtonBody}>&#x1f4d6;</span>
        </div>
        <div
          css={styles.iconButton}
          title={"設定"}
          onClick={() => {
            alert(`未実装`);
          }}
        >
          <span css={styles.iconButtonBody}>&#x2699;</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
