import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeTable from './employeTable';
import EmployeeCreate from './employeeCreate';
import EmployeeEdit from './employeEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeTable />} ></Route>
          <Route path='/employee/create' element={<EmployeeCreate />}></Route>
          <Route path='/employee/edit/:empid' element={<EmployeeEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
