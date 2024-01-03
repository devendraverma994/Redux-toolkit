import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './Redux/Slice/userSlice'

function App() {

  const { count } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <div className="App">
      <h1>Counter: { count }</h1>
      <button onClick={() => {handleIncrement()}}>Increment</button>
      <button disabled={ count == 0 } onClick={() => {handleDecrement()}}>Decrement</button>
      <button disabled={ count == 0 } onClick={() => {handleReset()}}>Reset</button>
    </div>
  );
}

export default App;
