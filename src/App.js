import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <div className="d-flex app-conatiner">
    <Sidebar />
    <div className="flex-grow-1">
      <Header />
      <h2 className='p-3 main-heading'>Dashboard</h2>
      <Dashboard />
    </div>
  </div>
  );
}

export default App;
