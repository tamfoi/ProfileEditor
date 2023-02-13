import { css } from "@emotion/react";

const styles = {
  root: css`
    position: relative;
  `,
  box: css`
    position: absolute;
    width: 23px;
    height: 12px;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    top: calc(50% + 2px);
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  arrow: css`
    &::before,
    &::after {
      display: block;
      content: "";
      position: absolute;

      left: 50%;
    }
    &::before {
      width: 10px;
      height: 10px;
      border-right: 2px solid white;
      border-bottom: 2px solid white;
      top: calc(50% - 3px);
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      width: 2px;
      height: 15px;
      background-color: white;
      top: calc(50% - 4px);
      transform: translate(-50%, -50%);
    }
  `,
};

type Props = {};

const ImportIcon: React.FC<Props> = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.box}></div>
      <div css={styles.arrow}></div>
    </div>
  );
};

export default ImportIcon;
