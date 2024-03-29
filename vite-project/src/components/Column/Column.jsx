import { format } from "date-fns";
import CardsItem from "../Cards/CardsItem/CardsItem";
import * as S from "./Column.styled";

function Column({ title, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
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
