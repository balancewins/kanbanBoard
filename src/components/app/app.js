import Header from '../header/header';
import AddTaskForm from '../add-task-form/add-task-form';
import '../../css/style.css';

function App() {
  return (
    <div className="board-app">
      <Header />
      <main className="board-app__main">
        <div className="board-app__inner">
          <AddTaskForm />
        </div>
      </main>
    </div>
  );
}

export default App;
