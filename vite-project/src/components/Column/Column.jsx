import { format } from "date-fns";
import CardsItem from "../Cards/CardsItem/CardsItem";
import * as S from "./Column.styled";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Column({ title, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <DragDropContext onDragEnd={() => {}} onDragStart={() => {}}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div
              className="flex-center"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {cardList.map((card, index) => {
                return (
                  <Draggable
                    key={card?._id}
                    draggableId={card?._id.toString()}
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
                          topic={card.topic}
                          title={card.title}
                          date={format(card.date, "dd.MM.yy")}
                          key={card._id}
                          id={card._id}
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
      </DragDropContext>
      {/* <S.Cards>
        {cardList.map((card) => (
          <CardsItem
            topic={card.topic}
            title={card.title}
            date={format(card.date, "dd.MM.yy")}
            key={card._id}
            id={card._id}
          />
        ))}
      </S.Cards> */}
    </S.MainColumn>
  );
}

export default Column;
