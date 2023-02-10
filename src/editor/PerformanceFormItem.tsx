import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SetStateAction } from "react";
import { css } from "@emotion/react";

import DraggableIcon from "../components/DraggableIcon";
import RemoveIcon from "../components/RemoveIcon";
import { Performance } from "../types/profile";
import PerformanceImageForm from "./PerformanceImageForm";

const styles = {
  root: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0px 20px;

    &:not(:first-of-type) {
      margin-top: 30px;
    }
  `,
  textareaWrapper: css`
    flex: 1;
  `,
  name: css`
    height: 50px;
  `,
  overview: css`
    margin-top: 10px;
    height: 200px;
  `,
  team: css`
    margin-top: 10px;
    height: 50px;
  `,
  role: css`
    margin-top: 10px;
    height: 50px;
  `,
  nameTextarea: css``,
  overviewTextarea: css``,
  teamTextarea: css``,
  roleTextarea: css``,
  textarea: css`
    display: block;
    width: 100%;
    height: 100%;
    resize: vertical;
  `,
};

type Props = {
  performance: Performance;
  setPerformance: React.Dispatch<SetStateAction<Performance[]>>;
};

const PerformanceFormItem: React.FC<Props> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.performance.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div css={styles.root} ref={setNodeRef} style={style}>
      <div
        onClick={() => {
          props.setPerformance((items) => {
            const filtered = items.filter(
              (item) => item.id !== props.performance.id
            );
            return [...filtered];
          });
        }}
      >
        <RemoveIcon />
      </div>
      <div>
        <PerformanceImageForm
          performance={props.performance}
          setPerformance={props.setPerformance}
        />
      </div>
      <div css={styles.textareaWrapper}>
        <div css={styles.name}>
          <textarea
            css={styles.textarea}
            value={props.performance.name}
            onChange={(e) => {
              props.setPerformance((items) => {
                const controlIndex = items.findIndex((item) => {
                  return item.id === props.performance.id;
                });
                items[controlIndex].name = e.target.value;
                return [...items];
              });
            }}
            placeholder="実績名を入力してください"
          />
        </div>
        <div css={styles.overview}>
          <textarea
            css={styles.textarea}
            value={props.performance.overview}
            onChange={(e) => {
              props.setPerformance((items) => {
                const controlIndex = items.findIndex((item) => {
                  return item.id === props.performance.id;
                });
                items[controlIndex].overview = e.target.value;
                return [...items];
              });
            }}
            placeholder="概要を入力してください"
          />
        </div>
        <div css={styles.team}>
          <textarea
            css={styles.textarea}
            value={props.performance.team}
            onChange={(e) => {
              props.setPerformance((items) => {
                const controlIndex = items.findIndex((item) => {
                  return item.id === props.performance.id;
                });
                items[controlIndex].team = e.target.value;
                return [...items];
              });
            }}
            placeholder="体制を入力してください"
          />
        </div>
        <div css={styles.role}>
          <textarea
            css={styles.textarea}
            value={props.performance.role}
            onChange={(e) => {
              props.setPerformance((items) => {
                const controlIndex = items.findIndex((item) => {
                  return item.id === props.performance.id;
                });
                items[controlIndex].role = e.target.value;
                return [...items];
              });
            }}
            placeholder="役割を入力してください"
          />
        </div>
      </div>

      <div {...attributes} {...listeners}>
        <DraggableIcon />
      </div>
    </div>
  );
};

export default PerformanceFormItem;
