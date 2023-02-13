import { css } from "@emotion/react";

const styles = {
  root: css`
    position: relative;
  `,
  body: css`
    position: absolute;
    font-size: 28px;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

type Props = {};

const QuestionIcon: React.FC<Props> = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.body}>?</div>
    </div>
  );
};

export default QuestionIcon;
