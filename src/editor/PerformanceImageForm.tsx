import { SetStateAction } from "react";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Performance } from "../types/profile";
import PerformanceImageFormItem from "./PerformanceImageFormItem";

type Props = {
  performance: Performance;
  setPerformance: React.Dispatch<SetStateAction<Performance[]>>;
};

const PerformanceImageForm: React.FC<Props> = (props) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        const { active, over } = event;

        if (over !== null && active.id !== over.id) {
          props.setPerformance((items) => {
            const controlIndex = items.findIndex((item) => {
              return item.id === props.performance.id;
            });
            const oldIndex = items[controlIndex].image.findIndex((item) => {
              return item.id === active.id;
            });
            const newIndex = items[controlIndex].image.findIndex((item) => {
              return item.id === over.id;
            });

            items[controlIndex].image = arrayMove(
              items[controlIndex].image,
              oldIndex,
              newIndex
            );

            return [...items];
          });
        }
      }}
    >
      <SortableContext
        items={props.performance.image}
        strategy={verticalListSortingStrategy}
      >
        {props.performance.image.map((item) => (
          <PerformanceImageFormItem key={item.id} performanceImage={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default PerformanceImageForm;
