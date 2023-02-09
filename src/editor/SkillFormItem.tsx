import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SetStateAction } from "react";
import CheckButton from "../components/CheckButton";
import DraggableIcon from "../components/DraggableIcon";
import RemoveIcon from "../components/RemoveIcon";
import { Skill } from "../types/profile";

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
    <div ref={setNodeRef} style={style}>
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

      <div /* css={styles.period} */>
        <textarea
          /* css={styles.textarea} */
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

      <div /* css={styles.overview} */>
        <textarea
          /* css={styles.textarea} */
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

      <div>
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
