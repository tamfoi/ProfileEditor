import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Performance } from "../types/profile";

type Props = {
  performance: Performance;
};

const PerformanceFormItem: React.FC<Props> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.performance.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {JSON.stringify(props.performance)}
      <button {...attributes} {...listeners}>
        test
      </button>
    </div>
  );
};

export default PerformanceFormItem;
