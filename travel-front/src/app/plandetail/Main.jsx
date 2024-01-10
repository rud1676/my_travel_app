"use client";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import SchduleComponent from "./ScheduleComponent";
import { MainWrapper } from "../(main)/schedule/schedule.style";

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
            <MainWrapper ref={provide.innerRef} {...provide.droppableProps}>
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
                      <SchduleComponent
                        isSetting={isSetting}
                        onClickDelete={onClickDelete}
                        FormDataInitValue={FormDataInitValue}
                        detail={v}
                        setDelId={setDelId}
                        index={i + 1}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provide.placeholder}
            </MainWrapper>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
  return (
    <MainWrapper>
      {details.map((v, i) => {
        return (
          <SchduleComponent
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
    </MainWrapper>
  );
};

export default Main;
