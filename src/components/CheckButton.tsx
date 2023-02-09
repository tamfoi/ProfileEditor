import { css } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";

const styles = {
  root: css`
    position: relative;
    display: block;
    cursor: pointer;
    padding: 5px 30px;
    border: 2px solid gray;
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.5;

    &:hover {
      opacity: 0.75;
    }

    &.isChecked {
      opacity: 1;
    }
  `,
  check: css`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    /* border: 1px solid gray; */
    background-color: gray;
    border-radius: 100%;

    &::before {
      position: absolute;
      top: calc(50% - 6px);
      left: 50%;
      display: block;
      content: "";
      width: 10px;
      height: 6px;
      border-left: 2px solid white;
      border-bottom: 2px solid white;
      transform: rotate(-45deg) translate(-50%, -50%);
    }
  `,
};

type Props = {
  initialValue: boolean;
  children: ReactNode;
  onChange: (value: boolean) => void;
};

const CheckButton: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState<boolean>(props.initialValue);

  useEffect(() => {
    props.onChange(checked);
  }, [checked, setChecked]);

  return (
    <div
      css={styles.root}
      className={`${checked ? "isChecked" : ""}`}
      onClick={() => {
        setChecked((prev) => !prev);
      }}
    >
      <div css={styles.check} />
      <div>{props.children}</div>
    </div>
  );
};

export default CheckButton;
