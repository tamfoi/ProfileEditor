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

import { Skill } from "../types/profile";
import SkillFormItem from "./SkillFormItem";

type Props = {
  skill: Skill[];
  setSkill: React.Dispatch<SetStateAction<Skill[]>>;
};

const SkillForm: React.FC<Props> = (props) => {
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
          props.setSkill((items) => {
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
        items={props.skill}
        strategy={verticalListSortingStrategy}
      >
        {props.skill.map((item) => (
          <SkillFormItem key={item.id} skill={item} setSkill={props.setSkill} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default SkillForm;
