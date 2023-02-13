import { css } from "@emotion/react";

const styles = {
  root: css`
    padding: 30px 80px; ;
  `,
  list: css`
    border: 1px solid lightgray;
    border-radius: 10px;
    overflow: hidden;
  `,
  item: css`
    &:not(:first-child) {
      border-top: 1px solid lightgray;
    }
  `,
  title: css`
    background-color: lightgray;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
  `,
  content: css`
    padding: 10px;
  `,
};

type Props = {};

const Question: React.FC<Props> = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.list}>
        <div css={styles.item}>
          <div css={styles.title}>どのようにしてPDF化しますか</div>
          <div css={styles.content}>
            右クリックから印刷を選択してPDF化してください。
          </div>
        </div>
        <div css={styles.item}>
          <div css={styles.title}>シークレットモードとはなんですか？</div>
          <div css={styles.content}>
            <p>
              提出先に合わせて表示されるコンテンツを切り替えるための機能です。
            </p>
            <br />
            <p>1.テキストが下記の記述で切り替わります。</p>
            <p>
              <code>{`<secret>非シークレットモード時に表示されるテキスト<st>シークレットモード時に表示されるテキスト</st></secret>`}</code>
            </p>
            <br />
            <p>2.実績の画像にボカシが入るようになります。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
