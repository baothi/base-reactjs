import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';


function App() {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();
  return (
    <div>
      hello world with baothi &amp; hoc reactjs
      <MyComponent />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
  );
}


function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>Count = {count}</div>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      </header>
    </div>
  );
}
export default App;
