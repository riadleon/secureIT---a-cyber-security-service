import logo from './logo.svg';
import './App.css';
import { Router, RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
