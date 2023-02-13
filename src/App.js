import './App.css';
import TaskList from './components/TaskList';
import MainLayout from './components/MainLayout';
import NewTask from './components/NewTask';

function App() {
  return (
    <>
      <MainLayout>
        <TaskList />
      </MainLayout>
    </>
  );
}

export default App;
