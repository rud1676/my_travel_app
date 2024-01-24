"use client";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Schdule from "../Schedule";
import { Box } from "@mui/material";
import styles from "./main.module.css";

// 재 배치시 적용시키는 함수
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const Main = ({
  isSetting,
  setDelId,
  onClickDelete,
  details,
  setDetails,
  plan_id,
  FormDataInitValue,
}) => {
  // 드래그해서 놓았을 때 실행
  const onDragEnd = (result) => {
    // 드래그가 취소된 경우
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      details,
      result.source.index,
      result.destination.index
    );

    setDetails(newItems);
  };
  if (isSetting) {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provide) => (
            <Box
              className={styles.mainWrapper}
              ref={provide.innerRef}
              {...provide.droppableProps}
            >
              {details.map((v, i) => (
                <Draggable key={v.id} draggableId={v.id.toString()} index={i}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        border: snapshot.isDragging ? "2px solid blue" : "",
                      }}
                    >
                      <Schdule
                        plan_id={plan_id}
                        isSetting={isSetting}
                        onClickDelete={onClickDelete}
                        FormDataInitValue={FormDataInitValue}
                        detail={v}
                        setDelId={setDelId}
                        index={i + 1}
                        key={v.id}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provide.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
  return (
    <Box className={styles.mainWrapper}>
      {details.map((v, i) => {
        return (
          <Schdule
            plan_id={plan_id}
            index={i + 1}
            isSetting={isSetting}
            onClickDelete={onClickDelete}
            FormDataInitValue={FormDataInitValue}
            key={v.id}
            detail={v}
            setDelId={setDelId}
          />
        );
      })}
    </Box>
  );
};

export default Main;
