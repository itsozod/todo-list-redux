// import { useSelector } from "react-redux";
import "./App.css";
import { Todo } from "./components/Todo/Todo";
import { Header } from "./components/header/Header";
import { InputContainer } from "./components/inputContainer/InputContainer";

function App() {
  return (
    <>
      <Header />
      <InputContainer />
      <main>
        <div className="todos-container">
          <Todo />
        </div>
      </main>
    </>
  );
}

export default App;
