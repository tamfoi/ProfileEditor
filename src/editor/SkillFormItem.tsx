import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Skill } from "../types/profile";

type Props = {
  skill: Skill;
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
      {JSON.stringify(props.skill)}
      <button {...attributes} {...listeners}>
        test
      </button>
    </div>
  );
};

export default SkillFormItem;
