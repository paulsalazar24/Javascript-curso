import './App.css';
import { TodoContar } from './TodoContar';
import { TodoBuscar } from './TodoBuscar';
import { TodoList } from './TodoList';
import { TodoBtn } from './TodoBtn';

function App() {
  return (
    <div className="App">
      <TodoContar />
      <TodoBuscar />
      <TodoList>
        <TodoiItem />
        <TodoiItem />
        <TodoiItem />
      </TodoList>
      <TodoBtn/>
    </div>
  );
}


function TodoiItem() {
  return (
    <>
      <li>
        <span>v</span>
        <p>Llorar con la llorono</p>
        <span>x</span>
      </li>
    </>
  );
}

export default App;
