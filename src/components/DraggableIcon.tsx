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
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 2px;
      background-color: white;
    }

    &::before {
      top: calc(50% - 2px);
    }
    &::after {
      top: calc(50% + 2px);
    }
  `,
};

type Props = {};

const DraggableIcon: React.FC<Props> = (props) => {
  return <div css={styles.root}></div>;
};

export default DraggableIcon;
