import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Student from './Components/Student';
import Details from './Components/Details';

function App() {
  return (
    <BrowserRouter>
    <Student />
      <Routes>
        <Route path='/details/:value' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
