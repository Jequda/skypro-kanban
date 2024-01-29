import "./App.css";
import PopExit from "./components/Popups/PopExit/PopExit";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Column from "./components/Column/Column";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <MainContent>
          <Column title={"БЕЗ СТАТУСА"} />
          <Column title={"НУЖНО СДЕЛАТЬ"} />
          <Column title={"В РАБОТЕ"} />
          <Column title={"ТЕСТИРОВАНИЕ"} />
          <Column title={"ГОТОВО"} />
        </MainContent>
      </div>
    </>
  );
}

export default App;
