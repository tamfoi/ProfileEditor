import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SetStateAction } from "react";
import DraggableIcon from "../components/DraggableIcon";
import RemoveIcon from "../components/RemoveIcon";
import { Biography } from "../types/profile";
import { css } from "@emotion/react";

const styles = {
  root: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0px 20px;

    &:not(:first-of-type) {
      margin-top: 15px;
    }
  `,
  period: css`
    width: 200px;
  `,
  overview: css`
    flex: 1;
  `,
  textarea: css`
    display: block;
    width: 100%;
    height: 130px;
    resize: vertical;
  `,
};

type Props = {
  biography: Biography;
  setBiography: React.Dispatch<SetStateAction<Biography[]>>;
};

const BiographyFormItem: React.FC<Props> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.biography.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div css={styles.root} ref={setNodeRef} style={style}>
      <div
        onClick={() => {
          props.setBiography((items) => {
            const filtered = items.filter(
              (item) => item.id !== props.biography.id
            );
            return [...filtered];
          });
        }}
      >
        <RemoveIcon />
      </div>

      <div css={styles.period}>
        <textarea
          css={styles.textarea}
          value={props.biography.period}
          onChange={(e) => {
            props.setBiography((items) => {
              const controlIndex = items.findIndex((item) => {
                return item.id === props.biography.id;
              });
              items[controlIndex].period = e.target.value;
              return [...items];
            });
          }}
          placeholder="期間を入力してください"
        />
      </div>

      <div css={styles.overview}>
        <textarea
          css={styles.textarea}
          value={props.biography.overview}
          onChange={(e) => {
            props.setBiography((items) => {
              const controlIndex = items.findIndex((item) => {
                return item.id === props.biography.id;
              });
              items[controlIndex].overview = e.target.value;
              return [...items];
            });
          }}
          placeholder="概要を入力してください"
        />
      </div>

      <div {...attributes} {...listeners}>
        <DraggableIcon />
      </div>
    </div>
  );
};

export default BiographyFormItem;
