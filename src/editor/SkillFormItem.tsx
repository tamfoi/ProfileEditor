import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SetStateAction } from "react";
import CheckButton from "../components/CheckButton";
import DraggableIcon from "../components/DraggableIcon";
import RemoveIcon from "../components/RemoveIcon";
import { Skill } from "../types/profile";
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
  category: css`
    flex: 1;
  `,
  name: css`
    flex: 1;
  `,
  workExperience: css`
    width: 160px;
  `,
  textarea: css`
    display: block;
    width: 100%;
    height: 50px;
    resize: vertical;
  `,
};

type Props = {
  skill: Skill;
  setSkill: React.Dispatch<SetStateAction<Skill[]>>;
};

const SkillFormItem: React.FC<Props> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.skill.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div css={styles.root} ref={setNodeRef} style={style}>
      <div
        onClick={() => {
          props.setSkill((items) => {
            const filtered = items.filter((item) => item.id !== props.skill.id);
            return [...filtered];
          });
        }}
      >
        <RemoveIcon />
      </div>

      <div css={styles.category}>
        <textarea
          css={styles.textarea}
          value={props.skill.category}
          onChange={(e) => {
            props.setSkill((items) => {
              const controlIndex = items.findIndex((item) => {
                return item.id === props.skill.id;
              });
              items[controlIndex].category = e.target.value;
              return [...items];
            });
          }}
          placeholder="カテゴリを入力してください"
        />
      </div>

      <div css={styles.name}>
        <textarea
          css={styles.textarea}
          value={props.skill.name}
          onChange={(e) => {
            props.setSkill((items) => {
              const controlIndex = items.findIndex((item) => {
                return item.id === props.skill.id;
              });
              items[controlIndex].name = e.target.value;
              return [...items];
            });
          }}
          placeholder="名前を入力してください"
        />
      </div>

      <div css={styles.workExperience}>
        <CheckButton
          initialValue={props.skill.workExperience}
          onChange={(value: boolean) => {
            props.setSkill((items) => {
              const controlIndex = items.findIndex((item) => {
                return item.id === props.skill.id;
              });
              items[controlIndex].workExperience = value;
              return [...items];
            });
          }}
        >
          実務経験有
        </CheckButton>
      </div>

      <div {...attributes} {...listeners}>
        <DraggableIcon />
      </div>
    </div>
  );
};

export default SkillFormItem;
