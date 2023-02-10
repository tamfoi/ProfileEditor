import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DraggableIcon from "../components/DraggableIcon";
import { PerformanceImage, Performance } from "../types/profile";

import { css } from "@emotion/react";
import { SetStateAction } from "react";
import RemoveIcon from "../components/RemoveIcon";

const styles = {
  root: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0px 20px;
    width: 320px;

    &:not(:first-of-type) {
      margin-top: 15px;
    }
  `,
  imageWrapper: css`
    position: relative;
    width: 100%;
    height: 130px;
  `,
  image: css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  `,
};

type Props = {
  performance: Performance;
  performanceImage: PerformanceImage;
  setPerformance: React.Dispatch<SetStateAction<Performance[]>>;
};

const PerformanceImageFormItem: React.FC<Props> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.performanceImage.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div css={styles.root} ref={setNodeRef} style={style}>
      <div
        onClick={() => {
          props.setPerformance((items) => {
            const controlIndex = items.findIndex(
              (item) => item.id === props.performance.id
            );
            items[controlIndex].image = [
              ...items[controlIndex].image.filter(
                (item) => item.id !== props.performanceImage.id
              ),
            ];
            return [...items];
          });
        }}
      >
        <RemoveIcon />
      </div>
      <div css={styles.imageWrapper}>
        <img css={styles.image} src={props.performanceImage.src} />
      </div>
      <div {...attributes} {...listeners}>
        <DraggableIcon />
      </div>
    </div>
  );
};

export default PerformanceImageFormItem;
