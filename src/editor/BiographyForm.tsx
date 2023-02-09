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

import { Biography } from "../types/profile";
import BiographyFormItem from "./BiographyFormItem";

type Props = {
  biography: Biography[];
  setBiography: React.Dispatch<SetStateAction<Biography[]>>;
};

const BiographyForm: React.FC<Props> = (props) => {
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
          props.setBiography((items) => {
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
        items={props.biography}
        strategy={verticalListSortingStrategy}
      >
        {props.biography.map((item) => (
          <BiographyFormItem
            key={item.id}
            biography={item}
            setBiography={props.setBiography}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default BiographyForm;
