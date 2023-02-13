import { css } from "@emotion/react";

const styles = {
  root: css`
    position: relative;
    width: 22px;
    height: 22px;
    border: 4px solid white;
    border-radius: 100%;
  `,
  body1: css`
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: white;
    top: calc(50% - 10px);
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  body2: css`
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: white;
    top: calc(50% + 10px);
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  body3: css`
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: white;
    top: calc(50% - 7px);
    left: calc(50% + 11px);
    transform: rotate(-35deg) translate(-50%, -50%);
  `,
  body4: css`
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: white;
    top: calc(50% + 7px);
    left: calc(50% + 7px);
    transform: rotate(35deg) translate(-50%, -50%);
  `,
  body5: css`
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: white;
    top: calc(50% + 3px);
    left: calc(50% - 8px);
    transform: rotate(-35deg) translate(-50%, -50%);
  `,
  body6: css`
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: white;
    top: calc(50% - 4px);
    left: calc(50% - 12px);
    transform: rotate(35deg) translate(-50%, -50%);
  `,
};

type Props = {};

const GearIcon: React.FC<Props> = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.body1}></div>
      <div css={styles.body2}></div>
      <div css={styles.body3}></div>
      <div css={styles.body4}></div>
      <div css={styles.body5}></div>
      <div css={styles.body6}></div>
    </div>
  );
};

export default GearIcon;
