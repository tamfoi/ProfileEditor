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
      transform: translate(-50%, -50%);
      background-color: white;
    }
    &::before {
      width: 10px;
      height: 2px;
    }
    &::after {
      width: 2px;
      height: 10px;
    }
  `,
};

type Props = {};

const AddIcon: React.FC<Props> = (props) => {
  return <div css={styles.root}></div>;
};

export default AddIcon;
