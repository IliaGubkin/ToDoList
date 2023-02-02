import { useState } from 'react';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';

function App() {

  const [toDo, setToDo] = useState([])

  return (
    <div className="App">
      <Header />
      <ToDoList todo={toDo} settodo={setToDo}/>
      <AddToDo todo={toDo} settodo={setToDo}/>
    </div>
  );
}

export default App;
