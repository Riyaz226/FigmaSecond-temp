import './App.css';

/*Router Page */
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Fronted from './Components/Fronend'
//import We from '../src/Components/Weather'

function App() {
  return (
    <>
<Router>
     <Routes>
          <Route path='/' element={<Fronted/>}/>
    </Routes>    
    </Router> 
 
</>
  );
}

export default App;
