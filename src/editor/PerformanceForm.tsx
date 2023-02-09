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
import PerformanceFormItem from "./PerformanceFormItem";

type Props = {
  performance: Performance[];
  setPerformance: React.Dispatch<SetStateAction<Performance[]>>;
};

const PerformanceFrom: React.FC<Props> = (props) => {
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
            const oldIndex = items.findIndex((item) => {
              return item.id === active.id;
            });
            const newIndex = items.findIndex((item) => {
              return item.id === over.id;
            });

            return arrayMove(items, oldIndex, newIndex);
          });
        }
      }}
    >
      <SortableContext
        items={props.performance}
        strategy={verticalListSortingStrategy}
      >
        {props.performance.map((item) => (
          <PerformanceFormItem key={item.id} performance={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default PerformanceFrom;
