import "./App.css";
import PopExit from "./components/Popups/PopExit/PopExit";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Column from "./components/Column/Column";
import { useEffect, useState } from "react";
import { cardList } from "./data";
import { format } from "date-fns";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []); // Пустой массив зависимостей для запуска только при монтировании компонента
  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: format(new Date(), "dd.MM.yy"),
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} />
        {isLoading ? (
          <img src="./public/loading.gif" alt="Loading" />
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <Column
                title={status}
                key={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </div>
    </>
  );
}

export default App;
