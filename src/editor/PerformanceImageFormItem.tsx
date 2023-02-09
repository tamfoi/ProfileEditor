import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { PerformanceImage } from "../types/profile";

type Props = {
  performanceImage: PerformanceImage;
};

const PerformanceImageFormItem: React.FC<Props> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.performanceImage.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div>{props.performanceImage.src}</div>
      <button {...attributes} {...listeners}>
        dnd
      </button>
    </div>
  );
};

export default PerformanceImageFormItem;
