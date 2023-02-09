import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Biography } from "../types/profile";

type Props = {
  biography: Biography;
};

const BiographyFormItem: React.FC<Props> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.biography.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {JSON.stringify(props.biography)}
      <button {...attributes} {...listeners}>
        test
      </button>
    </div>
  );
};

export default BiographyFormItem;
