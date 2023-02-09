import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SetStateAction } from "react";
import { Performance } from "../types/profile";
import PerformanceImageForm from "./PerformanceImageForm";

type Props = {
  performance: Performance;
  setPerformance: React.Dispatch<SetStateAction<Performance[]>>;
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
      <div>
        <PerformanceImageForm
          performance={props.performance}
          setPerformance={props.setPerformance}
        />
      </div>
      <div>{props.performance.name}</div>
      <div>{props.performance.overview}</div>
      <div>{props.performance.team}</div>
      <div>{props.performance.role}</div>
      <button {...attributes} {...listeners}>
        dnd
      </button>
    </div>
  );
};

export default PerformanceFormItem;
