import './stylecomponents/App.css';
import { useSelector , useDispatch} from 'react-redux';
import About from './components/about';
import {increment,decrement} from './actions/counterActions';
import Home from './components/Home';
function App() {
  

  

const counter = useSelector(state=>state.counter);

const dispatch=useDispatch();

return (
    <div className="App">
<Home/>

    </div>
  );
}

export default App;
