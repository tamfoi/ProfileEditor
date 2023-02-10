import { SetStateAction, useEffect, useState } from "react";

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

import { css } from "@emotion/react";

import { Performance } from "../types/profile";
import PerformanceImageFormItem from "./PerformanceImageFormItem";

const styles = {
  addImageButton: css`
    position: relative;
    display: block;
    width: 320px;
    text-align: center;
    border-radius: 5px;
    color: white;
    background-color: gray;
    font-weight: bold;
    line-height: 1;
    padding: 10px;
    cursor: pointer;

    &::before,
    &::after {
      display: block;
      content: "";
      position: absolute;
      top: 50%;
      transform: translate(0%, -50%);
      background-color: white;
    }
    &::before {
      width: 10px;
      height: 2px;
      left: 10px;
    }
    &::after {
      width: 2px;
      height: 10px;
      left: 14px;
    }
  `,
};

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

  const [imagePath, setImagePath] = useState<string>("");

  useEffect(() => {
    (async () => {
      if (!imagePath) return;
      try {
        //** TODO: async await */
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          const reader = new FileReader();
          reader.onloadend = () => {
            props.setPerformance((items) => {
              const controlIndex = items.findIndex(
                (item) => item.id === props.performance.id
              );
              items[controlIndex].image = [
                ...items[controlIndex].image,
                {
                  id: new Date().getTime().toString(16),
                  src: reader.result as string,
                },
              ];
              return [...items];
            });
          };
          reader.readAsDataURL(xhr.response);
        };
        xhr.open("GET", imagePath);
        xhr.responseType = "blob";
        xhr.send();
      } catch {
        alert("画像が読み込めませんでした");
      }
    })();
  }, [imagePath, setImagePath]);

  return (
    <div>
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
            <PerformanceImageFormItem
              key={item.id}
              performance={props.performance}
              performanceImage={item}
              setPerformance={props.setPerformance}
            />
          ))}
        </SortableContext>
      </DndContext>
      <div>
        <label
          css={styles.addImageButton}
          htmlFor={`addImage-${props.performance.id}`}
        >
          画像を追加する
        </label>
        <input
          hidden
          id={`addImage-${props.performance.id}`}
          name={`addImage-${props.performance.id}`}
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            if (e.currentTarget.files && e.currentTarget.files?.length !== 0) {
              setImagePath(URL.createObjectURL(e.currentTarget.files[0]));
            }
          }}
        />
      </div>
    </div>
  );
};

export default PerformanceImageForm;
