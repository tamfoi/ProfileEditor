import { css } from "@emotion/react";

const styles = {
  root: css`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
  `,
};

type Props = {};

const Setting: React.FC<Props> = (props) => {
  return (
    <div css={styles.root}>
      <div>未実装</div>
    </div>
  );
};

export default Setting;
