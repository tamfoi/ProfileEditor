import { css } from "@emotion/react";

const styles = {
  root: css`
    position: relative;
    width: 12px;
    padding: 12px;
    border-radius: 100%;
    background-color: gray;
    cursor: pointer;

    &::before,
    &::after {
      display: block;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: white;
    }
    &::before {
      width: 10px;
      height: 2px;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      width: 2px;
      height: 10px;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  `,
};

type Props = {};

const RemoveIcon: React.FC<Props> = (props) => {
  return <div css={styles.root}></div>;
};

export default RemoveIcon;
