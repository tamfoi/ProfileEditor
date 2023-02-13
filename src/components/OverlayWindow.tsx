import { css } from "@emotion/react";
import { ReactNode } from "react";

const styles = {
  root: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 10;
    overflow: auto;
  `,
  close: css`
    position: fixed;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    border: 2px solid gray;
    border-radius: 100%;
    cursor: pointer;

    &::before,
    &::after {
      display: block;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: gray;
    }
    &::before {
      width: 25px;
      height: 3px;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      width: 3px;
      height: 25px;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  `,
  children: css`
    width: 100%;
    height: 100%;
  `,
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const OverlayWindow: React.FC<Props> = (props) => {
  if (!props.isOpen) return <></>;

  return (
    <div css={styles.root}>
      <div
        css={styles.close}
        onClick={() => {
          props.onClose();
        }}
      ></div>
      <div css={styles.children}>{props.children}</div>
    </div>
  );
};

export default OverlayWindow;
