import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { MainContent } from "../../components/MainContent/MainContent.styled";
import Column from "../../components/Column/Column";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useCards";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styled/Common/Global.styled";
import { useThemes } from "../../hooks/useThemes";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const { cards, setCards } = useTasks();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const { themeMode } = useThemes();

  useEffect(() => {
    getTodos({ token: user.token })
      .then((todos) => {
        setCards(todos.tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, [user, setCards]);

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <div className="wrapper">
          <Outlet />
          <Header />
          {isLoading ? (
            <img src="./public/loading.gif" alt="Loading" />
          ) : (
            <MainContent>
              {statusList.map((status) => (
                <Column
                  title={status}
                  droppableId={status}
                  key={status}
                  cardList={cards.filter((card) => card.status === status)}
                />
              ))}
            </MainContent>
          )}
        </div>
      </ThemeProvider>
    </>
  );
}
