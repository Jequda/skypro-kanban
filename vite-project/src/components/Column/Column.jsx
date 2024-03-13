import { format } from "date-fns";
import CardsItem from "../Cards/CardsItem/CardsItem";
import * as S from "./Column.styled";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import { useState } from "react";

function Column({ title, cardList }) {
  // const [storedItems, setStoredItems] = useState(cardList);

  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      {/* <DragDropContext onDragEnd={() => {}} onDragStart={() => {}}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div
              className="flex-center"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {storedItems.map((item, index) => {
                return (
                  <Draggable
                    key={item?._id}
                    draggableId={item?._id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="items"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CardsItem
                          topic={item.topic}
                          title={item.title}
                          date={format(item.date, "dd.MM.yy")}
                          key={item._id}
                          id={item._id}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext> */}
      <S.Cards>
        {cardList.map((card) => (
          <CardsItem
            topic={card.topic}
            title={card.title}
            date={format(card.date, "dd.MM.yy")}
            key={card._id}
            id={card._id}
          />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
}

export default Column;
