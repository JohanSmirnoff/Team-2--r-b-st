import UserList from './components/UserList/UserList';
import TodoList from './components/TodoList/TodoList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator/Calculator';

function App() {
  return (
    <>
      <UserList />
      <TodoList />
      <Router>
        <Link to="/Calculator">Kalkylator, variant enkel</Link>
        <Routes>
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
