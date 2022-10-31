import {Landing} from "./pages";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Landing/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
