// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import { Link } from "react-router-dom";

// import { useDispatch, useSelector } from 'react-redux';
// import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
// import MyComponent from './components/MyComponent';
// import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <div className='app-container'>
//       hello world with baothi &amp; hoc reactjs
//       <MyComponent />
//     </div>
//     )
//   }
// }

// function App() {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div className='app-container'>
     <Header />
     <div>test link
      <div>
        <button type="button">
          <Link to="/users">go to user page</Link>
        </button>
        <button type="button">
          <Link to="/admins">go to Admin page</Link>
          </button>
      </div>
     </div>
    </div>
  )
};
export default App;
